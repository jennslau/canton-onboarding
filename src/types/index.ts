// User types
export interface User {
  email: string;
  role: 'customer' | 'internal' | 'cs_manager';
  customerId?: number;
  tier?: number;
  company?: string;
  erpSystem?: string;
  complexity?: string;
  contactName?: string;
  name?: string;
  permissions?: string[];
}

// Customer types
export interface Customer {
  id: number;
  name: string;
  tier: number;
  complexity: 'low' | 'medium' | 'high';
  erpSystem: string;
  currentPhase: string;
  overallProgress: number;
  email: string;
  contactName: string;
  weekInImplementation: number;
  currentCustomerStep: number;
  setupCompleted: boolean;
  createdDate: string;
}

// Task types
export interface Task {
  id: number;
  step: number;
  phase: string;
  task: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'blocked';
  assignedTo: string;
  customerFacing: boolean;
  executes: string;
  accountable: string;
  estimatedHours: number;
}

// Customer step types
export interface CustomerStep {
  id: number;
  name: string;
  status?: 'not_started' | 'in_progress' | 'completed';
  description: string;
  internalStep?: number;
  internalSteps?: number[];
  phase: string;
  estimatedDays: number;
  requirements: string[];
}

// Phase progress types
export interface PhaseProgress {
  completed: number;
  total: number;
  percentage: number;
}

// Canton Wavie types
export interface WavieMessage {
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

// Form data types
export interface ConfigurationFormData {
  businessUseCase: string;
  legalEntityStructure: string;
  functionalCurrency: string;
  timeZone: string;
  erpExpectation: string;
  erpSystem: string;
  pricingSource: string;
  pricingFrequency: string;
  costBasisMethod: string;
  hasHistoricActivity: string;
  bitwaveSystemDate: string;
  preBitwaveProcess: string;
  reportingDeadlines: string;
  bookkeepingResponsibility: string;
  outsourcedFirm: string;
  otherRequirements: string;
}

export interface WalletData {
  entity: string;
  dataSourceWalletName: string;
  businessPurpose: string;
  dataSourceNetwork: string;
  walletAddress: string;
  txnVolume: string;
  otherNotes: string;
}

export interface FormCompletion {
  configuration: boolean;
  wallets: boolean;
}

// Navigation and UI types
export type ViewType = 'login' | 'customer' | 'internal' | 'customerStep1';
export type SubViewType = 'configuration' | 'wallets';

// Demo users constant type
export interface DemoUsers {
  [email: string]: User;
}
