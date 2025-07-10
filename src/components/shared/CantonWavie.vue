<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 transform translate-x-full"
      enter-to-class="opacity-100 transform translate-x-0"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 transform translate-x-0"
      leave-to-class="opacity-0 transform translate-x-full"
    >
      <div
        v-if="showWavie"
        class="fixed bottom-4 right-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-2xl">
          <div class="flex items-center">
            <MessageCircle class="w-5 h-5 text-white mr-2" />
            <span class="font-semibold text-white">Canton Wavie</span>
          </div>
          <button
            @click="closeWavie"
            class="text-white hover:text-gray-200 transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
        
        <!-- Messages -->
        <div ref="messagesContainer" class="h-64 overflow-y-auto p-4 space-y-3">
          <div v-if="wavieMessages.length === 0" class="text-gray-500 text-sm">
            👋 Hi! I'm Canton Wavie, your AI assistant. Ask me about your onboarding steps, ERP integration, or any questions about the process!
          </div>
          
          <div
            v-for="(msg, index) in wavieMessages"
            :key="index"
            :class="msg.type === 'user' ? 'text-right' : 'text-left'"
          >
            <div
              :class="[
                'inline-block p-3 rounded-lg max-w-xs',
                msg.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              ]"
            >
              <div class="text-sm">{{ msg.message }}</div>
              <div class="text-xs opacity-75 mt-1">
                {{ formatTimestamp(msg.timestamp) }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Input -->
        <div class="p-4 border-t border-gray-200">
          <div class="flex items-center space-x-2">
            <input
              v-model="wavieInput"
              type="text"
              placeholder="Ask Canton Wavie anything..."
              class="flex-1 p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              @keypress.enter="sendMessage"
            />
            <button
              @click="sendMessage"
              class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              <Send class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import { MessageCircle, X, Send } from 'lucide-vue-next';
import { useWavie } from '@/composables/useWavie';
import { formatTimestamp } from '@/utils/statusHelpers';

const { showWavie, wavieInput, wavieMessages, closeWavie, sendMessage } = useWavie();

const messagesContainer = ref<HTMLElement>();

// Auto-scroll to bottom when new messages are added
watch(wavieMessages, async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
}, { deep: true });
</script>
