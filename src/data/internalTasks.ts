import type { Task, PhaseProgress } from '@/types';

export const sampleInternalTasks: Task[] = [
  {
    id: 1,
    step: 1,
    phase: 'Sales Scoping',
    task: 'Scoping',
    status: 'completed',
    assignedTo: 'Sales',
    customerFacing: true,
    executes: 'Sales',
    accountable: 'Sales',
    estimatedHours: 2
  },
  {
    id: 2,
    step: 2,
    phase: 'Sales Scoping',
    task: 'Client Complexity Assessment',
    status: 'completed',
    assignedTo: 'Sales',
    customerFacing: false,
    executes: 'Sales',
    accountable: 'Sales',
    estimatedHours: 1
  },
  {
    id: 24,
    step: 24,
    phase: 'Pre-Onboarding',
    task: 'Complete the onboarding checklist',
    status: 'in_progress',
    assignedTo: 'Customer',
    customerFacing: true,
    executes: 'Customer',
    accountable: 'CSO',
    estimatedHours: 3
  },
  {
    id: 25,
    step: 25,
    phase: 'Pre-Onboarding',
    task: 'Create slack communication channels',
    status: 'completed',
    assignedTo: 'CSO',
    customerFacing: false,
    executes: 'CSO',
    accountable: 'CSO',
    estimatedHours: 1
  },
  {
    id: 33,
    step: 33,
    phase: 'Pre-Onboarding',
    task: 'ERP Integration Setup',
    status: 'not_started',
    assignedTo: 'SA',
    customerFacing: false,
    executes: 'SA',
    accountable: 'SA',
    estimatedHours: 4
  },
  {
    id: 38,
    step: 38,
    phase: '1st Onboarding Session',
    task: 'Review Customer Data',
    status: 'in_progress',
    assignedTo: 'CSO',
    customerFacing: true,
    executes: 'Customer',
    accountable: 'CSO',
    estimatedHours: 2
  }
];

export const phaseProgress: Record<string, PhaseProgress> = {
  'Sales Scoping': { completed: 7, total: 7, percentage: 100 },
  'Pre-Onboarding': { completed: 12, total: 30, percentage: 40 },
  '1st Onboarding Session': { completed: 3, total: 8, percentage: 38 },
  '1st Session Follow-Up': { completed: 0, total: 9, percentage: 0 },
  '2nd Onboarding Session': { completed: 0, total: 12, percentage: 0 },
  '2nd Session Follow Up': { completed: 0, total: 5, percentage: 0 },
  '3rd Onboarding Session': { completed: 0, total: 8, percentage: 0 },
  '3rd Session Follow-Up': { completed: 0, total: 5, percentage: 0 },
  '4th Onboarding Session': { completed: 0, total: 9, percentage: 0 },
  '4th Session Recap Tasks': { completed: 0, total: 5, percentage: 0 },
  '5th Onboarding Session': { completed: 0, total: 19, percentage: 0 },
  '5th Session Follow-Up': { completed: 0, total: 2, percentage: 0 },
  '6th Onboarding Session': { completed: 0, total: 14, percentage: 0 },
  '6th Session Follow-Up': { completed: 0, total: 3, percentage: 0 },
  '7th Onboarding Session': { completed: 0, total: 13, percentage: 0 },
  '7th Session Follow-Up': { completed: 0, total: 3, percentage: 0 },
  '8th Onboarding Session': { completed: 0, total: 1, percentage: 0 },
  '8th Session Recap Tasks': { completed: 0, total: 3, percentage: 0 },
  'New Onboarding Status Review': { completed: 0, total: 1, percentage: 0 },
  'Training + Resources Outreach': { completed: 0, total: 1, percentage: 0 },
  'Ongoing Operations': { completed: 0, total: 8, percentage: 0 }
};
