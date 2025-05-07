<script setup lang="ts">

</script>

<template>
  <div class="container my-[120px]">
    <div class="flex items-center justify-between md:px-0 px-5">
      <h1 class="text-[#1D1D1D] font-medium md:text-[48px] text-[22px] leading-[100%]">
        Recent News
      </h1>

      <button
          class="text-[#1D1D1D] font-medium text-[14px] md:py-[14px] py-[8px] md:px-[26px] px-[10px] rounded-full border border-[#1D1D1D4D] flex items-center">
        All Articles
        <img src="@/assets/images/arrowRight.png" class="ml-[18px] h-[15px] w-[9px]" alt="arrow">
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[50px] md:px-0 px-5">
      <NuxtLink
          v-for="(index) in 3"
          :key="index"
          :to="`/news/${index}`"
          class="group space-y-4"
      >
        <div class="relative w-full h-[255px] overflow-hidden rounded-[15px]">
          <img
              src="@/assets/images/img_1.png"
              alt="image"
              class="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 group-hover:-top-full"
          >

          <img
              src="@/assets/images/img_1.png"
              alt="image"
              class="absolute top-full left-0 w-full h-full object-cover transition-all duration-500 group-hover:-top-[20px] mt-[20px]"
          >
        </div>

        <p class="text-[#1D1D1D] font-medium text-lg md:text-xl leading-snug">
          Common UX painpoints in Dashboard-related projects you must know
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>