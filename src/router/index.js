import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/HomePage.vue';
import MyEngines from '../components/MyEngines.vue';




const router = createRouter({
    history: createWebHistory(), 
      routes: [
        
        {
            path: '/',
            name: 'HomePage',
            component: HomePage

        },
        {
            path: '/MyEngines',
            name: 'MyEngines',
            component: MyEngines

        },

        
    ],
  scrollBehavior(to, from, savedPosition) {
    // Return the desired position when navigating back and forward
    if (savedPosition) {
      return savedPosition;
    } else {
      // Scroll to the top by default
      return { left: 0, top: 0 };
    }
  },
  
});

export default router