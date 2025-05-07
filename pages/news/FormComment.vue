<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import TextArea from "~/components/ui/TextArea.vue";
import Input from "~/components/ui/Input.vue";

const text = ref('')
</script>

<template>
  <div class="mt-[60px]">
    <h2 class="text-[#1D1D1D] font-medium text-[40px] mb-6">Leave a comment</h2>

    <form class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <Input v-model="text" class="border-b border-[#1D1D1D33] !text-[#757575]"/>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input v-model="text" class="border-b border-[#1D1D1D33] !text-[#757575]"/>
        </div>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <TextArea v-model="text" class="border-b border-[#1D1D1D33] !text-[#757575]"/>
      </div>

      <Button label="POST COMMENT" class="w-full"/>
    </form>
  </div>
</template>

<style scoped>

</style>