import { describe, test, expect } from "vitest";

import eventsQueueInputSchema from "../jsonSchemas/eventsQueueInput.schema.json";

import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv);

const base = {
  createdAt: "2018-11-13T20:20:39+00:00",
  s: "151a8a85-bfa4-4915-8460-7d95d7437984",
  t: "v",
  p: "/",
  v: "25679743-a2d9-4bbe-8319-b7dc7b5accb7",
};

const valid = [
  base,
  {
    ...base,
    p: "/pricing/details-again",
  },
  {
    ...base,
    p: "/123?utm_source=facebook",
  },
  { ...base, c: "one-class and-another" },
  { ...base, i: "one-id and-another" },
  { ...base, va: "some value" },
  { ...base, va: "" },
  { ...base, va: null },
  { ...base, va: undefined },
  { ...base, ci: undefined },
  { ...base, r: "https://json-schema.org/" },
  { ...base, f: "i" },
  { ...base, is: "some-slug" },
  { ...base, cl: 0, ci: 2 },
  { ...base, cl: 5, ci: 0 },
  { ...base, d: "test.com" },
  { ...base, ip: "2a01:4b00:9d23:ab00:cc6e:66b:ea0:66b7" },
  { ...base, ip: "137.220.105.106" },
  { ...base, createdAt: "2018-11-13 20:20:39" },
];
const invalid = [
  { ...base, createdAt: "2018-11-13 25:20:39" },
  { ...base, s: "hello" },
  { ...base, t: "whatever" },
  { ...base, p: "clearly not a path" },
  { ...base, c: 123 },
  { ...base, i: {} },
  { ...base, v: undefined },
  { ...base, something: "else" },
  { ...base, r: "referer" },
  { ...base, f: "interact" },
  { ...base, cl: -1 },
  { ...base, cl: 20000 },
  { ...base, ci: 20000 },
];

describe("eventsQueueInput", () => {
  test.each([
    ...valid.map((d) => [d, true]),
    ...invalid.map((d) => [d, false]),
  ])(".add(%o, %o)", (data, expected) => {
    const validate = ajv.compile(eventsQueueInputSchema);
    try {
      expect(validate(data)).toBe(expected);
    } catch (error) {
      console.error(validate.errors);
      throw error;
    }
    expect(
      validate(
        valid.reduce(
          (accumulator, currentValue) => ({ ...accumulator, ...currentValue }),
          {} as any
        )
      )
    ).toBe(true);
    expect(
      validate(
        invalid.reduce(
          (accumulator, currentValue) => ({ ...accumulator, ...currentValue }),
          {} as any
        )
      )
    ).toBe(false);
  });
});
