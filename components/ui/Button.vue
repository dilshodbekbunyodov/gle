<script setup lang="ts">
interface Props {
  label?: string;
  type?: string;
}

withDefaults(defineProps<Props>(), {
  label: '',
  type: 'button'
});

const emit = defineEmits(['click']);
</script>

<template>
  <button
      :type="type"
      @click="emit('click')"
      class="w-[219.71px] h-12 relative overflow-hidden rounded-full group"
  >
    <span
        class="absolute inset-0 z-10 bg-gray-100 scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition-transform duration-500 ease-in-out"
    ></span>

    <span
        class="absolute inset-0 z-0"
        :style="{
        background:
          'linear-gradient(133.93deg, rgba(64, 191, 105, 0.8) 26.95%, rgba(64, 191, 105, 0.2) 231.98%)'
      }"
    ></span>

    <span
        class="relative z-20 flex items-center justify-center w-full h-full font-inter font-medium text-base leading-6 tracking-tighter transition-colors duration-300 group-hover:text-green-600 text-white"
    >
      {{ label }}
    </span>
  </button>
</template>
