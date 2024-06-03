# Vue3 Microfrontends

This repository contains a Vue.js microfrontend application

## Getting Started
## to reconstruct the Single-Spa + Vue3 vue-router issue please go to this branch:
```single-spa-vue-router-issue```

Follow these steps to run the application:

1. **Build client-microfrontend**

   Navigate to the `client-microfrontend` directory and run the build command:

    ```bash
    cd client-microfrontend
    npm run build
    ```

2. **Serve client-microfrontend**

   Serve the `client-microfrontend` using `http-server` on port 8420:

    ```bash
    npx http-server -p 8420 ./client-microfrontend/dist/
    ```

3. **Serve index.html**

   Serve the `index.html` file using `http-server` on port 8080:

    ```bash
    npx http-server -p 8080 .
    ```

4. **Access the Application**

   Open your web browser and navigate to [http://127.0.0.1:8080](http://127.0.0.1:8080)

5. **Interact with the Application**

   Click on components A and B. You will see in the browser's console that the Vue-router route guard is called twice.

## Issue

There is an issue where the Vue-router route guard is called twice when navigating between components. This behavior is unexpected and needs to be addressed.
