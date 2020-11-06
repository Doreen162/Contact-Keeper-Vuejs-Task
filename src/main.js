import Vue from "vue";
import "./plugins/vuetify.js";
import VueRouter from "vue-router";
import Routes from './components/routes';

import axios from "axios";

import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';


import store from "./stores/store";

import App from "./App.vue";
import './registerServiceWorker'




Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(SuiVue);

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

let isRefreshing = false;
let subscribers = [];

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    const {
      config,
      response: { status, data }
    } = err;

    const originalRequest = config;

    if (data.message === "Missing token") {
      router.push({ name: "login" });
      return Promise.reject(false);
    }

    if (originalRequest.url.includes("login_check")) {
      return Promise.reject(err);
    }

    if (status === 401 && data.message === "Expired token") {
      if (!isRefreshing) {
        isRefreshing = true;
        store
          .dispatch("REFRESH_TOKEN")
          .then(({ status }) => {
            if (status === 200 || status == 204) {
              isRefreshing = false;
            }
            subscribers = [];
          })
          .catch(error => {
            console.error(error);
          });
      }

      const requestSubscribers = new Promise(resolve => {
        subscribeTokenRefresh(() => {
          resolve(axios(originalRequest));
        });
      });

      onRefreshed();

      return requestSubscribers;
    }
  }
);

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

function onRefreshed() {
  subscribers.map(cb => cb());
}

subscribers = [];

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount("#app");
