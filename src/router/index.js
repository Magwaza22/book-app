import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import SellABook from '../views/SellABook.vue';
import BuyBook from '../views/BuyBook.vue';
import ManageBooks from '../views/ManageBooks.vue';
import AddBook from '../views/AddBook.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import SellerAppointment from '../views/SellerAppointment.vue';
import BuyerAppointment from '../views/BuyerAppointment.vue';
import SellerDetails from '../views/SellerDetails.vue';
import SellerFunction from "@/views/SellerFunction.vue";
import Orders from "@/views/Orders.vue";
import Ratings from "@/views/Ratings.vue";
import BookListings from "@/views/BookListings.vue";

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/sell', name: 'SellABook', component: SellABook },
    { path: '/buy', name: 'BuyBook', component: BuyBook },
    { path: '/manage', name: 'ManageBooks', component: ManageBooks },
    { path: '/addbook', name: 'AddBook', component: AddBook },
    { path: '/signin', name: 'SignIn', component: SignIn },
    { path: '/signup', name: 'SignUp', component: SignUp },
    { path: '/sellerappointment', name: 'SellerAppointment', component: SellerAppointment },
    { path: '/buyerappointment', name: 'BuyerAppointment', component: BuyerAppointment },
    { path: '/sellerdetails', name: 'SellerDetails', component: SellerDetails },
    { path: '/sellerfunction', name: 'SellerFunction', component: SellerFunction},
    { path: '/orders', name: 'Orders', component: Orders},
    { path: '/ratiings', name: 'Ratings', component: Ratings},
    { path: '/booklistings', name: 'BookListings', component: BookListings},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
