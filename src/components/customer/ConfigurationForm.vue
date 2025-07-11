<template>
  <div class="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
    <div class="flex items-center mb-6">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-gray-900">Configuration & Setup</h3>
        <p class="text-gray-600">Complete the onboarding questionnaire</p>
      </div>
    </div>

    <!-- Progress Indicator -->
    <div class="mb-8 bg-gray-50 rounded-xl p-4">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium text-gray-700">Form Progress</span>
        <span class="text-sm font-bold text-gray-900">{{ completedFields }}/{{ totalFields }} fields</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div 
          class="h-2 rounded-full transition-all duration-300"
          style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);"
          :style="{ width: `${Math.min((completedFields / totalFields) * 100, 100)}%` }"
        ></div>
      </div>
    </div>
    
    <form @submit.prevent="handleSubmit">
      <div class="space-y-8">
        <!-- Organization Section -->
        <div>
          <h4 class="text-lg font-bold text-blue-600 mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0v-4a1 1 0 011-1h4a1 1 0 011 1v4M7 7h10M7 11h10M7 15h10"></path>
            </svg>
            Organization
          </h4>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                How does your organization use digital assets? *
              </label>
              <textarea 
                v-model="form.businessUseCase"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                rows="3"
                placeholder="Describe your primary use cases..."
                required
              />
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                Will you have more than one legal entity using Bitwave? *
              </label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="legalEntityStructure"
                    value="Yes"
                    v-model="form.legalEntityStructure"
                    class="mr-2 text-blue-600"
                    required
                  />
                  Yes
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="legalEntityStructure"
                    value="No"
                    v-model="form.legalEntityStructure"
                    class="mr-2 text-blue-600"
                    required
                  />
                  No
                </label>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                What is the functional currency of your legal entity(ies)? *
              </label>
              <select 
                v-model="form.functionalCurrency"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              >
                <option value="">Select currency</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="CAD">CAD - Canadian Dollar</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                What time zone do you use for your cut off? *
              </label>
              <select 
                v-model="form.timeZone"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              >
                <option value="">Select timezone</option>
                <option value="EST">EST - Eastern Standard Time</option>
                <option value="PST">PST - Pacific Standard Time</option>
                <option value="CST">CST - Central Standard Time</option>
                <option value="MST">MST - Mountain Standard Time</option>
                <option value="UTC">UTC - Coordinated Universal Time</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                Do you expect Bitwave to sync directly into your ERP? *
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">ERP Sync Expected</label>
                  <div class="flex space-x-4">
                    <label class="flex items-center">
                      <input
                        type="radio"
                        name="erpExpectation"
                        value="Yes"
                        v-model="form.erpExpectation"
                        class="mr-2 text-blue-600"
                        required
                      />
                      Yes
                    </label>
                    <label class="flex items-center">
                      <input
                        type="radio"
                        name="erpExpectation"
                        value="No"
                        v-model="form.erpExpectation"
                        class="mr-2 text-blue-600"
                        required
                      />
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-600 mb-1">ERP System</label>
                  <select 
                    v-model="form.erpSystem"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  >
                    <option value="">Select ERP</option>
                    <option value="Xero">Xero</option>
                    <option value="QBO">QuickBooks Online</option>
                    <option value="NetSuite">Oracle NetSuite</option>
                    <option value="Sage">Sage Intacct</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accounting/Tax Defaults Section -->
        <div>
          <h4 class="text-lg font-bold text-blue-600 mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            Accounting/Tax Defaults
          </h4>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                What is your source for "pricing" assets? *
              </label>
              <input
                type="text"
                v-model="form.pricingSource"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="e.g., CoinGecko, CoinMarketCap"
                required
              />
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                Pricing frequency *
              </label>
              <select 
                v-model="form.pricingFrequency"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              >
                <option value="">Select frequency</option>
                <option value="Real-time">Real-time</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                Do you use FIFO, LIFO, Avg Cost or Spec ID Treatment? *
              </label>
              <select 
                v-model="form.costBasisMethod"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              >
                <option value="">Select method</option>
                <option value="FIFO">FIFO - First In, First Out</option>
                <option value="LIFO">LIFO - Last In, First Out</option>
                <option value="Average Cost">Average Cost</option>
                <option value="Specific ID">Specific ID Treatment</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Historic Activity Section -->
        <div>
          <h4 class="text-lg font-bold text-blue-600 mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Historic Activity
          </h4>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                Do you have historic activity that needs to be processed? *
              </label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="hasHistoricActivity"
                    value="Yes"
                    v-model="form.hasHistoricActivity"
                    class="mr-2 text-blue-600"
                    required
                  />
                  Yes
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="hasHistoricActivity"
                    value="No"
                    v-model="form.hasHistoricActivity"
                    class="mr-2 text-blue-600"
                    required
                  />
                  No
                </label>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                How have you performed digital asset accounting before Bitwave? *
              </label>
              <textarea 
                v-model="form.preBitwaveProcess"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                rows="3"
                placeholder="Describe your previous accounting process..."
                required
              />
            </div>
          </div>
        </div>

        <!-- Other Requirements Section -->
        <div>
          <h4 class="text-lg font-bold text-blue-600 mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Other Requirements
          </h4>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                What accounting/tax reporting deadlines does your organization have? *
              </label>
              <textarea 
                v-model="form.reportingDeadlines"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                rows="2"
                placeholder="e.g., Monthly close by 15th, Quarterly reports..."
                required
              />
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                Who will be performing the digital asset bookkeeping? *
              </label>
              <textarea 
                v-model="form.bookkeepingResponsibility"
                class="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                rows="2"
                placeholder="Internal team members and roles..."
                required
              />
            </div>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex justify-between items-center pt-6 border-t border-gray-200">
          <button 
            type="button"
            @click="saveDraft"
            class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Save Draft
          </button>
          
          <button 
            type="submit"
            :disabled="!isFormValid"
            class="px-8 py-4 text-white rounded-xl font-semibold transition-all duration-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);"
          >
            Save Configuration & Continue
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['complete', 'save'])

const form = ref({
  businessUseCase: 'Ethereum validator operations and staking rewards management',
  legalEntityStructure: 'No',
  functionalCurrency: 'USD',
  timeZone: 'EST',
  erpExpectation: 'Yes',
  erpSystem: 'Xero',
  pricingSource: 'CoinGecko',
  pricingFrequency: 'Daily',
  costBasisMethod: 'FIFO',
  hasHistoricActivity: 'No',
  preBitwaveProcess: 'Manual spreadsheet tracking with monthly reconciliation',
  reportingDeadlines: 'Monthly close by 15th, Quarterly reports by end of following month',
  bookkeepingResponsibility: 'Internal team - Finance Manager and Accounting Specialist'
})

// Fixed: Only count actual required fields
const totalFields = 12
const completedFields = computed(() => {
  let count = 0
  if (form.value.businessUseCase?.trim()) count++
  if (form.value.legalEntityStructure) count++
  if (form.value.functionalCurrency) count++
  if (form.value.timeZone) count++
  if (form.value.erpExpectation) count++
  if (form.value.erpSystem) count++
  if (form.value.pricingSource?.trim()) count++
  if (form.value.pricingFrequency) count++
  if (form.value.costBasisMethod) count++
  if (form.value.hasHistoricActivity) count++
  if (form.value.preBitwaveProcess?.trim()) count++
  if (form.value.reportingDeadlines?.trim()) count++
  if (form.value.bookkeepingResponsibility?.trim()) count++
  return count
})

const isFormValid = computed(() => {
  const requiredFields = [
    'businessUseCase', 'legalEntityStructure', 'functionalCurrency', 'timeZone',
    'erpExpectation', 'erpSystem', 'pricingSource', 'pricingFrequency',
    'costBasisMethod', 'hasHistoricActivity', 'preBitwaveProcess',
    'reportingDeadlines', 'bookkeepingResponsibility'
  ]
  
  return requiredFields.every(field => {
    const value = form.value[field]
    return value && value.toString().trim() !== ''
  })
})

const saveDraft = () => {
  emit('save', form.value)
  alert('Configuration saved as draft!')
}

const handleSubmit = () => {
  if (isFormValid.value) {
    emit('complete', form.value)
  }
}
</script>
