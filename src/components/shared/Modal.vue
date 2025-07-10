<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click="closeOnOverlay && $emit('close')"
      >
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 transform scale-95"
          enter-to-class="opacity-100 transform scale-100"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 transform scale-100"
          leave-to-class="opacity-0 transform scale-95"
        >
          <div
            v-if="isOpen"
            :class="modalClass"
            @click.stop
          >
            <div v-if="showHeader" class="flex items-center justify-between mb-6">
              <div class="flex items-center">
                <div v-if="icon" :class="iconContainerClass">
                  <component :is="icon" :class="iconClass" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">{{ title }}</h3>
                  <p v-if="subtitle" class="text-gray-600">{{ subtitle }}</p>
                </div>
              </div>
              <button
                v-if="showCloseButton"
                @click="$emit('close')"
                class="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X class="w-6 h-6" />
              </button>
            </div>
            
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { X } from 'lucide-vue-next';

interface Props {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  icon?: any;
  iconColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showHeader?: boolean;
  showCloseButton?: boolean;
  closeOnOverlay?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showHeader: true,
  showCloseButton: true,
  closeOnOverlay: true
});

defineEmits<{
  close: [];
}>();

const modalClass = computed(() => {
  const baseClass = 'bg-white rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto';
  
  const sizeClasses = {
    sm: 'w-full max-w-md',
    md: 'w-full max-w-lg',
    lg: 'w-full max-w-2xl',
    xl: 'w-full max-w-4xl',
    full: 'w-full max-w-6xl'
  };
  
  return `${baseClass} ${sizeClasses[props.size]}`;
});

const iconContainerClass = computed(() => {
  const colorClass = props.iconColor || 'bg-blue-100';
  return `w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mr-4`;
});

const iconClass = computed(() => {
  const colorClass = props.iconColor ? 'text-white' : 'text-blue-600';
  return `w-6 h-6 ${colorClass}`;
});
</script>
