<template>
  <div class="gradient-bg">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">Canton Onboarding</h1>
              <p class="text-sm text-gray-600">by Bitwave - 166 Tasks System</p>
            </div>
          </div>
          
          <button 
            @click="handleLogout"
            class="text-gray-600 hover:text-gray-800"
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Welcome Header -->
      <div class="gradient-header">
        <h2 class="text-3xl font-bold mb-2">Welcome back, Sarah Johnson!</h2>
        <p class="text-lg mb-6" style="color: #ddd6fe;">
          You are in Week 3 of your 8-week onboarding journey with Canton.
        </p>
        <div class="progress-container">
          <div class="flex justify-between text-sm mb-2">
            <span class="font-semibold">Overall Progress</span>
            <span class="font-bold">32%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
        </div>
      </div>

      <!-- Step Card -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6">Your Onboarding Journey</h3>
        
        <div class="p-4 border border-blue-200 bg-blue-50 rounded-xl">
          <div class="font-semibold text-gray-900">Step 1: Complete Setup Information</div>
          <div class="text-sm text-gray-500 mb-4">Provide business details and wallet information</div>
          <button 
            @click="goToStep1"
            class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 font-semibold"
          >
            Continue Now →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

const goToStep1 = () => {
  router.push('/customer/step1')
}
</script>
