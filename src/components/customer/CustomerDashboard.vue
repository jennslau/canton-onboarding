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
          
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2 text-sm text-gray-600">
              <div class="w-8 h-8 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <span class="font-semibold">Sarah Johnson</span>
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
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Welcome Header - EXACT match to React artifact -->
      <div class="rounded-2xl p-8 text-white mb-8 relative overflow-hidden shadow-2xl" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #1d4ed8 100%);">
        <div class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5" style="background: white; transform: translate(128px, -128px);"></div>
        <div class="relative">
          <h2 class="text-3xl font-bold mb-2">Welcome back, Sarah Johnson!</h2>
          <p class="text-lg mb-6" style="color: #ddd6fe;">
            You are in Week 3 of your 8-week onboarding journey with Canton.
          </p>
          <div class="rounded-xl p-4" style="background: rgba(255, 255, 255, 0.2);">
            <div class="flex justify-between text-sm mb-2">
              <span class="font-semibold">Overall Progress</span>
              <span class="font-bold">32%</span>
            </div>
            <div class="w-full rounded-full h-3" style="background: rgba(255, 255, 255, 0.3);">
              <div 
                class="rounded-full h-3 transition-all duration-500 shadow-lg"
                style="background: white; width: 32%;"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Steps -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);">
                <span class="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">Your Onboarding Journey</h3>
                <p class="text-gray-600">8 simple steps to get you up and running</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <!-- Current Step - Step 1 -->
              <div class="flex items-center justify-between p-4 border border-blue-200 bg-blue-50 rounded-xl">
                <div class="flex items-center space-x-4">
                  <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <div class="font-semibold text-gray-900">Step 1: Complete Setup Information</div>
                    <div class="text-sm text-gray-500">Provide business details and wallet information</div>
                    <div class="text-xs text-gray-400 mt-1">
                      Phase: Pre-Onboarding • Est. 2 days
                    </div>
                  </div>
                </div>
                <button 
                  @click="goToStep1"
                  class="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors"
                >
                  Continue Now
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              <!-- Future Steps -->
              <div class="flex items-center justify-between p-4 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors">
                <div class="flex items-center space-x-4">
                  <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <div class="font-semibold text-gray-900">Step 2: Connect Your Systems</div>
                    <div class="text-sm text-gray-500">Link your ERP and complete system setup</div>
                    <div class="text-xs text-gray-400 mt-1">
                      Phase: Pre-Onboarding • Est. 3 days
                    </div>
                  </div>
                </div>
                <span class="text-yellow-600 font-semibold text-sm">Next Up</span>
              </div>

              <div class="flex items-center justify-between p-4 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors">
                <div class="flex items-center space-x-4">
                  <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <div class="font-semibold text-gray-900">Step 3: Import & Verify Data</div>
                    <div class="text-sm text-gray-500">Review historical data and wallet balances</div>
                    <div class="text-xs text-gray-400 mt-1">
                      Phase: 1st Onboarding Session • Est. 5 days
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between p-4 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors">
                <div class="flex items-center space-x-4">
                  <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <div class="font-semibold text-gray-900">Step 4: Learn Transaction Management</div>
                    <div class="text-sm text-gray-500">Master categorization and platform features</div>
                    <div class="text-xs text-gray-400 mt-1">
                      Phase: 2nd Onboarding Session • Est. 4 days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Implementation Progress -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-6">Implementation Progress</h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="font-semibold text-gray-700">Sales Scoping</span>
                  <span class="font-bold text-gray-900">100%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="rounded-full h-3 w-full transition-all duration-500" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="font-semibold text-gray-700">Pre-Onboarding</span>
                  <span class="font-bold text-gray-900">40%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="rounded-full h-3 transition-all duration-500" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); width: 40%;"></div>
                </div>
              </div>
              
              <!-- Future weeks -->
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="font-semibold text-gray-700">Week 1</span>
                  <span class="font-bold text-gray-900">0%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gray-300 rounded-full h-3 transition-all duration-500" style="width: 0%;"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="font-semibold text-gray-700">Week 2</span>
                  <span class="font-bold text-gray-900">0%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gray-300 rounded-full h-3 transition-all duration-500" style="width: 0%;"></div>
                </div>
              </div>
            </div>
            <div class="mt-4 text-xs text-gray-500">
              Behind the scenes: 166 total internal tasks
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div class="space-y-3">
              <button class="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">Canton Wavie</div>
                  <div class="text-sm text-gray-500">AI assistant & help</div>
                </div>
              </button>
              
              <button class="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">Upload Documents</div>
                  <div class="text-sm text-gray-500">Add required files</div>
                </div>
              </button>
              
              <button class="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">Schedule Session</div>
                  <div class="text-sm text-gray-500">Book your next call</div>
                </div>
              </button>
              
              <button class="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">View Reports</div>
                  <div class="text-sm text-gray-500">Check your progress</div>
                </div>
              </button>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-1 gap-4">
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
/* Additional hover effects */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:-translate-y-0\.5:hover {
  transform: translateY(-2px);
}
</style>
