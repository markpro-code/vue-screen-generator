import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

// Example component
const ExampleComponent = {
  template: '<div>{{ message }}</div>',
  props: {
    message: {
      type: String,
      default: 'Hello Vue!',
    },
  },
}

describe('Example Component', () => {
  it('renders the message prop', () => {
    const wrapper = mount(ExampleComponent, {
      props: {
        message: 'Test Message',
      },
    })
    expect(wrapper.text()).toBe('Test Message')
  })

  it('uses default message when no prop is provided', () => {
    const wrapper = mount(ExampleComponent)
    expect(wrapper.text()).toBe('Hello Vue!')
  })
})
