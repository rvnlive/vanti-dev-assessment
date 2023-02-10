import App from '@/App.vue';
import pinia from '@/plugins/pinia.js';
import vuetify from '@/plugins/vuetify.js';
import Vue from 'vue';

const app = new Vue({
  pinia,
  vuetify,
  render: (h) => h(App)
});
app.$mount('#app');
