import App from '@/App.vue';
import pinia from '@/plugins/pinia.js';
import vuetify from '@/plugins/vuetify.js';
import VueRouter from 'vue-router'
import router from '@/router'
import Vue from 'vue';

Vue.use(VueRouter)

const app = new Vue({
  pinia,
  vuetify,
  router,
  render: (h) => h(App)
});
app.$mount('#app');
