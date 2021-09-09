import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { store, key } from './store';
import './index.css';
import feather from 'feather-icons';

feather.replace();
const app = createApp(App);

//Modules
app.use(router);
app.use(store, key);
app.mount('#app');

const appTheme = localStorage.getItem('theme');
if (
    appTheme === 'dark' &&
    document.querySelector<HTMLImageElement>('body')!.classList.contains('app-theme')
) {
    document.querySelector<HTMLImageElement>('body')!.classList.add('bg-primary-dark');
} else {
    document.querySelector<HTMLImageElement>('body')!.classList.add('bg-secondary-light');
}
