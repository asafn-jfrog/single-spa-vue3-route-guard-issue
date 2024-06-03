import {createRouter, createWebHistory} from 'vue-router'
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import {createWebHistorySingleSpaSupport} from "@/createWebHistory";

const router = createRouter({
    history: createWebHistorySingleSpaSupport(),
    routes: [
        {
            path: '/:pathMatch(.*)',
            children: [
                { path: '/', redirect: '/component-a' },
                {
                    path: '/component-a',
                    component: ComponentA,
                },
                {
                    path: '/component-b',
                    component: ComponentB,
                }
            ]
        }
    ],
})

router.beforeEach((to, from, next) => {
    console.log(`host beforeEach     - from ${from.path} to ${to.path}`)
    next();
})

window['hostRouter'] = router;

export { router as default }
