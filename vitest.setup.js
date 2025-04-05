import { config } from '@vue/test-utils'
import { beforeAll } from 'vitest'

// Configure Vue Test Utils global settings
beforeAll(() => {
  config.global.stubs = {}
  config.global.mocks = {}
})

// Add any global test setup here
