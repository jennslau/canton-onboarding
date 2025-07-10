import type { Customer } from '@/types';

export const demoCustomers: Customer[] = [
  {
    id: 1,
    name: 'Validator One LLC',
    tier: 2,
    complexity: 'medium',
    erpSystem: 'Xero',
    currentPhase: 'Pre-Onboarding',
    overallProgress: 32,
    email: 'finance@validator1.com',
    contactName: 'Sarah Johnson',
    weekInImplementation: 3,
    currentCustomerStep: 1, // Sarah is on Step 1
    setupCompleted: true,
    createdDate: '2024-12-15'
  },
  {
    id: 2,
    name: 'Crypto Validator Corp',
    tier: 2,
    complexity: 'medium',
    erpSystem: 'QBO',
    currentPhase: '1st Onboarding Session',
    overallProgress: 48,
    email: 'accounting@validator2.io',
    contactName: 'Mike Chen',
    weekInImplementation: 4,
    currentCustomerStep: 3,
    setupCompleted: true,
    createdDate: '2024-12-01'
  },
  {
    id: 3,
    name: 'Staking Solutions Inc',
    tier: 2,
    complexity: 'medium',
    erpSystem: 'NetSuite',
    currentPhase: 'Sales Scoping',
    overallProgress: 15,
    email: 'finance@stakingsolutions.com',
    contactName: 'Emma Rodriguez',
    weekInImplementation: 1,
    currentCustomerStep: 1,
    setupCompleted: false,
    createdDate: '2024-12-20'
  }
];
