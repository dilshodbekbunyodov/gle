<script setup lang="ts">
import AdvanceButton from "~/components/ui/AdvanceButton.vue";
import Button from "~/components/ui/Button.vue";

const counter = ref(0)
</script>

<template>
  <div class="bg-[#F5F5F5] w-[98%] rounded-[30px] m-auto">
    <div class="container py-[60px]">
      <div class="md:flex items-start justify-between mb-[60px]">
        <h4 class="text-[64px] leading-none text-[#1D1D1D] font-medium">
          Find a plan that’s <br><span class='text-[#40BF69]'>right for you</span>
        </h4>

        <h3 class="text-[#1D1D1D] text-[18px] font-light flex items-center justify-center mb-0">
          <img src="@/assets/images/dot.svg" class="mr-[12px]" alt="dot">
          Enjoy Your 1 Week Free Trial
        </h3>
      </div>

      <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div
            v-for="(item, index) in 3"
            :key="index">
          <div
              class="group bg-white rounded-[26px] border border-[#75798833] relative overflow-hidden transition-all duration-300 hover:z-10">
            <div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute inset-0 opacity-50 bg-[#80d49b]"/>
              <div
                  class="inset-0 custom-gradient border-2 border-[#49c270] rounded-full absolute group-hover:-left-[47%] -left-[200%] -top-[58px] w-[800px] h-[800px] transition-all duration-400"/>
            </div>

            <div class="relative z-10 py-[40px] px-[79px]  transition-all duration-300">
              <div class="flex items-center">
                <img src="@/assets/images/picture.svg" class="stroke-[#40BF69]" alt="picture">
                <span
                    class="font-inter group-hover:text-white -all duration-300 ml-[12px] font-normal text-[20px] leading-[100%] tracking-[0] underline decoration-solid decoration-[0px] underline-offset-[0px] text-[#40BF69]">
                  View image
                </span>
              </div>

              <h1 class="font-[500] text-4xl leading-none  mb-0 mt-[16px] group-hover:text-white group-hover:text-[44px] transition-all duration-400">
                ELD Vehicle Subscription
              </h1>

              <h4 class="my-[16px] text-[#757988] font-normal text-[18px] leading-none tracking-tight group-hover:text-white transition-colors duration-300">
                ELD Vehicle Subscription
              </h4>

              <h1 class="text-[#40BF69] group-hover:text-white text-[32px] font-medium pb-[28px] border-b border-[#75798866] group-hover:border-white transition-all duration-300">
                $50
                <span
                    class="ml-[12px] text-[#757988] group-hover:text-white text-[20px] font-light transition-colors duration-300">per month with $192 upfront payment</span>
              </h1>

              <ul class="mt-[32px] mb-[45px] list-disc w-[90%]">
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  ELD Hardware and Software
                </li>
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  HOS, IFTA, DVIR, GPS Tracking & Back Office
                </li>
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  HOS, IFTA, DVIR, GPS Tracking & Back Office
                </li>
              </ul>

              <div class="flex items-center justify-center space-x-4 my-4 w-full">
                <span class="text-[#757988] text-[16px] font-normal group-hover:text-white">No of device:</span>
                <button
                    :disabled="counter == 1"
                    @click="counter--"
                    class="w-[32px] h-[32px] rounded-full group-hover:border-white group-hover:text-white bg-transparent border border-[#BFE3CB] flex items-center justify-center text-[#40BF69]">
                  −
                </button>
                <span class="text-[#757988] group-hover:text-white text-[16px]">{{counter}}</span>
                <button
                    @click="counter++"
                    class="w-[32px] h-[32px] rounded-full group-hover:border-white group-hover:text-white bg-transparent border border-[#BFE3CB] flex items-center justify-center text-[#40BF69] mr-[30px]">
                  +
                </button>
              </div>

              <Button label="Buy now"/>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[80px] flex items-center justify-center">
        <AdvanceButton
            label="Let us help you"
            color="text-[#1D1D1D]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>