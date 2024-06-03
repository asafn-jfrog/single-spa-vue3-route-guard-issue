import {createRouter, createWebHistory} from 'vue-router'
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import {createWebHistorySingleSpaSupport} from "@/createWebHistory";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/mfe-vue3',
            children: [
                { path: '', redirect: '/mfe-vue3/component-a' },
                {
                    path: 'component-a',
                    component: ComponentA,
                },
                {
                    path: 'component-b',
                    component: ComponentB,
                }
            ]
        }
    ],
})

router.beforeEach((to, from, next) => {
    console.log(`mfe Vue3 beforeEach - from ${from.path} to ${to.path}`)
    next();
})

window['mfeVue3Router'] = router;

export { router as default }
