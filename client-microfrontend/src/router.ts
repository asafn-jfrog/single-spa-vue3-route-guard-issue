import {createRouter, createWebHistory} from 'vue-router'
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";


const router = createRouter({
    history: createWebHistory(),
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
    console.log('root route guard')
    console.log('from ', from.path)
    console.log('to   ', to.path)
    next();
})

window['router'] = router;

export { router as default }
