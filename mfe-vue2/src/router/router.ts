import Vue from 'vue';
import VueRouter from 'vue-router';
// @ts-ignore
import ComponentA from "../components/ComponentA.vue";
// @ts-ignore
import ComponentB from "../components/ComponentB.vue";

Vue.use(VueRouter);

const router: VueRouter = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: {template: '<router-view />'},
            children: [
                // { path: '', redirect: '/mfe-vue2/component-a' },
                {
                    path: 'mfe-vue2/component-a',
                    component: ComponentA,
                },
                {
                    path: 'mfe-vue2/component-b',
                    component: ComponentB,
                }
            ]
        },
    ],
});

router.beforeEach((to, from, next) => {
    console.log(`mfe Vue2 beforeEach - from ${from.path} to ${to.path}`)
    next();
})

window['mfeVue2Router'] = router;


export {router as default};
