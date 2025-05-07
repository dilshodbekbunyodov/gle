<script setup lang="ts">

import AdvanceButton from "~/components/ui/AdvanceButton.vue";
import Button from "~/components/ui/Button.vue";

const router = useRouter()
</script>

<template>
  <div class="bg-[#F5F5F5] w-[98%] rounded-[30px] m-auto">
    <div class="container py-[60px]">
      <div class="md:flex items-start md:justify-between justify-center mb-[60px] md:px-0 px-5">
        <h4 class="md:text-[64px] text-[20px] md:text-left text-center leading-none text-[#1D1D1D] font-medium">
          Choose <br><span class='text-[#40BF69]'>Your Plan</span>
        </h4>

        <h3 class="text-[#1D1D1D] text-[18px] font-light flex items-center justify-center mb-0">
          <img src="@/assets/images/dot.svg" class="mr-[12px]" alt="dot">
          Enjoy Your 1 Week Free Trial
        </h3>
      </div>

      <div class="grid md:grid-cols-3 grid-cols-1 gap-5 md:px-0 px-5">
        <div
            v-for="(item, index) in 3"
            :key="index"
        >
          <div
              class="group bg-white rounded-[26px] border border-[#75798833] relative overflow-hidden transition-all duration-300 hover:z-10">
            <div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute inset-0 opacity-50 bg-[#80d49b]"/>
              <div
                  class="inset-0 custom-gradient border-2 border-[#49c270] rounded-full absolute group-hover:-left-[100%] -left-[200%] -top-[60px] w-[800px] h-[800px] transition-all duration-400"/>
            </div>

            <div class="relative z-10 py-[40px] px-[79px]  transition-all duration-300">
            <span
                class="text-[#40BF69] group-hover:text-white text-[12px] font-bold py-[4px] px-[13px] border border-[#40BF69] group-hover:border-white rounded-full leading-none tracking-wider uppercase transition-colors duration-300">
        POPULAR
      </span>

              <h1 class="font-[500] text-4xl leading-none tracking-tighter mb-0 mt-[16px] group-hover:text-white group-hover:text-[48px] transition-all duration-400">
                150 Trucks
              </h1>

              <h4 class="my-[16px] font-inter font-normal text-lg leading-none tracking-tight group-hover:text-white transition-colors duration-300">
                Launch your business
              </h4>

              <h1 class="text-[#40BF69] group-hover:text-white text-[32px] font-medium pb-[28px] border-b border-[#75798866] group-hover:border-white transition-all duration-300">
                $50
                <span
                    class="ml-[12px] text-[#757988] group-hover:text-white text-[20px] font-light transition-colors duration-300">per month</span>
              </h1>

              <ul class="mt-[32px] mb-[45px] list-disc">
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  Weight Station Alerts
                </li>
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  Instant Violation Warnings
                </li>
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  Automated Reporting
                </li>
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  Real-Time Device Analysis
                </li>
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  24/7 Online Support
                </li>
                <li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300">
                  Implementation Assistance
                </li>
              </ul>

              <AdvanceButton
                  label="Lets start now"
                  color="text-[#1D1D1D]"
                  @click="router.push('/newAccount')"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[80px] text-center">
        <Button label="Leave a request" @click="router.push('/contact')"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>