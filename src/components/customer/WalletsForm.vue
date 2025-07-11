<template>
  <div class="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
    <div class="flex items-center mb-6">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-gray-900">Wallets & Accounts</h3>
        <p class="text-gray-600">Configure your digital asset infrastructure</p>
      </div>
    </div>

    <!-- Progress Indicator -->
    <div class="mb-8 bg-gray-50 rounded-xl p-4">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium text-gray-700">Wallet Configuration</span>
        <span class="text-sm font-bold text-gray-900">{{ validWallets.length }} wallet{{ validWallets.length !== 1 ? 's' : '' }} configured</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div 
          class="h-2 rounded-full transition-all duration-300"
          style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);"
          :style="{ width: `${Math.min((validWallets.length / 3) * 100, 100)}%` }"
        ></div>
      </div>
      <p class="text-sm text-gray-600 mt-2">Minimum 1 wallet required, 3+ recommended</p>
    </div>
    
    <p class="text-gray-600 mb-6">
      Please provide information about all wallets, exchanges, and custodial accounts your organization uses for digital assets.
    </p>
    
    <!-- Wallet Cards -->
    <div class="space-y-6 mb-6">
      <div 
        v-for="(wallet, index) in wallets" 
        :key="wallet.id"
        class="border border-gray-200 rounded-xl p-6 bg-gray-50 relative"
      >
        <div class="flex justify-between items-center mb-4">
          <h4 class="font-bold text-lg text-gray-900 flex items-center">
            <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            Wallet/Account #{{ index + 1 }}
            <svg v-if="isWalletValid(wallet)" class="w-5 h-5 ml-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </h4>
          
          <button
            v-if="wallets.length > 1"
            @click="removeWallet(index)"
            class="text-red-600 hover:text-red-800 flex items-center transition-colors"
          >
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Remove
          </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Entity *
            </label>
            <input 
              type="text" 
              v-model="wallet.entity"
              class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              placeholder="Legal entity name"
              required
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Data Source / Wallet Name *
            </label>
            <input 
              type="text" 
              v-model="wallet.dataSourceWalletName"
              class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              placeholder="e.g., Corporate Treasury, Exchange Account"
              required
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Business Purpose *
            </label>
            <select 
              v-model="wallet.businessPurpose"
              class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            >
              <option value="">Select purpose...</option>
              <option value="Treasury">Treasury</option>
              <option value="Trading">Trading</option>
              <option value="Staking">Staking</option>
              <option value="Custody">Custody</option>
              <option value="Operations">Operations</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Data Source (Network/Exchange/Custodian) *
            </label>
            <input 
              type="text" 
              v-model="wallet.dataSourceNetwork"
              class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              placeholder="e.g., Ethereum, Coinbase, Fireblocks"
              required
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Wallet Address/Access Information *
            </label>
            <input 
              type="text" 
              v-model="wallet.walletAddress"
              class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-mono text-sm"
              placeholder="0x... or API credentials reference"
              required
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Txn Volume (Estimated per month) *
            </label>
            <select 
              v-model="wallet.txnVolume"
              class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            >
              <option value="">Select volume...</option>
              <option value="1-10 transactions">1-10 transactions</option>
              <option value="11-50 transactions">11-50 transactions</option>
              <option value="51-100 transactions">51-100 transactions</option>
              <option value="101-500 transactions">101-500 transactions</option>
              <option value="500+ transactions">500+ transactions</option>
            </select>
          </div>
          
          <div class="md:col-span-2">
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              Access Method
            </label>
            <select 
              v-model="wallet.accessMethod"
              class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            >
              <option value="">Select access method</option>
              <option value="API">API Connection</option>
              <option value="CSV">CSV Export</option>
              <option value="Manual">Manual Entry</option>
              <option value="Read-only">Read-only Access</option>
            </select>
          </div>

          <!-- API Configuration (conditional) -->
          <div v-if="wallet.accessMethod === 'API'" class="md:col-span-2">
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h5 class="font-medium text-blue-900 mb-3 flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v-2H7v-2H4a1 1 0 01-1-1v-4a1 1 0 011-1h3l4.586-4.586A2 2 0 0112.414 6L15 7z"></path>
                </svg>
                API Configuration
              </h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-blue-700 mb-1">
                    API Key
                  </label>
                  <input 
                    type="password" 
                    v-model="wallet.apiKey"
                    class="w-full border border-blue-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter API key"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-blue-700 mb-1">
                    API Secret
                  </label>
                  <input 
                    type="password" 
                    v-model="wallet.apiSecret"
                    class="w-full border border-blue-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter API secret"
                  />
                </div>
              </div>
              <p class="text-xs text-blue-600 mt-2">
                API credentials are encrypted and stored securely
              </p>
            </div>
          </div>
        </div>
        
        <div class="mt-4">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            Other Notes
          </label>
          <textarea 
            v-model="wallet.otherNotes"
            class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            rows="2"
            placeholder="Any additional information about this wallet/account"
          />
        </div>

        <!-- Validation Status -->
        <div v-if="!isWalletValid(wallet)" class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <span class="text-sm text-yellow-800">Please complete all required fields</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Add Wallet Button -->
    <div class="flex justify-center mb-8">
      <button
        @click="addWallet"
        class="flex items-center px-6 py-3 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        Add Another Wallet/Account
      </button>
    </div>

    <!-- Summary Card -->
    <div class="bg-gray-50 rounded-2xl p-6 mb-8">
      <h4 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"></path>
        </svg>
        Configuration Summary
      </h4>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-blue-600">{{ validWallets.length }}</div>
          <div class="text-sm text-blue-800">Valid Wallets</div>
        </div>
        <div class="bg-green-50 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-green-600">{{ apiConnections }}</div>
          <div class="text-sm text-green-800">API Connections</div>
        </div>
        <div class="bg-purple-50 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-purple-600">{{ uniqueNetworks }}</div>
          <div class="text-sm text-purple-800">Networks</div>
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
        @click="handleSubmit"
        :disabled="!canSubmit"
        class="px-8 py-4 text-white rounded-xl font-semibold transition-all duration-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);"
      >
        Complete Step 1
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['complete', 'save'])

const wallets = ref([
  {
    id: '1',
    entity: 'Crypto Validator Corp',
    dataSourceWalletName: 'Primary Validator Wallet',
    businessPurpose: 'Staking',
    dataSourceNetwork: 'Ethereum',
    walletAddress: '0x742d35Cc6635Bb93...',
    txnVolume: '51-100 transactions',
    accessMethod: '',
    apiKey: '',
    apiSecret: '',
    otherNotes: ''
  }
])

const isWalletValid = (wallet) => {
  return !!(
    wallet.entity &&
    wallet.dataSourceWalletName &&
    wallet.businessPurpose &&
    wallet.dataSourceNetwork &&
    wallet.walletAddress &&
    wallet.txnVolume
  )
}

const validWallets = computed(() => {
  return wallets.value.filter(wallet => isWalletValid(wallet))
})

const apiConnections = computed(() => {
  return wallets.value.filter(wallet => wallet.accessMethod === 'API').length
})

const uniqueNetworks = computed(() => {
  const networks = new Set(
    validWallets.value
      .map(wallet => wallet.dataSourceNetwork)
      .filter(network => network)
  )
  return networks.size
})

const canSubmit = computed(() => {
  return validWallets.value.length >= 1
})

const addWallet = () => {
  const newId = (Math.max(...wallets.value.map(w => parseInt(w.id))) + 1).toString()
  wallets.value.push({
    id: newId,
    entity: '',
    dataSourceWalletName: '',
    businessPurpose: '',
    dataSourceNetwork: '',
    walletAddress: '',
    txnVolume: '',
    accessMethod: '',
    apiKey: '',
    apiSecret: '',
    otherNotes: ''
  })
}

const removeWallet = (index) => {
  if (wallets.value.length > 1) {
    wallets.value.splice(index, 1)
  }
}

const saveDraft = () => {
  emit('save', { wallets: wallets.value })
  alert('Wallets configuration saved as draft!')
}

const handleSubmit = () => {
  if (canSubmit.value) {
    emit('complete', { wallets: validWallets.value })
  }
}
</script>
