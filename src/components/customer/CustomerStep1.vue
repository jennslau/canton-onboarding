<template>
  <div style="min-height: 100vh; background: linear-gradient(135deg, #f9fafb 0%, #dbeafe 100%);">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);">
              <span class="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">Canton Onboarding - Step 1</h1>
              <p class="text-sm text-gray-600">Complete Setup Information</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <button 
              @click="goBackToDashboard"
              class="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors"
            >
              ← Back to Dashboard
            </button>
            <button 
              @click="handleLogout"
              class="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Header -->
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="rounded-2xl p-8 text-white mb-8 shadow-2xl" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #1d4ed8 100%);">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-2xl font-bold mb-1">Step 1: Complete Setup Information</h2>
            <p style="color: #ddd6fe;">Configure your organization and wallet settings</p>
          </div>
          <div class="text-right">
            <div class="text-sm" style="color: #ddd6fe;">Progress</div>
            <div class="text-xl font-bold">{{ overallProgress }}%</div>
          </div>
        </div>
        
        <!-- Step Progress Indicator -->
        <div class="flex items-center space-x-4 mt-6">
          <div 
            :class="currentTab === 'configuration' ? 'bg-white text-blue-600' : 'bg-blue-400 text-blue-100'"
            class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
          >
            1
          </div>
          <div class="flex-1 h-1 bg-blue-400 rounded">
            <div 
              class="h-1 bg-white rounded transition-all duration-300"
              :style="{ width: currentTab === 'wallets' ? '100%' : '0%' }"
            ></div>
          </div>
          <div 
            :class="currentTab === 'wallets' ? 'bg-white text-blue-600' : 'bg-blue-400 text-blue-100'"
            class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
          >
            2
          </div>
        </div>
        
        <div class="flex justify-between mt-2 text-sm" style="color: #ddd6fe;">
          <span>Configuration</span>
          <span>Wallets</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 pb-8">
      <!-- Tab Navigation -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 mb-6">
        <div class="flex border-b border-gray-200">
          <button
            @click="currentTab = 'configuration'"
            :class="currentTab === 'configuration' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
            class="flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Configuration & Setup
            <svg v-if="configurationComplete" class="w-4 h-4 ml-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
          <button
            @click="currentTab = 'wallets'"
            :class="currentTab === 'wallets' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
            class="flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center"
            :disabled="!configurationComplete"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            Wallets & Accounts
            <svg v-if="walletsComplete" class="w-4 h-4 ml-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Configuration Form -->
      <div v-if="currentTab === 'configuration'">
        <ConfigurationForm
          @complete="handleConfigurationComplete"
          @save="handleConfigurationSave"
        />
      </div>

      <!-- Wallets Form -->
      <div v-if="currentTab === 'wallets'">
        <WalletsForm
          @complete="handleWalletsComplete"
          @save="handleWalletsSave"
        />
      </div>
    </div>

    <!-- Completion Status -->
    <div v-if="configurationComplete && walletsComplete" class="fixed bottom-6 right-6 bg-green-50 border border-green-200 rounded-2xl p-6 shadow-2xl max-w-sm">
      <div class="flex items-center">
        <svg class="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <div class="font-bold text-green-900">Step 1 Complete! 🎉</div>
          <div class="text-sm text-green-700">Ready for Step 2: Connect Your Systems</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import ConfigurationForm from './ConfigurationForm.vue'
import WalletsForm from './WalletsForm.vue'

const router = useRouter()
const authStore = useAuthStore()

const currentTab = ref('configuration')
const configurationComplete = ref(false)
const walletsComplete = ref(false)

const overallProgress = computed(() => {
  let progress = 0
  if (configurationComplete.value) progress += 50
  if (walletsComplete.value) progress += 50
  return progress
})

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

const goBackToDashboard = () => {
  router.push('/customer')
}

const handleConfigurationComplete = (data) => {
  configurationComplete.value = true
  // Move to wallets tab
  currentTab.value = 'wallets'
  console.log('Configuration completed:', data)
}

const handleConfigurationSave = (data) => {
  console.log('Configuration saved:', data)
}

const handleWalletsComplete = (data) => {
  walletsComplete.value = true
  console.log('Wallets completed:', data)
  
  // Show completion message and redirect after delay
  setTimeout(() => {
    alert('🎉 Step 1 Complete! Redirecting to Step 2...')
    router.push('/customer')
  }, 2000)
}

const handleWalletsSave = (data) => {
  console.log('Wallets saved:', data)
}
</script>
