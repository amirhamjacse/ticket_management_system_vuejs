import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BookTickets from '../views/BookTickets.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Profile from '../views/Profile.vue';
import Dashboard from '../views/Dashboard.vue';
import Settings from '../views/Settings.vue';
import BookingDetails from '../views/BookingDetails.vue';
import BookingConfirmation from '../views/BookingConfirmation.vue';
import FAQs from '../views/FAQs.vue';
import Terms from '../views/Terms.vue';
import Policies from '../views/Policies.vue';
import SeatSelect from '../components/SeatSelection.vue'
import Checkout from '../components/Checkout.vue'
import Payment from '../components/Payment.vue'
import Tripdetails from '../components/Tripdetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/book-tickets', name: 'BookTickets', component: BookTickets },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/booking-details/:id', name: 'BookingDetails', component: BookingDetails },
  { path: '/booking-confirmation', name: 'BookingConfirmation', component: BookingConfirmation },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/faqs', name: 'FAQs', component: FAQs },
  { path: '/terms', name: 'Terms', component: Terms },
  { path: '/policies', name: 'Policies', component: Policies },
  { path: '/seatselect', name: 'SeatSelection', component: SeatSelect },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/payment', name: 'Payment', component: Payment },
  { path: '/tripdetails', name: 'TripDetails', component: Tripdetails },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
