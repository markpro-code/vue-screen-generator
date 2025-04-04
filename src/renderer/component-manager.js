export default class ComponentManager {
  #componentMap = new Map()
  constructor() {
    // register all components
    const components = import.meta.glob('./components/**', { eager: true })
    for (const [path, module] of Object.entries(components)) {
      const componentName = path.replace(/\.\/components\/(.*)\.vue/, '$1')
      this.register(componentName, module.default)
    }
  }

  register(name, component) {
    console.info('componentManager :: register', name, component)
    this.#componentMap.set(name, component)
  }

  getComponent(name) {
    return this.#componentMap.get(name)
  }
}
