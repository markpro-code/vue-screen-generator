import { validateComponent } from '@/commons/component-schema'
import { v4 as uuidv4 } from 'uuid'
import { computed } from 'vue'
/**
 * Hook for common component props define
 * @returns {Object} Common props for components
 */
export const getComponentProps = () => {
  return {
    define: {
      type: Object,
      validator: (schema) => {
        const isValid = validateComponent(schema)
        return isValid
      },
    },
  }
}

/**
 * Hook for common component behaviors
 * @returns {Object} Common behaviors for components
 */
export const useComponentBehavior = (props) => {
  const id = uuidv4()
  const defaultSlotElements = computed(() => props.define.slots.default ?? [])

  const commonExpose = { id }

  return {
    id,
    defaultSlotElements,
    commonExpose,
  }
}
