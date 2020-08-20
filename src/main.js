import Vue from 'vue'
import VueRouter from "vue-router";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from "./router/router";
import App from './App.vue'

import DefaultLayout from "@/layouts/DefaultLayout";
import PrimaryLayout from "@/layouts/PrimaryLayout";

Vue.component("default-layout", DefaultLayout)
Vue.component("primary-layout", PrimaryLayout)

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueRouter);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
