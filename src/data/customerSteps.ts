import type { CustomerStep } from '@/types';

export const customerSteps: CustomerStep[] = [
  {
    id: 1,
    name: 'Complete Setup Information',
    status: 'in_progress', // Current step for Sarah Johnson 
    description: 'Provide business details and wallet information',
    internalStep: 24,
    phase: 'Pre-Onboarding',
    estimatedDays: 2,
    requirements: ['Configuration Form', 'Wallets & Accounts Form']
  },
  {
    id: 2,
    name: 'Connect Your Systems',
    status: 'not_started',
    description: 'Link your ERP and complete system setup',
    internalSteps: [33, 34, 35],
    phase: 'Pre-Onboarding',
    estimatedDays: 3,
    requirements: ['ERP Integration', 'API Setup', 'Data Sync Test']
  },
  {
    id: 3,
    name: 'Import & Verify Data',
    description: 'Review historical data and wallet balances',
    internalSteps: [38, 39, 40],
    phase: '1st Onboarding Session',
    estimatedDays: 5,
    requirements: ['Historical Data Upload', 'Balance Verification', 'Data Quality Check']
  },
  {
    id: 4,
    name: 'Learn Transaction Management',
    description: 'Master categorization and platform features',
    internalSteps: [55, 56, 57],
    phase: '2nd Onboarding Session',
    estimatedDays: 4,
    requirements: ['Categorization Training', 'Rule Setup', 'Test Transactions']
  },
  {
    id: 5,
    name: 'Master Accounting Integration',
    description: 'Configure ERP sync and reporting',
    internalSteps: [72, 73, 74],
    phase: '3rd Onboarding Session',
    estimatedDays: 5,
    requirements: ['Chart of Accounts Mapping', 'Automated Sync', 'Report Generation']
  },
  {
    id: 6,
    name: 'Configure Advanced Reporting',
    description: 'Set up compliance and advanced features',
    internalSteps: [99, 100, 101],
    phase: '5th Onboarding Session',
    estimatedDays: 4,
    requirements: ['Compliance Reports', 'Custom Dashboards', 'Automated Alerts']
  },
  {
    id: 7,
    name: 'Complete Training & Go-Live',
    description: 'Final certification and production readiness',
    internalSteps: [137, 138, 139],
    phase: '7th Onboarding Session',
    estimatedDays: 3,
    requirements: ['User Training', 'Go-Live Checklist', 'Production Setup']
  },
  {
    id: 8,
    name: 'Establish Ongoing Operations',
    description: 'Monthly processes and ongoing support',
    internalSteps: [159, 160, 165, 166],
    phase: 'Ongoing Operations',
    estimatedDays: 7,
    requirements: ['Monthly Close Process', 'Support Channels', 'Maintenance Schedule']
  }
];
