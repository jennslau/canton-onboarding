<template>
  <div class="min-h-screen" style="background: linear-gradient(135deg, #f9fafb 0%, #dbeafe 100%);">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);">
              <span class="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">Canton Onboarding</h1>
              <p class="text-sm text-gray-600">by Bitwave - 166 Tasks System</p>
            </div>
          </div>
          
          <button 
            @click="handleLogout"
            class="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Welcome Header with Inline Gradient -->
      <div class="rounded-2xl p-8 text-white mb-8 shadow-2xl" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #1d4ed8 100%);">
        <h2 class="text-3xl font-bold mb-2">Welcome back, Sarah Johnson!</h2>
        <p class="text-lg mb-6 opacity-90">
          You are in Week 3 of your 8-week onboarding journey with Canton.
        </p>
        
        <!-- Progress Container with Inline Styles -->
        <div class="rounded-xl p-4 backdrop-blur-sm" style="background: rgba(255, 255, 255, 0.2);">
          <div class="flex justify-between text-sm mb-2">
            <span class="font-semibold">Overall Progress</span>
            <span class="font-bold">32%</span>
          </div>
          <div class="rounded-full h-3 w-full" style="background: rgba(255, 255, 255, 0.3);">
            <div 
              class="rounded-full h-3 transition-all duration-500"
              style="background: white; width: 32%; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"
            ></div>
          </div>
        </div>
      </div>

      <!-- Step Card -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6">Your Onboarding Journey</h3>
        
        <!-- Current Step -->
        <div class="p-6 border border-blue-200 bg-blue-50 rounded-xl mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <div class="font-semibold text-gray-900 text-lg">Step 1: Complete Setup Information</div>
              <div class="text-sm text-gray-600 mb-2">Provide business details and wallet information</div>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-500">Progress</div>
              <div class="text-2xl font-bold text-blue-600">0%</div>
            </div>
          </div>
          
          <!-- Step Progress Bar -->
          <div class="w-full bg-blue-200 rounded-full h-2 mb-4">
            <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" style="width: 0%;"></div>
          </div>
          
          <button 
            @click="goToStep1"
            class="text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);"
          >
            Continue Now →
          </button>
        </div>

        <!-- Upcoming Steps Preview -->
        <div class="space-y-3">
          <h4 class="font-semibold text-gray-800 mb-3">Upcoming Steps</h4>
          
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <span class="text-gray-600 text-sm font-medium">2</span>
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-900">Connect Your Systems</div>
              <div class="text-sm text-gray-600">ERP integration and API connections</div>
            </div>
            <div class="text-sm text-gray-500">Not started</div>
          </div>

          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <span class="text-gray-600 text-sm font-medium">3</span>
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-900">Import & Verify Data</div>
              <div class="text-sm text-gray-600">Historical transaction data import</div>
            </div>
            <div class="text-sm text-gray-500">Not started</div>
          </div>

          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
              <span class="text-gray-600 text-sm font-medium">4</span>
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-900">Learn Transaction Management</div>
              <div class="text-sm text-gray-600">Categorization and processing workflows</div>
            </div>
            <div class="text-sm text-gray-500">Not started</div>
          </div>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Tasks Completed</p>
              <p class="text-3xl font-bold text-green-600">12</p>
              <p class="text-sm text-gray-500">of 166 total</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Current Phase</p>
              <p class="text-3xl font-bold text-blue-600">1</p>
              <p class="text-sm text-gray-500">Setup Information</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Time Remaining</p>
              <p class="text-3xl font-bold text-purple-600">5</p>
              <p class="text-sm text-gray-500">weeks estimated</p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
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

<style scoped>
/* Additional scoped styles if needed */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:-translate-y-0\.5:hover {
  transform: translateY(-2px);
}
</style>
