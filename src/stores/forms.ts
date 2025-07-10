import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ConfigurationFormData, WalletData, FormCompletion, SubViewType } from '@/types';

export const useFormStore = defineStore('forms', () => {
  const currentSubView = ref<SubViewType>('configuration');
  const completedForms = ref<FormCompletion>({
    configuration: false,
    wallets: false
  });

  // Configuration form data
  const configurationData = ref<ConfigurationFormData>({
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
    bitwaveSystemDate: '',
    preBitwaveProcess: 'Manual spreadsheet tracking with monthly reconciliation',
    reportingDeadlines: 'Monthly close by 15th, Quarterly reports by end of following month',
    bookkeepingResponsibility: 'Internal team - Finance Manager and Accounting Specialist',
    outsourcedFirm: '',
    otherRequirements: ''
  });

  // Wallets form data
  const walletsData = ref<WalletData[]>([
    {
      entity: 'Crypto Validator Corp',
      dataSourceWalletName: 'Primary Validator Wallet',
      businessPurpose: 'Staking',
      dataSourceNetwork: 'Ethereum',
      walletAddress: '0x742d35Cc6635Bb93...',
      txnVolume: '51-100 transactions',
      otherNotes: ''
    }
  ]);

  // Actions
  const setCurrentSubView = (view: SubViewType) => {
    currentSubView.value = view;
  };

  const updateConfigurationData = (field: keyof ConfigurationFormData, value: string) => {
    configurationData.value[field] = value;
  };

  const completeForm = (formType: keyof FormCompletion) => {
    completedForms.value[formType] = true;
  };

  const addWallet = () => {
    walletsData.value.push({
      entity: '',
      dataSourceWalletName: '',
      businessPurpose: '',
      dataSourceNetwork: '',
      walletAddress: '',
      txnVolume: '',
      otherNotes: ''
    });
  };

  const removeWallet = (index: number) => {
    if (walletsData.value.length > 1) {
      walletsData.value.splice(index, 1);
    }
  };

  const updateWallet = (index: number, field: keyof WalletData, value: string) => {
    if (walletsData.value[index]) {
      walletsData.value[index][field] = value;
    }
  };

  const resetForms = () => {
    completedForms.value = {
      configuration: false,
      wallets: false
    };
    currentSubView.value = 'configuration';
  };

  const isStep1Complete = () => {
    return completedForms.value.configuration && completedForms.value.wallets;
  };

  return {
    currentSubView,
    completedForms,
    configurationData,
    walletsData,
    setCurrentSubView,
    updateConfigurationData,
    completeForm,
    addWallet,
    removeWallet,
    updateWallet,
    resetForms,
    isStep1Complete
  };
});
