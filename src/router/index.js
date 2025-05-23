import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import AboutView from '@/views/AboutView.vue'
import DashboardView from '@/views/DashboardView.vue'
import RegisterView from '@/views/RegisterView.vue'
import EditArticleView from '@/views/EditArticleView.vue'
import ArticleView from '@/views/ArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      redirect: '/' 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/article/:articleId',
      name: 'articleEdit',
      component: EditArticleView,
    },
    {
      path: '/product/article/:articleId',
      name: 'productArticle',
      component: ArticleView,
    }
  ],
    scrollBehavior(to, from, savedPosition) {
    // Selalu scroll ke atas
    return { top: 0 }
  }
})

export default router
