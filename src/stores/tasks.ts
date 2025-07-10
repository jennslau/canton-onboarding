import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Task } from '@/types';
import { sampleInternalTasks, phaseProgress } from '@/data/internalTasks';

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([...sampleInternalTasks]);
  const phases = ref({ ...phaseProgress });

  const toggleTaskStatus = (taskId: number) => {
    const task = tasks.value.find(t => t.id === taskId);
    if (task) {
      switch (task.status) {
        case 'not_started':
          task.status = 'in_progress';
          break;
        case 'in_progress':
          task.status = 'completed';
          break;
        case 'completed':
          task.status = 'not_started';
          break;
        default:
          break;
      }
    }
  };

  const updateTaskStatus = (taskId: number, status: Task['status']) => {
    const task = tasks.value.find(t => t.id === taskId);
    if (task) {
      task.status = status;
    }
  };

  const getTasksByPhase = (phase: string): Task[] => {
    return tasks.value.filter(task => task.phase === phase);
  };

  const getTasksByCustomerFacing = (customerFacing: boolean): Task[] => {
    return tasks.value.filter(task => task.customerFacing === customerFacing);
  };

  // Computed properties
  const completedTasks = computed(() => 
    tasks.value.filter(task => task.status === 'completed')
  );

  const inProgressTasks = computed(() => 
    tasks.value.filter(task => task.status === 'in_progress')
  );

  const notStartedTasks = computed(() => 
    tasks.value.filter(task => task.status === 'not_started')
  );

  const blockedTasks = computed(() => 
    tasks.value.filter(task => task.status === 'blocked')
  );

  const overallProgress = computed(() => {
    if (tasks.value.length === 0) return 0;
    return Math.round((completedTasks.value.length / tasks.value.length) * 100);
  });

  const tasksByPhase = computed(() => {
    const grouped: Record<string, Task[]> = {};
    tasks.value.forEach(task => {
      if (!grouped[task.phase]) {
        grouped[task.phase] = [];
      }
      grouped[task.phase].push(task);
    });
    return grouped;
  });

  const phaseProgressCalculated = computed(() => {
    const calculated: Record<string, { completed: number; total: number; percentage: number }> = {};
    
    Object.keys(tasksByPhase.value).forEach(phase => {
      const phaseTasks = tasksByPhase.value[phase];
      const completed = phaseTasks.filter(task => task.status === 'completed').length;
      const total = phaseTasks.length;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      
      calculated[phase] = { completed, total, percentage };
    });
    
    return calculated;
  });

  return {
    tasks,
    phases,
    toggleTaskStatus,
    updateTaskStatus,
    getTasksByPhase,
    getTasksByCustomerFacing,
    completedTasks,
    inProgressTasks,
    notStartedTasks,
    blockedTasks,
    overallProgress,
    tasksByPhase,
    phaseProgressCalculated
  };
});
