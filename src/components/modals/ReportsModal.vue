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
              <h1 class="text-xl font-bold text-gray-900">Canton Onboarding</h1>
              <p class="text-sm text-gray-600">by Bitwave - {{ ACTUAL_TASK_COUNT }} Tasks System</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2 text-sm text-gray-600">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User class="w-4 h-4 text-white" />
              </div>
              <span class="font-semibold">{{ selectedCustomer?.contactName }}</span>
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
      <!-- Welcome Header -->
      <div class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
        <div class="relative">
          <h2 class="text-3xl font-bold mb-2">Welcome back, {{ selectedCustomer?.contactName }}!</h2>
          <p class="text-blue-100 text-lg mb-6">
            You are in Week {{ selectedCustomer?.weekInImplementation }} of your 8-week onboarding journey with Canton.
          </p>
          <ProgressBar
            :percentage="selectedCustomer?.overallProgress || 0"
            label="Overall Progress"
            variant="white"
            size="lg"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Steps -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">{{ selectedCustomer?.currentCustomerStep }}</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">Your Onboarding Journey</h3>
                <p class="text-gray-600">8 simple steps to get you up and running</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <div
                v-for="step in customerSteps"
                :key="step.id"
                :class="[
                  'flex items-center justify-between p-4 border rounded-xl transition-colors',
                  getStepClassNames(step.id)
                ]"
              >
                <div class="flex items-center space-x-4">
                  <StatusIcon :status="getStepStatus(step.id)" size="lg" />
                  <div>
                    <div class="font-semibold text-gray-900">Step {{ step.id }}: {{ step.name }}</div>
                    <div class="text-sm text-gray-500">{{ step.description }}</div>
                    <div class="text-xs text-gray-400 mt-1">
                      Phase: {{ step.phase }} • Est. {{ step.estimatedDays }} days
                    </div>
                  </div>
                </div>
                <button
                  v-if="canAccessStep(step.id)"
                  @click="goToStep(step.id)"
                  class="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors"
                >
                  {{ getStepButtonText(step.id) }}
                  <ArrowRight class="w-4 h-4 ml-1" />
                </button>
                <span
                  v-else-if="isNextStep(step.id)"
                  class="text-yellow-600 font-semibold text-sm"
                >
                  Next Up
                </span>
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
              <ProgressBar
                label="Sales Scoping"
                :percentage="100"
                size="sm"
              />
              <ProgressBar
                label="Pre-Onboarding"
                :percentage="40"
                size="sm"
              />
              <ProgressBar
                v-for="week in 8"
                :key="`week-${week}`"
                :label="`Week ${week}`"
                :percentage="0"
                size="sm"
              />
            </div>
            <div class="mt-4 text-xs text-gray-500">
              Behind the scenes: {{ ACTUAL_TASK_COUNT }} total internal tasks
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div class="space-y-3">
              <button
                @click="toggleWavie"
                class="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center"
              >
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <MessageCircle class="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div class="font-semibold">Canton Wavie</div>
                  <div class="text-sm text-gray-500">AI assistant & help</div>
                </div>
              </button>
              
              <button class="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Upload class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div class="font-semibold">Upload Documents</div>
                  <div class="text-sm text-gray-500">Add required files</div>
                </div>
              </button>
              
              <button class="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Calendar class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div class="font-semibold">Schedule Session</div>
                  <div class="text-sm text-gray-500">Book your next call</div>
                </div>
              </button>
              
              <button
                @click="showReports = true"
                class="w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors flex items-center"
              >
                <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <BarChart3 class="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div class="font-semibold">View Reports</div>
                  <div class="text-sm text-gray-500">Check your progress</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Canton Wavie Component -->
    <CantonWavie />

    <!-- Reports Modal -->
    <ReportsModal
      :is-open="showReports"
      @close="showReports = false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { User, ArrowRight, MessageCircle, Upload, Calendar, BarChart3 } from 'lucide-vue-next';
import { useAuthStore } from '@/stores/auth';
import { useCustomerStore } from '@/stores/customers';
import { useWavie } from '@/composables/useWavie';
import { customerSteps } from '@/data/customerSteps';
import { ACTUAL_TASK_COUNT } from '@/data/demoUsers';
import ProgressBar from '@/components/shared/ProgressBar.vue';
import StatusIcon from '@/components/shared/StatusIcon.vue';
import CantonWavie from '@/components/shared/CantonWavie.vue';
import ReportsModal from '@/components/modals/ReportsModal.vue';
import type { Task } from '@/types';

const router = useRouter();
const authStore = useAuthStore();
const customerStore = useCustomerStore();
const { toggleWavie } = useWavie();

const showReports = ref(false);

const selectedCustomer = computed(() => customerStore.selectedCustomer);

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};

const getStepStatus = (stepId: number): Task['status'] => {
  if (!selectedCustomer.value) return 'not_started';
  
  const currentStep = selectedCustomer.value.currentCustomerStep;
  if (stepId < currentStep) return 'completed';
  if (stepId === currentStep) return 'in_progress';
  return 'not_started';
};

const getStepClassNames = (stepId: number) => {
  if (!selectedCustomer.value) return 'border-gray-200 hover:bg-gray-50';
  
  const currentStep = selectedCustomer.value.currentCustomerStep;
  if (stepId === currentStep) return 'border-blue-200 bg-blue-50';
  if (stepId < currentStep) return 'border-green-200 bg-green-50';
  if (stepId === currentStep + 1) return 'border-yellow-200 bg-yellow-50';
  return 'border-gray-200 hover:bg-gray-50';
};

const canAccessStep = (stepId: number) => {
  if (!selectedCustomer.value) return false;
  return stepId === selectedCustomer.value.currentCustomerStep || stepId === 1;
};

const isNextStep = (stepId: number) => {
  if (!selectedCustomer.value) return false;
  return stepId === selectedCustomer.value.currentCustomerStep + 1;
};

const getStepButtonText = (stepId: number) => {
  if (!selectedCustomer.value) return 'View Step';
  return stepId === selectedCustomer.value.currentCustomerStep ? 'Continue Now' : 'View Step';
};

const goToStep = (stepId: number) => {
  if (stepId === 1) {
    router.push('/customer/step1');
  }
};
</script>
