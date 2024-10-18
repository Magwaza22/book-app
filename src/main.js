
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RegisterComponent from './views/BuyerRegister.vue';
import LoginComponent from './views/BuyerLogin.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuyerRegister from "@/views/BuyerRegister.vue";

const routes = [
    { path: '/', views: RegisterComponent },
    { path: '/register', views: BuyerRegister },
    { path: '/login',views : BuyerRegister }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');


