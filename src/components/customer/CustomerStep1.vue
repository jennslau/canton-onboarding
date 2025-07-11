<template>
  <div 
    class="min-h-screen"
    style="background: linear-gradient(135deg, #f9fafb 0%, #dbeafe 100%);"
  >
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">Canton Onboarding - Step 1</h1>
              <p class="text-sm text-gray-600">Configuration & Setup Forms</p>
            </div>
          </div>
          <button 
            @click="goBack"
            class="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Step 1 Header -->
      <div 
        class="rounded-2xl p-8 text-white mb-8"
        style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"
      >
        <h2 class="text-3xl font-bold mb-4" style="color: white;">Step 1: Complete Setup Information</h2>
        <p class="text-lg" style="color: #ddd6fe;">
          Fill out the Configuration & Setup form and Wallets & Accounts form to continue your onboarding.
        </p>
      </div>

      <!-- Simple Forms Demo -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6">Demo Forms</h3>
        
        <div class="space-y-6">
          <!-- Configuration Demo -->
          <div class="p-6 border border-gray-200 rounded-xl">
            <h4 class="text-lg font-semibold text-blue-600 mb-4">Configuration & Setup</h4>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  How does your organization use digital assets?
                </label>
                <textarea 
                  class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  rows="3"
                  placeholder="Ethereum validator operations and staking rewards management"
                ></textarea>
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  ERP System
                </label>
                <select class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                  <option>Xero</option>
                  <option>QuickBooks Online</option>
                  <option>NetSuite</option>
                  <option>Sage Intacct</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Wallets Demo -->
          <div class="p-6 border border-gray-200 rounded-xl">
            <h4 class="text-lg font-semibold text-purple-600 mb-4">Wallets & Accounts</h4>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Wallet Name
                </label>
                <input 
                  type="text" 
                  class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Primary Validator Wallet"
                />
              </div>
              
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Blockchain Network
                </label>
                <input 
                  type="text" 
                  class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Ethereum"
                />
              </div>
            </div>
          </div>

          <!-- Demo Complete Button -->
          <div class="text-center">
            <button 
              @click="completeStep1"
              class="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 font-semibold text-lg"
            >
              Complete Step 1 Demo ✅
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/customer')
}

const completeStep1 = () => {
  alert('🎉 Step 1 Complete! This would normally advance to Step 2.')
  router.push('/customer')
}
</script>
