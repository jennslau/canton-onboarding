<template>
  <div class="w-full">
    <div v-if="showLabel" class="flex justify-between text-sm mb-2">
      <span class="font-semibold text-gray-700">{{ label }}</span>
      <span class="font-bold text-gray-900">{{ percentage }}%</span>
    </div>
    <div :class="containerClass">
      <div 
        :class="progressClass"
        :style="{ width: `${percentage}%` }"
        class="rounded-full h-3 transition-all duration-500"
      ></div>
    </div>
    <div v-if="showDetails" class="text-xs text-gray-500 mt-1">
      {{ completed }} of {{ total }} {{ detailLabel }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getProgressColor } from '@/utils/statusHelpers';

interface Props {
  percentage: number;
  label?: string;
  completed?: number;
  total?: number;
  detailLabel?: string;
  showLabel?: boolean;
  showDetails?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

const props = withDefaults(defineProps<Props>(), {
  showLabel: true,
  showDetails: false,
  size: 'md',
  variant: 'default',
  detailLabel: 'tasks'
});

const containerClass = computed(() => {
  const baseClass = 'w-full rounded-full';
  const sizeClass = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  }[props.size];
  
  const variantClass = props.variant === 'white' 
    ? 'bg-white bg-opacity-30' 
    : 'bg-gray-200';
  
  return `${baseClass} ${sizeClass} ${variantClass}`;
});

const progressClass = computed(() => {
  if (props.variant === 'white') {
    return 'bg-white shadow-lg';
  }
  return getProgressColor(props.percentage);
});
</script>
