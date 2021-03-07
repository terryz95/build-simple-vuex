let Vue, installed = false

class Store {
  constructor(options) {
    this.$options = options

    this.state = new Vue({
      data: options.state
    })
    this.mutations = options.mutations
    this.actions = options.actions
    options.getters && this.handleGetters(options.getters)

    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }
  commit(type, payload) {
    this.mutations[type](this.state, payload)
  }
  dispatch(type, payload) {
    this.actions[type](this, payload)
  }
  handleGetters(getters) {
    this.getters = Object.create(null)
    Object.keys(getters).forEach(type => {
      Object.defineProperty(this.getters, type, {
        get: () => getters[type](this.state)
      })
    })
  }
}

export default {
  Store,
  install(_vue) {
    if (installed && Vue === _vue) return
    installed = true
    Vue = _vue
    Vue.mixin({
      beforeCreate() {
        const options = this.$options
        if (options.store) {
          Vue.prototype.$store = options.store
        }
      }
    })
  }
}