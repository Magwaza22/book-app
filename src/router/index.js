import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import SellABook from '../views/SellABook.vue';
import BuyBook from '../views/BuyBook.vue';
import ManageBooks from '../views/ManageBooks.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/sell', name: 'SellABook', component: SellABook },
    { path: '/buy', name: 'BuyBook', component: BuyBook },
    { path: '/manage', name: 'ManageBooks', component: ManageBooks },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
