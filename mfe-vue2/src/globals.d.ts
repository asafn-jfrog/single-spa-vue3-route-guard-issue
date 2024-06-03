import VueRouter from "vue-router";

declare global {
    interface Window {
        $: any;
        $vueRouter: VueRouter;
    }
}

declare global {
    namespace jest {
        interface Matchers<R> {
            apiToHaveBeenCalledWith<E extends any[]>(...params: E): R;

            apiToHaveBeenLastCalledWith<E extends any[]>(...params: E): R;

            apiToHaveBeenNthCalledWith<E extends any[]>(nthCall: number, ...params: E): R;
        }
    }
}
