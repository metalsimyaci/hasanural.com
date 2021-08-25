import { createApp } from "vue";
import App from './App.vue';
import Icon from './components/Icon/Icon.vue';
import router from './router/router';
// import store from './store';

const app = createApp(App);
app.use(router);
// app.use(store);
app.component('Icon', Icon);
app.mount('#app');
