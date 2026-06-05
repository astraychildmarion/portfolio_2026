import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import Project1View from '@/views/Project1View.vue'
import Project2View from '@/views/Project2View.vue'
import AboutView from '@/views/AboutView.vue'
import ResumeView from '@/views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkView,
    },
    {
      path: '/work/project-1',
      name: 'Project1',
      component: Project1View,
    },
    {
      path: '/work/project-2',
      name: 'Project2',
      component: Project2View,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumeView,
    },
  ],
})

export default router
