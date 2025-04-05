// ajv style component define schema
const schema = {
  $id: 'component-define',
  type: 'object',
  properties: {
    // component common properties
    commonProps: {
      type: 'object',
      required: ['id', 'type'],
      properties: {
        id: {
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
    props: {
      type: 'object',
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

export default schema
