import componentSchema from '@/commons/component-schema'
import Ajv from 'ajv'
import { describe, expect, it } from 'vitest'

describe('Component Schema Validation', () => {
  const ajv = new Ajv({ schemas: [componentSchema] })
  const validate = ajv.getSchema('component-define')

  it('should validate a basic component with required fields', () => {
    const component = {
      commonProps: {
        id: 'button-1',
        type: 'button',
      },
      props: {},
      slots: {},
    }

    const isValid = validate(component)
    expect(isValid).toBe(true)
  })

  it('should validate a component with all possible fields', () => {
    const component = {
      commonProps: {
        id: 'button-1',
        name: 'Primary Button',
        type: 'button',
      },
      props: {
        variant: 'primary',
        size: 'large',
      },
      slots: {
        default: [
          {
            commonProps: {
              id: 'text-1',
              type: 'text',
            },
            props: {},
            slots: {},
          },
        ],
        icon: [
          {
            commonProps: {
              id: 'icon-1',
              type: 'icon',
            },
            props: {},
            slots: {},
          },
        ],
      },
    }

    const isValid = validate(component)
    expect(isValid).toBe(true)
  })

  it('should fail validation when required fields are missing', () => {
    const invalidComponent = {
      commonProps: {
        // missing required 'id' and 'type'
      },
      props: {},
      slots: {},
    }

    const isValid = validate(invalidComponent)
    expect(isValid).toBe(false)
    expect(validate.errors[0].params.missingProperty).toBe('id')
    expect(validate.errors[0].instancePath).toBe('/commonProps')
  })

  it('should fail validation when id is not a string', () => {
    const invalidComponent = {
      commonProps: {
        id: 123, // should be string
        type: 'button',
      },
      props: {},
      slots: {},
    }

    const isValid = validate(invalidComponent)
    expect(isValid).toBe(false)
    expect(validate.errors[0].keyword).toBe('type')
    expect(validate.errors[0].instancePath).toBe('/commonProps/id')
    expect(validate.errors[0].params.type).toBe('string')
  })

  it('should validate nested components in slots', () => {
    const component = {
      commonProps: {
        id: 'container-1',
        type: 'container',
      },
      props: {},
      slots: {
        default: [
          {
            commonProps: {
              id: 'button-1',
              type: 'button',
            },
            props: {
              variant: 'primary',
            },
            slots: {
              default: [
                {
                  commonProps: {
                    id: 'text-1',
                    type: 'text',
                  },
                  props: {},
                  slots: {},
                },
              ],
            },
          },
        ],
      },
    }

    const isValid = validate(component)
    expect(isValid).toBe(true)
  })

  it('should fail validation when slots contain invalid component', () => {
    const invalidComponent = {
      commonProps: {
        id: 'container-1',
        type: 'container',
      },
      props: {},
      slots: {
        default: [
          {
            commonProps: {
              // missing required fields
            },
            props: {},
            slots: {},
          },
        ],
      },
    }

    const isValid = validate(invalidComponent)
    expect(isValid).toBe(false)
    expect(validate.errors[0].params.missingProperty).toBe('id')
    expect(validate.errors[0].instancePath).toBe('/slots/default/0/commonProps')
  })
})
