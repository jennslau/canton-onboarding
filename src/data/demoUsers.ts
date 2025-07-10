import type { DemoUsers } from '@/types';

export const DEMO_USERS: DemoUsers = {
  'finance@validator1.com': {
    email: 'finance@validator1.com',
    role: 'customer',
    customerId: 1,
    tier: 2,
    company: 'Validator One LLC',
    erpSystem: 'Xero',
    complexity: 'medium',
    contactName: 'Sarah Johnson'
  },
  'accounting@validator2.io': {
    email: 'accounting@validator2.io',
    role: 'customer',
    customerId: 2,
    tier: 2,
    company: 'Crypto Validator Corp',
    erpSystem: 'QBO',
    complexity: 'medium',
    contactName: 'Mike Chen'
  },
  'cso@bitwave.io': {
    email: 'cso@bitwave.io',
    role: 'internal',
    name: 'Alex Rivera',
    permissions: ['view_all', 'edit_all']
  },
  'cs.manager@bitwave.io': {
    email: 'cs.manager@bitwave.io',
    role: 'cs_manager',
    name: 'Jessica Kim',
    permissions: ['create_customers', 'upload_csv', 'manage_system']
  }
};

export const ACTUAL_TASK_COUNT = 166;
