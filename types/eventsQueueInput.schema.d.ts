/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A raw event inserted into the queue, waiting to be processed
 */
export interface EventsQueueInput {
  /**
   * The unique identifier for an event.
   */
  id?: string;
  /**
   * The date the event was first received by the api.
   */
  createdAt: string;
  /**
   * The site id the event is coming from.
   */
  s: string;
  /**
   * The event type: click, cms, form, keyboard, view.
   */
  t: "c" | "m" | "f" | "k" | "v";
  /**
   * The path (e.g /pricing) the event originated from.
   */
  p: string;
  /**
   * The css class(es) of the html element interacted with.
   */
  c?: string;
  /**
   * The css id(s) of the html element interacted with.
   */
  i?: string;
  /**
   * Any value attached to the event. E.g the value of a html input.
   */
  va?: string | null;
  /**
   * The ID of the visitor creating the event
   */
  v: string;
  /**
   * The referer (e.g google.com)
   */
  r?: string;
  /**
   * The form stage. Progresses as the user interact with the form.
   */
  f?: "d" | "i" | "s";
  /**
   * The CMS item slug. This is provided by the user with the css class 'nocodelytics-list-item'.
   */
  is?: string;
  /**
   * The index position of HTML element for the CMS list.
   */
  cl?: number;
  /**
   * The index position of HTML element for the CMS item.
   */
  ci?: number;
  /**
   * The domain the event is coming from
   */
  d?: string;
  /**
   * The ip address that originated the event.
   */
  ip?: string;
}
