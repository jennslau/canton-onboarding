<template>
  <!-- GRADIENT BACKGROUND - Exact match to React artifact -->
  <div class="min-h-screen flex items-center justify-center" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #1d4ed8 100%);">
    <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      
      <!-- Logo and Header -->
      <div class="text-center mb-8">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);">
          <span class="text-white font-bold text-2xl">C</span>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">Canton</h1>
        <p class="text-gray-600">AI-Powered Onboarding by Bitwave</p>
        <p class="text-sm text-gray-500 mt-2">Interactive Demo - 166 Task Management System</p>
      </div>
      
      <!-- Demo Users Section -->
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">Demo as Customer:</h3>
          
          <button 
            @click="loginAsUser('finance@validator1.com')"
            class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors mb-2"
          >
            <div class="font-medium">Sarah Johnson</div>
            <div class="text-sm text-gray-500">Validator One LLC - Tier 2</div>
          </button>
          
          <button 
            @click="loginAsUser('accounting@validator2.io')"
            class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div class="font-medium">Mike Chen</div>
            <div class="text-sm text-gray-500">Crypto Validator Corp - Tier 2</div>
          </button>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">Demo as Internal Team:</h3>
          
          <button 
            @click="loginAsUser('cso@bitwave.io')"
            class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors mb-2"
          >
            <div class="font-medium">Alex Rivera</div>
            <div class="text-sm text-gray-500">Customer Success Officer</div>
          </button>
          
          <button 
            @click="loginAsUser('cs.manager@bitwave.io')"
            class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div class="font-medium">Jessica Kim</div>
            <div class="text-sm text-gray-500">CS Program Manager</div>
          </button>
        </div>
      </div>

      <!-- System Status -->
      <div class="mt-6 text-center">
        <div class="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
          <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span class="text-xs text-gray-600">System Status: Operational</span>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center text-xs text-gray-500 mt-6">
        <p>© 2024 Bitwave. All rights reserved.</p>
        <p class="mt-1">
          <a href="#" class="hover:text-gray-700">Privacy Policy</a> • 
          <a href="#" class="hover:text-gray-700 ml-1">Terms of Service</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Demo users data structure
const DEMO_USERS = {
  'finance@validator1.com': { 
    role: 'customer', 
    customerId: 1, 
    tier: 2,
    company: 'Validator One LLC',
    erpSystem: 'Xero',
    complexity: 'medium',
    contactName: 'Sarah Johnson'
  },
  'accounting@validator2.io': { 
    role: 'customer', 
    customerId: 2, 
    tier: 2,
    company: 'Crypto Validator Corp',
    erpSystem: 'QBO',
    complexity: 'medium',
    contactName: 'Mike Chen'
  },
  'cso@bitwave.io': { 
    role: 'internal', 
    name: 'Alex Rivera',
    permissions: ['view_all', 'edit_all'] 
  },
  'cs.manager@bitwave.io': { 
    role: 'cs_manager', 
    name: 'Jessica Kim',
    permissions: ['create_customers', 'upload_csv', 'manage_system'] 
  }
}

const loginAsUser = async (email) => {
  try {
    const user = DEMO_USERS[email]
    if (user) {
      // Set user in auth store
      authStore.login(user, email)
      
      // Navigate to correct route
      if (user.role === 'customer') {
        await router.push('/customer')
      } else {
        await router.push('/internal')
      }
    }
  } catch (error) {
    console.error('Login error:', error)
    // Fallback: simple navigation without auth store
    if (email.includes('validator1.com') || email.includes('validator2.io')) {
      await router.push('/customer')
    } else {
      await router.push('/internal')
    }
  }
}
</script>
