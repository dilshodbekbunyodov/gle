<script setup lang="ts">
import weight from '~/assets/images/weight.png'
import speed from '~/assets/images/speed.png'
import warning from '~/assets/images/warning.png'
import report from '~/assets/images/report.png'
import mac from '~/assets/images/mac.png'
import cooming from '~/assets/images/cooming.png'

const data = [
  {
    img: weight,
    title: 'Weight Station Alarm',
    sub: 'Receive timely alerts as your drivers approach weigh stations within a 3-mile radius, our a custom alarm, adjusted to your needs.'
  },
  {
    img: speed,
    title: 'Integrations for Seamless Communication',
    sub: 'Receive timely alerts as your drivers approach weigh stations within a 3-mile radius, our a custom alarm, adjusted to your needs.'
  },
  {
    img: warning,
    title: 'Immediate Violation Warnings',
    sub: 'Prompt alerts with detailed solutions to maintain compliance and safety on and off the road.'
  },
  {
    img: report,
    title: 'Automated Reporting',
    sub: 'Effortlessly generate logbooks, FMCSA, and IFTA reports tailored to any selected dates and hours.'
  },
  {
    img: mac,
    title: 'Real-Time Device Analysis',
    sub: 'Detailed insights and warnings for proactive management in real-time.'
  },
  {
    img: cooming,
    title: 'New Features  Coming Soon!',
    sub: 'Boost your fleet\'s safety with Speed Limit Control, Low Bridge Warnings, Shoulder Stop Control, and Rest Area Alerts.'
  }
]
</script>

<template>
  <div class="my-[120px] md:px-0 px-5">
    <h3 class="text-[#1D1D1D] text-[18px] font-light flex items-center justify-center mb-0">
      <img src="@/assets/images/dot.svg" class="mr-[12px]" alt="dot">
      Advantages
    </h3>

    <h1 class="text-[#1D1D1D] text-[64px] font-medium	text-center mt-[20xp] mb-[80px]">
      What makes <span class="text-[#40BF69]">us different?</span>
    </h1>

    <div class="mx-auto max-w-[1473px]">
      <div class="grid grid-cols-1 md:grid-cols-3">

        <div v-for="(item, index) in data" :key="index" class="relative pt-10 mb-12">
          <div class="group">
            <div class="absolute transition-all overflow-hidden duration-300 top-3 left-0 bg-[#52565A] text-white w-[50px] h-[50px] flex items-center justify-center rounded-full text-xl z-10">
              <div class="h-[50px] w-[50px] bg-[#40BF69] rounded-full absolute -top-20 -left-20 group-hover:top-0 group-hover:left-0 transition-all duration-400"/>
              <img :src="item.img" class="w-[32px] h-[32px] z-30" :alt="item.img">
            </div>
            <div class="border-t border-gray-300 group-hover:border-[#40BF69] transition-all duration-300 pt-[42px]">
              <h3 class="font-semibold text-[#000000] text-[24px] pr-5">{{ item.title }}</h3>
              <p class="text-[20px] group-hover:text-[#40BF69] group-hover:opacity-100 transition-all duration-300 w-[95%] font-normal opacity-50	 text-[#757988] mt-[20px]">
                {{ item.sub }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>