import Ajv from 'ajv'

const ajv = new Ajv()

// ajv style component define schema
const schema = {
  $id: 'component-define',
  type: 'object',
  properties: {
    // component common properties
    commons: {
      type: 'object',
      required: ['nodeId', 'type'],
      properties: {
        nodeId: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
      },
    },

    // component custom properties
    properties: {
      type: 'object',
    },

    // component event handlers
    events: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          handler: { type: 'string' },
        },
      },
    },

    // component slots
    slots: {
      type: 'object',
      patternProperties: {
        '.*': {
          type: 'array',
          items: {
            $ref: 'component-define',
          },
        },
      },
    },
  },
}

export const validateComponent = ajv.compile(schema)
export const validateCommonProps = ajv.compile(schema.properties.commons)
export const validateSlots = ajv.compile(schema.properties.slots)
