import { createRouter, createWebHistory } from "vue-router";
import FeedView from "../views/FeedView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/feed',
            name: 'feed',
            component: FeedView
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView
        },
        {
          path: '/profile/:id?',
          name: 'profile',
          component: ProfileView
        }
    ]
})

export default router