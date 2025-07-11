import type { Task } from '@/types';

export const getProgressColor = (percentage: number): string => {
  if (percentage === 100) return 'bg-gradient-to-r from-green-500 to-emerald-500';
  if (percentage > 50) return 'bg-gradient-to-r from-blue-500 to-purple-500';
  if (percentage > 0) return 'bg-gradient-to-r from-yellow-400 to-orange-500';
  return 'bg-gray-300';
};

export const getStatusColor = (status: Task['status']): string => {
  switch (status) {
    case 'completed':
      return 'text-green-500';
    case 'in_progress':
      return 'text-blue-500';
    case 'blocked':
      return 'text-red-500';
    default:
      return 'text-gray-300';
  }
};

export const getStatusBgColor = (status: Task['status']): string => {
  switch (status) {
    case 'completed':
      return 'bg-green-50 border-green-200';
    case 'in_progress':
      return 'bg-blue-50 border-blue-200';
    case 'blocked':
      return 'bg-red-50 border-red-200';
    default:
      return 'bg-gray-50 border-gray-200';
  }
};

export const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString();
};

export const calculateProgress = (tasks: Task[]): number => {
  if (tasks.length === 0) return 0;
  const completed = tasks.filter(task => task.status === 'completed').length;
  return Math.round((completed / tasks.length) * 100);
};
