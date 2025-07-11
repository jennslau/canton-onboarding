<template>
  <!-- BIG RED TEST BANNER -->
  <div style="background: red; color: white; padding: 30px; font-size: 40px; text-align: center;">
    🚨 SUCCESS! CustomerDashboard.vue is updating! 🚨
  </div>

  <!-- GRADIENT TEST -->
  <div style="min-height: 100vh; background: linear-gradient(135deg, #f9fafb 0%, #dbeafe 100%); padding: 20px;">
    
    <!-- Header with gradient -->
    <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #1d4ed8 100%); padding: 40px; border-radius: 16px; color: white; text-align: center; margin: 20px 0;">
      <h1 style="font-size: 32px; font-weight: bold; margin: 0;">Welcome back, Sarah Johnson!</h1>
      <p style="margin: 10px 0; font-size: 18px;">You are in Week 3 of your 8-week onboarding journey with Canton.</p>
      
      <!-- Progress bar -->
      <div style="background: rgba(255, 255, 255, 0.2); border-radius: 12px; padding: 16px; margin-top: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-weight: bold;">Overall Progress</span>
          <span style="font-weight: bold;">32%</span>
        </div>
        <div style="background: rgba(255, 255, 255, 0.3); border-radius: 20px; height: 12px;">
          <div style="background: white; border-radius: 20px; height: 12px; width: 32%; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
        </div>
      </div>
    </div>

    <!-- White content card -->
    <div style="background: white; padding: 30px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin: 20px 0;">
      <h2 style="color: #1f2937; margin-bottom: 20px;">🎯 Gradient Test Results</h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Can you see:</strong></p>
        <ul style="margin: 10px 0; padding-left: 20px;">
          <li>✅ Red test banner at the top?</li>
          <li>🌈 Light blue gradient page background?</li>
          <li>💜 Purple/blue gradient header above?</li>
          <li>⚪ White progress bar with glassmorphism effect?</li>
        </ul>
      </div>

      <!-- Gradient buttons -->
      <div style="margin: 20px 0;">
        <button 
          @click="goToStep1"
          style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 15px 30px; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; margin-right: 10px; font-size: 16px;"
        >
          Continue to Step 1 →
        </button>
        
        <button 
          @click="handleLogout"
          style="background: #6b7280; color: white; padding: 15px 30px; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 16px;"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- Test squares -->
    <div style="background: white; padding: 20px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
      <h3>Color Test Squares:</h3>
      <div style="margin: 20px 0;">
        <div style="background: red; width: 80px; height: 80px; border-radius: 10px; margin: 10px; display: inline-block;"></div>
        <div style="background: blue; width: 80px; height: 80px; border-radius: 10px; margin: 10px; display: inline-block;"></div>
        <div style="background: green; width: 80px; height: 80px; border-radius: 10px; margin: 10px; display: inline-block;"></div>
        <div style="background: linear-gradient(to right, #ff0000, #0000ff); width: 80px; height: 80px; border-radius: 10px; margin: 10px; display: inline-block;"></div>
      </div>
      <p>Red, Blue, Green, and Red-to-Blue gradient squares</p>
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
