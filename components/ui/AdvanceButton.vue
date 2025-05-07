<script setup lang="ts">
interface Props {
  label?: string;
  color?: string
}

withDefaults(defineProps<Props>(), {
  label: '',
  color: 'text-white'
});

const emit = defineEmits(['click']);
</script>

<template>
  <div
      class="transform flex items-baseline cursor-pointer transition-all duration-400 group"
      @click="emit('click')"
  >
    <div
        class="bg-[#40BF69] transform scale-[0.2] group-hover:scale-[1] rounded-full border border-[#40BF69] mr-[12px] transition-all duration-400 h-10 w-10 flex items-center justify-center">
      <svg
          class="opacity-0 group-hover:opacity-100 mr-[50px] group-hover:mr-0 transition-all duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none"
          xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 5.375H9.75M9.75 5.375L5.375 1M9.75 5.375L5.375 9.75" stroke="white" stroke-width="1.4"
            stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="font-medium text-base pb-3.5" :class="color">
      {{ label }}

      <div class="w-full h-[1px] bg-[#40BF69] mt-[14px] group-hover:w-[0px] transition-all duration-400"/>
    </div>
  </div>
</template>

