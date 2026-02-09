import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import RegisterView from "../views/RegisterView.vue";
import QuestionView from "../views/QuestionView.vue";
import ExploreView from "../views/ExploreView.vue";
import NotificationView from "../views/NotificationView.vue";
import EventView from "../views/EventView.vue";
import PostView from "../views/PostView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'register',
          component: RegisterView
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
        },
        {
          path: '/question',
          name: 'question',
          component: QuestionView
        },
        {
          path: '/explore',
          name: 'explore',
          component: ExploreView
        },
        {
          path: '/notification',
          name: 'notification',
          component: NotificationView
        },
        {
          path: '/event',
          name: 'event',
          component: EventView
        },
        {
          path: '/post',
          name: 'post',
          component: PostView
        }
    ]
})

export default router