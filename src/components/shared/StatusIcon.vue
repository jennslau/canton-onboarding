<template>
  <component
    :is="iconComponent"
    :class="iconClass"
    class="w-5 h-5"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CheckCircle, Clock, AlertTriangle, Circle } from 'lucide-vue-next';
import type { Task } from '@/types';
import { getStatusColor } from '@/utils/statusHelpers';

interface Props {
  status: Task['status'];
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
});

const iconComponent = computed(() => {
  switch (props.status) {
    case 'completed':
      return CheckCircle;
    case 'in_progress':
      return Clock;
    case 'blocked':
      return AlertTriangle;
    default:
      return Circle;
  }
});

const iconClass = computed(() => {
  const baseClass = getStatusColor(props.status);
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }[props.size];
  
  return `${baseClass} ${sizeClass}`;
});
</script>
