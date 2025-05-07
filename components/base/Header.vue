<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { XMarkIcon } from '@heroicons/vue/24/outline'


import whiteLogo from '@/assets/images/logoWhite.svg'
import logo from '@/assets/images/logo.svg'
import arrowUp from '@/assets/images/arrowUp.svg'
import arrowUpWhite from '@/assets/images/arrowUp2.svg'
import menu from '@/assets/images/menu.svg'
import menuWhite from '@/assets/images/menu2.svg'

const route = useRoute()
const router = useRouter()

const NAV_ITEMS = [
  { title: 'Home', link: '/' },
  { title: 'Studio', link: '/studio' },
  { title: 'Works', link: '/works' },
  { title: 'News', link: '/news' },
  { title: 'Contact', link: '/contact' },
]

const isHomePage = computed(() => route.path === '/')
const isMobileMenuOpen = ref(false)
const isMenuVisible = ref(false)
const hoveredIndex = ref<number | null>(null)

watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})

const isActive = (itemLink: string) => {
  return itemLink === '/' ? route.path === '/' : route.path.startsWith(itemLink)
}

const rightContent = ref<HTMLElement | null>(null)
const openMenuTimeline = ref<gsap.core.Timeline | null>(null)
const closeButton = ref<HTMLElement | null>(null)
const navItemsRaw = ref<HTMLElement []>([])
const navItems = navItemsRaw


const menuPanel = ref<HTMLElement | null>(null)

watch(isMobileMenuOpen, async (val) => {
  if (val) {
    isMenuVisible.value = true
    await nextTick()

    gsap.set(menuPanel.value, { x: '-100%' })
    gsap.set(navItems.value, { y: 100, opacity: 0 })
    gsap.set(rightContent.value, { y: -100, opacity: 0 })
    gsap.set(closeButton.value, { y: -30, opacity: 0 })

    const tl = gsap.timeline({
      onReverseComplete: () => {
        isMenuVisible.value = false
      }
    })

    openMenuTimeline.value = tl

    tl.to(menuPanel.value, {
      x: 0,
      duration: 1.2,
      ease: 'power4.out'
    })

    tl.to(navItems.value, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.6')

    tl.to(rightContent.value, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.1')

    tl.to(closeButton.value, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power4.out'
    }, '-=0.4')

  } else {
    openMenuTimeline.value?.reverse()
  }
})

</script>

<template>
  <header class="w-full absolute top-0 left-0 z-20 transition-all duration-300">
    <div class="container mx-auto px-4 py-4 md:py-6 xl:py-10">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="z-30">
          <img :src="isHomePage ? whiteLogo : logo" alt="Company Logo" class="h-8 md:h-10" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center">
          <div
              class="ml-6 lg:ml-12 border rounded-full p-1 flex gap-1 lg:gap-2"
              :class="isHomePage ? 'border-[#FFFFFF4D]' : 'border-[#1D1D1D4D]'"
          >
            <NuxtLink
                v-for="(item, index) in NAV_ITEMS"
                :key="index"
                :to="item.link"
                class="py-2 px-3 lg:py-[6px] lg:px-[20px] rounded-full text-sm transition"
                :class="[
                isActive(item.link)
                  ? (isHomePage ? 'bg-[#FFFFFF1A]' : 'bg-[#1D1D1D1A]')
                  : 'hover:bg-[#FFFFFF1A]',
                isActive(item.link)
                  ? (isHomePage ? 'text-white' : 'text-black')
                  : (isHomePage ? 'text-white' : 'text-[#1D1D1D]')
              ]"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </nav>

        <!-- Desktop Buttons -->
        <div class="flex items-center gap-2 lg:gap-4">
          <button
              class="font-semibold text-sm px-4 py-2 lg:px-5 lg:py-2.5 rounded-[30px] flex items-center transition"
              :class="isHomePage ? 'bg-white text-[#40BF69]' : 'bg-[#40BF69] text-white'"
              @click="router.push('/contact')"
          >
            Start Project
            <img :src="isHomePage ? arrowUp : arrowUpWhite" class="ml-2 w-3 h-3" alt="Arrow up" />
          </button>

          <button class="p-2" @click="isMobileMenuOpen = true">
            <img :src="isHomePage ? menu : menuWhite" class="w-5 h-5" alt="Menu" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav
        v-show="isMenuVisible"
        class="fixed top-0 left-0 w-full h-screen z-40 inset-0 overflow-hidden"
    >
      <button
          ref="closeButton"
          class="close-button h-[35px] w-[35px] md:top-10 md:right-25 absolute top-5 right-5 rounded-full border border-white text-white font-medium z-50 flex items-center justify-center"
          @click="isMobileMenuOpen = false"
      >
        <XMarkIcon class="w-5 h-5" />
      </button>


      <div
          ref="menuPanel"
          class="w-full h-full grid md:grid-cols-10"
      >
        <!-- left side -->
        <div class="md:col-span-6 flex flex-col justify-center items-center bg-[#81BE94]">
          <ul>
            <li
                v-for="(item, index) in NAV_ITEMS"
                :key="index"
                :ref="el => navItemsRaw[index] = el"
                class="text-5xl font-bold py-2 px-6 rounded-full text-white mb-2 transition-opacity duration-300"
                :class="{
            'opacity-100': hoveredIndex === null || hoveredIndex === index,
            'opacity-30': hoveredIndex !== null && hoveredIndex !== index
          }"
                @mouseover="hoveredIndex = index"
                @mouseleave="hoveredIndex = null"
            >
              <NuxtLink :to="item.link" class="w-full flex items-center justify-between">
                <span>{{ item.title }}</span>
                <span class="ml-30 font-normal">+</span>
              </NuxtLink>
            </li>

          </ul>
        </div>

        <!-- right side -->
        <div
            class="md:col-span-4 hidden md:flex flex-col justify-center items-center bg-[#B4E6C4] relative"
        >

          <div class="text-center md:text-left mt-5" ref="rightContent">
            <img src="@/assets/images/logoWhite.svg" class="w-[200px]" alt="logo" />
            <p class="text-[25px] text-[#fff] font-medium">
              541 Melville Geek,<br />
              Palo Alto, CA 94301
            </p>
            <p class="text-[25px] text-[#fff] font-medium mt-[10px]">
              hello@hubfolio.agency
            </p>
            <p class="text-[25px] text-[#fff] font-medium mt-[10px] underline">
              +1 840 841 25 69
            </p>
          </div>
        </div>
      </div>
    </nav>

  </header>
</template>

