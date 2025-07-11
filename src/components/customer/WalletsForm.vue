<template>
  <div class="p-6">
    <h3 class="text-xl font-bold mb-4">Wallets & Accounts Form</h3>
    <p>Form coming soon...</p>
    <button 
      @click="$emit('complete', 'wallets')"
      class="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg"
    >
      Complete Wallets
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  complete: [type: 'wallets'];
}>();
</script>
