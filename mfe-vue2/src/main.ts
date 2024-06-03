import Vue from 'vue';
/*eslint-disable*/
import AccessApp from './AccessApp.vue';
import singleSpaVue from 'single-spa-vue';
import router from './router'

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: async () => {
		return {
			router,
			render: h => h(AccessApp),
			el: '#vue-mf',
		};
	},
});


export const bootstrap = vueLifecycles.bootstrap;
export const unmount = vueLifecycles.unmount;
export const mount = vueLifecycles.mount;
