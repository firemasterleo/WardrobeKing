import { createRouter, createWebHistory } from "vue-router";
import UnikmeMain from '../components/UnikmeMain.vue'
import AboutPage from '../views/AboutPage.vue'
import BespokeCustom from '../views/BespokeCustom.vue'
import BridalsPage from '../views/BridalsPage.vue'
import AsoEbi from '../views/AsoEbi.vue'
import ConsultationPage from '../views/ConsultationPage.vue'
import OurProcessPage from '../views/OurProcessPage.vue'
import ContactPage from '../views/ContactPage.vue'
import AsoebiProductDetailsPage from '../components/AsoebiProductDetailsPage.vue'
import BespokeProductDetailsPage from '../components/BespokeProductDetailsPage.vue'
import BridalsProductDetailsPage from '../components/BridalsProductDetailsPage.vue'








const router = createRouter({
    history: createWebHistory(), 
      routes: [
          
          {
            path: '/',
            component: UnikmeMain
        },
        {
            path: '/Bridals',
            component: BridalsPage 
        },
        {
            path: '/Asoebi',
            component: AsoEbi
        },
        {
            path: '/Bespoke',
            component: BespokeCustom 
        },
        {
            path: '/Consultation',
            component: ConsultationPage 
        },
        {
            path: '/About',
            component: AboutPage 
        },
        {
            path: '/Contact',
            component: ContactPage 
        },
        {
            path: '/Ourprocess&FAQs',
            component: OurProcessPage
        },
        {
            path: '/Asoebi/:id',
            name: 'AsoebiProductDetailsPage',
            component: AsoebiProductDetailsPage,
            props: true

        },
        {
            path: '/Bridals/:id',
            name: 'BridalsProductDetailsPage',
            component: BridalsProductDetailsPage,
            props: true

        },
        {
            path: '/Bespoke/:id',
            name: 'BespokeProductDetailsPage',
            component: BespokeProductDetailsPage,
            props: true

        }

        
    ],
    scrollBehavior(to, from, savedPosition) {
        // Scroll to the top of the page on route change
        return { top: 0 };
    },
});

export default router