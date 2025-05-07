<script setup lang="ts">
import { gsap } from 'gsap'
const {$scrollSmoother} = useNuxtApp();


if (import.meta.client)
  $scrollSmoother.create({
    smooth: 3,
    effects: true,
    normalizeScroll: true
  });

const showButton = ref(false)

const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: 'power2.inOut'
  })
}

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Clean up the event listener when component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <Header/>

      <slot/>

      <Footer/>
    </div>

    <Cursor/>

    <button
        v-show="showButton"
        aria-label="Back to top"
        class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-primary-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
        @click="scrollToTop"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </div>
</template>

<style>

</style>