import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Customer } from '@/types';
import { demoCustomers } from '@/data/customers';

export const useCustomerStore = defineStore('customers', () => {
  const customers = ref<Customer[]>([...demoCustomers]);
  const selectedCustomer = ref<Customer | null>(null);

  const getCustomerById = (id: number): Customer | undefined => {
    return customers.value.find(customer => customer.id === id);
  };

  const setSelectedCustomer = (customer: Customer | null) => {
    selectedCustomer.value = customer;
  };

  const selectCustomerById = (id: number) => {
    const customer = getCustomerById(id);
    if (customer) {
      selectedCustomer.value = customer;
    }
  };

  const updateCustomerProgress = (customerId: number, progress: number) => {
    const customer = customers.value.find(c => c.id === customerId);
    if (customer) {
      customer.overallProgress = progress;
    }
  };

  const updateCustomerStep = (customerId: number, step: number) => {
    const customer = customers.value.find(c => c.id === customerId);
    if (customer) {
      customer.currentCustomerStep = step;
    }
  };

  const addCustomer = (customer: Omit<Customer, 'id'>) => {
    const newId = Math.max(...customers.value.map(c => c.id)) + 1;
    const newCustomer: Customer = {
      ...customer,
      id: newId
    };
    customers.value.push(newCustomer);
    return newCustomer;
  };

  // Computed properties
  const totalCustomers = computed(() => customers.value.length);
  
  const averageProgress = computed(() => {
    if (customers.value.length === 0) return 0;
    const total = customers.value.reduce((sum, customer) => sum + customer.overallProgress, 0);
    return Math.round(total / customers.value.length);
  });

  const customersInPhase = computed(() => {
    const phases: Record<string, number> = {};
    customers.value.forEach(customer => {
      phases[customer.currentPhase] = (phases[customer.currentPhase] || 0) + 1;
    });
    return phases;
  });

  return {
    customers,
    selectedCustomer,
    getCustomerById,
    setSelectedCustomer,
    selectCustomerById,
    updateCustomerProgress,
    updateCustomerStep,
    addCustomer,
    totalCustomers,
    averageProgress,
    customersInPhase
  };
});
