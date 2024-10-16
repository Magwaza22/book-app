import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import SellABook from '../views/SellABook.vue';
import SignIn from "@/views/SellerLogin.vue";
import SignUp from "@/views/SellerRegister.vue";
import SellerDetails from "@/views/SellerDetails.vue";
import SellerFunction from "@/views/SellerFunction.vue";
import AddBook from "@/views/AddBook.vue";
import SellerAppointment from "@/views/SellerAppointment.vue";
import BuyBook from '../views/BuyBook.vue';
import BuyerLogin from "@/views/BuyerLogin.vue";
import BuyerRegister from "@/views/BuyerRegister.vue";
import BookListings from "@/views/BookListings.vue";
import Orders from "@/views/Orders.vue";
import BuyerAppointment from "@/views/BuyerAppointment.vue";
import Ratings from "@/views/Ratings.vue";
import ViewDetails from "@/views/ViewDetails.vue";
import UpdateSellerDetails from "@/views/UpdateSellerDetails.vue";

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
    { path: '/login', name: 'BuyerLogin', component: BuyerLogin},
    { path: '/register', name: 'BuyerRegister', component: BuyerRegister},
    { path: '/book-listing', name: 'BookListings', component: BookListings},
    { path: '/order', name: 'Orders', component:Orders},
    { path: '/buyer-appointment', name: 'BuyerAppointment', component:BuyerAppointment},
    { path: '/ratings', name: 'Ratings', component:Ratings},
    { path: '/view-details', name: 'ViewDetails', component: ViewDetails},
    { path: '/update-seller-details', name: 'UpdateSellerDetails', component: UpdateSellerDetails},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
