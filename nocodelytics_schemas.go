package nocodelytics_schemas

import (
	_ "embed"

	"github.com/xeipuuv/gojsonschema"
)

//go:embed "jsonSchemas/eventsQueueInput.schema.json"
var eventsQueueInputSchema string

//go:embed "jsonSchemas/event.schema.json"
var eventSchema string

func BuildEventsQueueInputSchemas() *gojsonschema.Schema {
	sl := gojsonschema.NewSchemaLoader()
	eventsQueueInputLoader := gojsonschema.NewStringLoader(eventsQueueInputSchema)
	eventsQueueInput, err := sl.Compile(eventsQueueInputLoader)
	if err != nil {
		panic(err)
	}
	return eventsQueueInput
}

func BuildEventSchemas() *gojsonschema.Schema {
	sl := gojsonschema.NewSchemaLoader()
	eventLoader := gojsonschema.NewStringLoader(eventsQueueInputSchema)
	event, err := sl.Compile(eventLoader)
	if err != nil {
		panic(err)
	}
	return event
}
