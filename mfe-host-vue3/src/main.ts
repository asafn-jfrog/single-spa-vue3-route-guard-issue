import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue'
import router from './router'
import App from './App.vue'

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        name: this.name
      })
    }
  },
  handleInstance: (app) => {
    app.use(router)
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
