<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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
            class="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Step 1 Header -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <h2 class="text-3xl font-bold mb-4">Step 1: Complete Setup Information</h2>
        <p class="text-blue-100 text-lg">
          Fill out the Configuration & Setup form and Wallets & Accounts form to continue your onboarding.
        </p>
      </div>

      <!-- Form Tabs -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 mb-8">
        <div class="border-b border-gray-200">
          <nav class="flex space-x-8 px-8 py-4">
            <button 
              @click="setCurrentSubView('configuration')"
              :class="[
                'py-3 px-1 border-b-3 font-semibold text-lg flex items-center transition-colors',
                currentSubView === 'configuration' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              ]"
            >
              Configuration & Setup
              <CheckCircle v-if="completedForms.configuration" class="ml-2 w-5 h-5 text-green-500" />
            </button>
            <button 
              @click="setCurrentSubView('wallets')"
              :class="[
                'py-3 px-1 border-b-3 font-semibold text-lg flex items-center transition-colors',
                currentSubView === 'wallets' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              ]"
            >
              Wallets & Accounts
              <CheckCircle v-if="completedForms.wallets" class="ml-2 w-5 h-5 text-green-500" />
            </button>
          </nav>
        </div>
        
        <div class="p-8">
          <ConfigurationForm
            v-if="currentSubView === 'configuration'"
            @complete="handleFormComplete"
          />
          
          <WalletsForm
            v-if="currentSubView === 'wallets'"
            @complete="handleFormComplete"
          />
        </div>
      </div>

      <!-- Completion Status -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 max-w-4xl mx-auto">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Step 1 Completion Status</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div :class="[
            'p-4 rounded-xl border-2 transition-colors',
            completedForms.configuration ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'
          ]">
            <div class="flex items-center">
              <CheckCircle v-if="completedForms.configuration" class="w-6 h-6 text-green-500 mr-3" />
              <Circle v-else class="w-6 h-6 text-gray-400 mr-3" />
              <span :class="[
                'font-semibold',
                completedForms.configuration ? 'text-green-700' : 'text-gray-600'
              ]">
                Configuration & Setup
              </span>
            </div>
          </div>
          <div :class="[
            'p-4 rounded-xl border-2 transition-colors',
            completedForms.wallets ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'
          ]">
            <div class="flex items-center">
              <CheckCircle v-if="completedForms.wallets" class="w-6 h-6 text-green-500 mr-3" />
              <Circle v-else class="w-6 h-6 text-gray-400 mr-3" />
              <span :class="[
                'font-semibold',
                completedForms.wallets ? 'text-green-700' : 'text-gray-600'
              ]">
                Wallets & Accounts
              </span>
            </div>
          </div>
        </div>
        
        <div
          v-if="isStep1Complete"
          class="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl"
        >
          <div class="text-green-700 font-semibold text-center">
            🎉 Step 1 Complete! Ready to proceed to Step 2: Connect Your Systems
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { CheckCircle, Circle } from 'lucide-vue-next';
import { useFormStore } from '@/stores/forms';
import ConfigurationForm from './ConfigurationForm.vue';
import WalletsForm from './WalletsForm.vue';

const router = useRouter();
const formStore = useFormStore();

const currentSubView = computed(() => formStore.currentSubView);
const completedForms = computed(() => formStore.completedForms);
const isStep1Complete = computed(() => formStore.isStep1Complete());

const setCurrentSubView = formStore.setCurrentSubView;

const goBack = () => {
  router.push('/customer');
};

const handleFormComplete = (formType: 'configuration' | 'wallets') => {
  formStore.completeForm(formType);
  
  if (formType === 'wallets' && completedForms.value.configuration) {
    setTimeout(() => {
      alert('Customer Step 1 completed! 🎉 Moving to Step 2: Connect Your Systems');
      router.push('/customer');
    }, 500);
  }
  if (formType === 'configuration' && completedForms.value.wallets) {
    setTimeout(() => {
      alert('Customer Step 1 completed! 🎉 Moving to Step 2: Connect Your Systems');
      router.push('/customer');
    }, 500);
  }
};
</script>
