<script setup lang="ts">
import TruckGreen from "~/pages/works/TruckGreen.vue";
import FindPlan from "~/pages/works/FindPlan.vue";
</script>

<template>
  <div>
    <section class="px-4 sm:px-6 py-8 sm:py-12 pt-[100px] sm:pt-[150px] md:pt-[185px] mb-[80px] sm:mb-[100px] md:mb-[120px]">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row md:items-start">
          <div class="text-[16px] sm:text-[18px] font-light text-[#1D1D1D] mb-4 md:mb-2 mt-2 md:mt-[20px]">
            • Devices
          </div>
          <h2 class="text-[#1D1D1D] font-medium leading-tight text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] md:ml-8">
            Top-Tier ELD Devices <br>
            <span class="font-medium text-[#40BF69] block md:inline">
              At the best price
            </span>
          </h2>
        </div>
      </div>
    </section>

    <TruckGreen />

    <HomeSectionBuyNow />

    <FindPlan />
  </div>
</template>
