<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Works', path: '/works' },
  { title: 'Studio', path: '/studio' },
  { title: 'News', path: '/news' },
  { title: 'Contact', path: '/contact' },
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <div class=" flex flex-col items-center justify-between bg-white text-black px-4 pt-20 pb-10">
    <div v-if="route.name !== 'contact'" class="text-center group">
      <h1 class="text-[48px] md:text-[100px] font-semibold">
        LET'S MAKE <span class="inline-block relative">
      <span class="absolute -top-[60px] group-hover:-top-30 group-hover:-right-[180px] group-hover:scale-3d group-hover:text-[30px] -right-[40px] bg-[#40BF69] text-white text-[10px] rounded-full w-[62px] h-[62px] md:flex items-center justify-center leading-none transition-all duration-300 group-hover:w-[180px] hidden group-hover:h-[180px]">
       CONTACT<br>US
      </span>
    </span>
      </h1>
      <h1 class="text-[48px] md:text-[100px] font-semibold">SOMETHING GREAT!</h1>
    </div>

    <div class="container">
      <div class="flex flex-col md:flex-row items-center justify-between gap-10 mt-16">
        <NuxtLink to="#" class="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="../../assets/images/logo.svg" alt="Logo" >
        </NuxtLink>

        <div class="text-center md:text-left">
          <p class="text-[12px] font-normal	 text-[#A4A4A4] mb-[12px]">LOCATION</p>
          <p class="text-[16px] font-normal	 text-[#A4A4A4]">152 Thatcher Road St, Mahattan, NY<br>10463, US</p>
        </div>

        <div class="text-center md:text-left">
          <p class="text-[12px] font-normal	 text-[#A4A4A4] mb-[12px]">Inquiry</p>
          <p class="text-[16px] font-normal	 text-[#A4A4A4]">hello@hubfolio.agency<br>+0685689696</p>
        </div>
      </div>
    </div>

    <div class="flex space-x-2 mt-[51px]">
      <div class="w-10 h-10 rounded-full border border-[#1D1D1D1A] flex items-center justify-center hover:bg-gray-100 cursor-pointer">IG</div>
      <div class="w-10 h-10 rounded-full border border-[#1D1D1D1A] flex items-center justify-center hover:bg-gray-100 cursor-pointer">X</div>
      <div class="w-10 h-10 rounded-full border border-[#1D1D1D1A] flex items-center justify-center hover:bg-gray-100 cursor-pointer">Bē</div>
      <div class="w-10 h-10 rounded-full border border-[#1D1D1D1A] flex items-center justify-center hover:bg-gray-100 cursor-pointer">GH</div>
    </div>

    <div class="container">
      <div class="border-t border-t-[#1D1D1D26] mt-16 pt-12 mb-10 flex flex-col md:flex-row items-center justify-between text-sm text-[#A4A4A4] gap-6">
        <p class="text-center md:text-left">
          © 2024 <span class="font-normal text-[#1D1D1D]">Hubfolio Agency</span>. All Rights Reserved
        </p>

        <div class="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-2">
          <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="font-medium transition"
              :class="{
              'text-black': isActive(item.path),
              'text-gray-500 hover:text-black': !isActive(item.path),
            }"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

</template>

