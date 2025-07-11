<template>
  <div style="min-height: 100vh; background: linear-gradient(to right, #3b82f6, #8b5cf6); padding: 50px;">
    <h1 style="color: white; font-size: 48px; text-align: center;">
      🌈 GRADIENT TEST
    </h1>
    
    <div style="background: white; padding: 30px; margin: 20px auto; max-width: 600px; border-radius: 15px;">
      <h2 style="color: #1f2937;">Can you see the blue-to-purple gradient background?</h2>
      
      <div style="margin: 20px 0;">
        <div style="background: linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6); height: 50px; border-radius: 10px; margin: 10px 0;"></div>
        <p>☝️ This should be a rainbow gradient bar</p>
      </div>
      
      <div style="margin: 20px 0;">
        <div style="background: red; width: 100px; height: 100px; border-radius: 10px; margin: 10px; display: inline-block;"></div>
        <div style="background: blue; width: 100px; height: 100px; border-radius: 10px; margin: 10px; display: inline-block;"></div>
        <div style="background: green; width: 100px; height: 100px; border-radius: 10px; margin: 10px; display: inline-block;"></div>
        <p>☝️ Three colored squares: Red, Blue, Green</p>
      </div>
      
      <button 
        @click="testPassed"
        style="background: linear-gradient(to right, #10b981, #059669); color: white; padding: 15px 30px; border: none; border-radius: 10px; font-size: 18px; cursor: pointer; margin: 10px;"
      >
        ✅ I can see all the gradients and colors!
      </button>
      
      <button 
        @click="testFailed" 
        style="background: linear-gradient(to right, #ef4444, #dc2626); color: white; padding: 15px 30px; border: none; border-radius: 10px; font-size: 18px; cursor: pointer; margin: 10px;"
      >
        ❌ I don't see gradients/colors
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const testPassed = () => {
  alert('🎉 Great! Gradients work in your browser. The issue is with your CSS setup. Let me know and I\'ll help fix the CustomerDashboard.')
}

const testFailed = () => {
  alert('🔧 Your browser might have issues with gradients, or there\'s a CSS conflict. Try opening this page in a different browser (Chrome, Firefox, Safari).')
}
</script>
