import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User, ViewType } from '@/types';
import { DEMO_USERS } from '@/data/demoUsers';

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<User | null>(null);
  const currentView = ref<ViewType>('login');

  const login = (email: string): boolean => {
    const user = DEMO_USERS[email];
    if (user) {
      currentUser.value = { ...user, email };
      
      if (user.role === 'customer') {
        currentView.value = 'customer';
      } else {
        currentView.value = 'internal';
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    currentUser.value = null;
    currentView.value = 'login';
  };

  const setCurrentView = (view: ViewType) => {
    currentView.value = view;
  };

  const isAuthenticated = (): boolean => {
    return currentUser.value !== null;
  };

  const hasPermission = (permission: string): boolean => {
    if (!currentUser.value) return false;
    return currentUser.value.permissions?.includes(permission) ?? false;
  };

  return {
    currentUser,
    currentView,
    login,
    logout,
    setCurrentView,
    isAuthenticated,
    hasPermission
  };
});
