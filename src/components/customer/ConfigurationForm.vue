<template>
  <div class="p-6">
    <h3 class="text-xl font-bold mb-4">Configuration & Setup Form</h3>
    <p>Form coming soon...</p>
    <button 
      @click="$emit('complete', 'configuration')"
      class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
    >
      Complete Configuration
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  complete: [type: 'configuration'];
}>();
</script>
