import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/auth/LoginScreen.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('@/components/customer/CustomerDashboard.vue'),
      meta: { requiresAuth: true, role: 'customer' }
    },
    {
      path: '/customer/step1',
      name: 'customerStep1',
      component: () => import('@/components/customer/CustomerStep1.vue'),
      meta: { requiresAuth: true, role: 'customer' }
    },
    {
      path: '/internal',
      name: 'internal',
      component: () => import('@/components/internal/InternalDashboard.vue'),
      meta: { requiresAuth: true, role: ['internal', 'cs_manager'] }
    }
  ]
});

// Navigation guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    next('/login');
    return;
  }
  
  if (to.meta.role && authStore.currentUser) {
    const userRole = authStore.currentUser.role;
    const requiredRoles = Array.isArray(to.meta.role) ? to.meta.role : [to.meta.role];
    
    if (!requiredRoles.includes(userRole)) {
      // Redirect to appropriate dashboard based on role
      if (userRole === 'customer') {
        next('/customer');
      } else {
        next('/internal');
      }
      return;
    }
  }
  
  next();
});

export default router;
