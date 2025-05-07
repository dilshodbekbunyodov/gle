<script setup lang="ts">

</script>

<template>
  <div>
    <div class="md:px-6 px-0 py-12 pt-[185px] md:mb-[100px] mb-[50px]">
      <div class="container mx-auto md:px-0 px-5">
        <div class="md:flex">
          <div class="text-[18px] font-light text-[#1D1D1D] mb-2 mt-[20px]">• Blog</div>
          <h2 class="text-[#1D1D1D] font-medium leading-[100%] md:text-[100px] text-[30px] md:ml-[32px]">
            NEWS AND <br>
            <span class="font-medium leading-[100%] text-[#40BF69] md:ml-52 ml-0">USEFUL ARTICLES</span>
          </h2>
        </div>
      </div>
    </div>

    <div class="container mb-24 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <NuxtLink
            v-for="(index) in 6"
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
  </div>
</template>

<style scoped>

</style>