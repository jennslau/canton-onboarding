<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">
    <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span class="text-white font-bold text-2xl">C</span>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">Canton</h1>
        <p class="text-gray-600">AI-Powered Onboarding by Bitwave</p>
        <p class="text-sm text-gray-500 mt-2">Interactive Demo - {{ ACTUAL_TASK_COUNT }} Task Management System</p>
      </div>
      
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">Demo as Customer:</h3>
          <button 
            @click="handleLogin('finance@validator1.com')"
            class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div class="font-medium">Sarah Johnson</div>
            <div class="text-sm text-gray-500">Validator One LLC - Tier 2</div>
          </button>
          <button 
            @click="handleLogin('accounting@validator2.io')"
            class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors mt-2"
          >
            <div class="font-medium">Mike Chen</div>
            <div class="text-sm text-gray-500">Crypto Validator Corp - Tier 2</div>
          </button>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">Demo as Internal Team:</h3>
          <button 
            @click="handleLogin('cso@bitwave.io')"
            class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div class="font-medium">Alex Rivera</div>
            <div class="text-sm text-gray-500">Customer Success Officer</div>
          </button>
          <button 
            @click="handleLogin('cs.manager@bitwave.io')"
            class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors mt-2"
          >
            <div class="font-medium">Jessica Kim</div>
            <div class="text-sm text-gray-500">CS Program Manager</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useCustomerStore } from '@/stores/customers';
import { ACTUAL_TASK_COUNT } from '@/data/demoUsers';

const router = useRouter();
const authStore = useAuthStore();
const customerStore = useCustomerStore();

const handleLogin = (email: string) => {
  if (authStore.login(email)) {
    const user = authStore.currentUser;
    
    if (user?.role === 'customer' && user.customerId) {
      customerStore.selectCustomerById(user.customerId);
      router.push('/customer');
    } else {
      router.push('/internal');
    }
  }
};
</script>
