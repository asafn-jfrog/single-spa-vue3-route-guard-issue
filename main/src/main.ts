import { registerApplication, start, RegisterApplicationConfig } from 'single-spa';



registerApplication({
    name: 'client_core',
    // @ts-ignore
    app: System.import('client-microfrontend'),
    activeWhen: '/'
} as RegisterApplicationConfig);

start({
    urlRerouteOnly: false,
})
