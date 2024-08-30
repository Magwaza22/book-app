import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import SellABook from '../views/SellABook.vue';
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import SellerDetails from "@/views/SellerDetails.vue";
import SellerFunction from "@/views/SellerFunction.vue";
import AddBook from "@/views/AddBook.vue";
import SellerAppointment from "@/views/SellerAppointment.vue";
import BuyBook from '../views/BuyBook.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/sell', name: 'SellABook', component: SellABook },
    { path: '/sign-in', name: 'SignIn', component: SignIn},
    { path: '/sign-up', name: 'SignUp', component: SignUp},
    { path: '/seller-details', name: 'SellerDetails', component: SellerDetails},
    { path: '/seller-function', name: 'SellerFunction', component: SellerFunction},
    { path: '/add-book', name: 'AddBook', component: AddBook},
    { path: '/seller-appointment', name: 'SellerAppointment',component: SellerAppointment},
    { path: '/buy', name: 'BuyBook', component: BuyBook },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
