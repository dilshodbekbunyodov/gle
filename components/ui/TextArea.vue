<template>
  <div :class="customClass" class="input-container">
    <label v-if="label" class="text-sm font-medium">{{ label }}</label>
    <textarea
        :placeholder="placeholder"
        v-bind="$attrs"
        :value="modelValue"
        class="input-field text-white"
        @input="updateValue"/>
    <p v-if="errors" class="mt-1 text-sm text-red-600">{{ errors }}</p>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';

defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  modelValue: {
    type: String,
    required: true
  },
  customClass: {
    type: String,
    required: false,
    default: ''
  },
  errors: {
    type: String,
    required: false,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

// Method to handle input and emit the updated value
const updateValue = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.input-field {
  padding: 17px 2px;
  border-bottom: 1px solid #FFFFFF80;
  outline: none;
}

.input-field::placeholder {
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  color: #FFFFFF;
}
</style>
