import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Task } from '@/types';
import { sampleInternalTasks, phaseProgress } from '@/data/internalTasks';

export const useTaskStore = defineStore('
