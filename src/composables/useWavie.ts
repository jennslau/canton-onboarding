import { ref } from 'vue';
import type { WavieMessage } from '@/types';
import { wavieResponses } from '@/data/wavieResponses';

export const useWavie = () => {
  const showWavie = ref(false);
  const wavieInput = ref('');
  const wavieMessages = ref<WavieMessage[]>([]);

  const toggleWavie = () => {
    showWavie.value = !showWavie.value;
  };

  const closeWavie = () => {
    showWavie.value = false;
  };

  const sendMessage = () => {
    if (!wavieInput.value.trim()) return;

    const userMessage: WavieMessage = {
      type: 'user',
      message: wavieInput.value,
      timestamp: new Date()
    };

    // Simple response matching logic
    let response = wavieResponses.default;
    const input = wavieInput.value.toLowerCase();

    if (input.includes('step 1') || input.includes('setup')) {
      response = wavieResponses['step 1'];
    } else if (input.includes('erp') || input.includes('integration')) {
      response = wavieResponses['erp integration'];
    } else if (input.includes('progress') || input.includes('timeline')) {
      response = wavieResponses['progress'];
    } else if (input.includes('help') || input.includes('how')) {
      response = wavieResponses['help'];
    }

    const botMessage: WavieMessage = {
      type: 'bot',
      message: response,
      timestamp: new Date()
    };

    wavieMessages.value.push(userMessage, botMessage);
    wavieInput.value = '';
  };

  const clearMessages = () => {
    wavieMessages.value = [];
  };

  return {
    showWavie,
    wavieInput,
    wavieMessages,
    toggleWavie,
    closeWavie,
    sendMessage,
    clearMessages
  };
};
