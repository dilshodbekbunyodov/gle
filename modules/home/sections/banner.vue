<script setup lang="ts">
import AdvanceButton from '~/components/ui/AdvanceButton.vue'
import backgroundImage from '~/assets/images/banner.png'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

defineOptions({
  name: 'HomeBanner'
})

const data = [
  { title: 'Experience', count: 16, date: 'Years' },
  { title: 'Work Across', count: 17, date: 'Countries' },
  { title: 'Over', count: 80, date: 'Project' }
]

const handleClick = () => {
  alert('Button clicked!')
}

onMounted(() => {
  // Initial banner animation
  const tl = gsap.timeline()

  // Set initial states
  tl.set('.banner-content', {
    scale: 0.8,
    transformOrigin: 'center center'
  })

  tl.set('.wave-overlay', {
    opacity: 1
  })

  // Set initial window size
  const windowHeight = 500
  const windowWidth = 300
  const vh = window.innerHeight
  const vw = window.innerWidth

  // Calculate initial overlay positions
  tl.set('.white-overlay-top', {
    height: (vh - windowHeight) / 2,
  })
  tl.set('.white-overlay-bottom', {
    height: (vh - windowHeight) / 2,
  })
  tl.set('.white-overlay-left', {
    width: (vw - windowWidth) / 2,
  })
  tl.set('.white-overlay-right', {
    width: (vw - windowWidth) / 2,
  })

  const mainDuration = 1.5

  // Create wave effect timeline
  const waveTl = gsap.timeline({
    repeat: 1
  })

  // Wave animation sequence
  waveTl.to('.banner-content', {
    scaleY: 1.03,
    duration: 0.3,
    ease: 'sine.inOut'
  })
  .to('.banner-content', {
    scaleY: 1,
    duration: 0.3,
    ease: 'sine.inOut'
  })

  // Main animation sequence
  tl.add(waveTl, 0)

  tl.to('.banner-content', {
    scale: 1,
    duration: mainDuration,
    ease: 'power2.inOut'
  }, '<')

  tl.to(['.white-overlay-top', '.white-overlay-bottom'], {
    height: 0,
    duration: mainDuration,
    ease: 'power2.inOut'
  }, '<')

  tl.to(['.white-overlay-left', '.white-overlay-right'], {
    width: 0,
    duration: mainDuration,
    ease: 'power2.inOut'
  }, '<')

  tl.to(['.banner-title', '.banner-subtitle'], {
    y: 0,
    duration: mainDuration + 0.5,
    ease: 'expo.inOut',
  }, '-=1.4')

  // Fade out wave overlay
  tl.to('.wave-overlay', {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.inOut'
  }, `-=${mainDuration - 0.3}`)
})
</script>

<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section
      class="relative flex h-screen items-center bg-cover bg-center bg-no-repeat px-6 py-10 md:px-12 transition-all duration-300"
      :style="`background-image: url(${backgroundImage})`"
    >
      <!-- Wave Overlay -->
      <div class="wave-overlay absolute w-full h-full inset-0 z-40 pointer-events-none transform-gpu overflow-hidden">
        <div class="third-wave" />
      </div>

      <!-- Content Window Container -->
      <div class="content-window absolute inset-0 z-50">
        <!-- Top Overlay -->
        <div class="white-overlay-top absolute top-0 left-0 right-0 bg-white"/>
        <!-- Bottom Overlay -->
        <div class="white-overlay-bottom absolute bottom-0 left-0 right-0 bg-white"/>
        <!-- Left Overlay -->
        <div class="white-overlay-left absolute top-0 bottom-0 left-0 bg-white"/>
        <!-- Right Overlay -->
        <div class="white-overlay-right absolute top-0 bottom-0 right-0 bg-white"/>
      </div>

      <div class="container mx-auto mt-auto z-10 text-white banner-content">
        <div class="max-w-6xl">
          <!-- Title wrapper -->
          <div class="overflow-hidden mb-6">
            <h1 class="text-[40px] md:text-[60px] lg:text-[80px] font-medium leading-tight banner-title transform-gpu">
              Green Light ELD: The Best Solution for Fleets of All Sizes
            </h1>
          </div>

          <!-- Subtitle wrapper -->
          <div class="overflow-hidden mb-6">
            <h4 class="text-[18px] md:text-[20px] lg:text-[24px] font-normal max-w-2xl banner-subtitle transform-gpu">
              Simplify compliance, boost efficiency, and scale effortlessly — whether you're managing a small or large
              fleet.
            </h4>
          </div>

          <!-- Button wrapper -->
          <div class="overflow-hidden">
            <div class="banner-button transform-gpu ">
              <AdvanceButton label="Get yours now" @click="handleClick" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="container mx-auto px-6 md:px-12">
      <div class="flex justify-end">
        <div class="w-full lg:w-12/12 mt-20 mb-14">
          <h4 class="text-[#1D1D1D] text-[18px] md:text-left text-center md:text-[24px] lg:text-[28px] font-medium mb-14 leading-relaxed">
            Our platform offers a comprehensive suite of tools crafted for trucking companies and owner-operators.
            Effortlessly manage ELD hours, streamline communication, and simplify reporting—all within an intuitive,
            user-friendly interface.
          </h4>

          <div class="flex flex-wrap gap-y-10">
            <div v-for="(item, index) in data" :key="index" class="w-full sm:w-6/12 md:w-4/12">
              <div class="relative pl-16">
                <span class="block text-[14px] md:text-[16px] text-[#757988] font-normal mb-2">
                  {{ item.title }}
                </span>
                <div class="flex items-end">
                  <h2 class="text-[#40BF69] text-[60px] md:text-[80px] lg:text-[100px] font-medium">
                    {{ item.count }}
                  </h2>
                  <span class="ml-2 text-[#757988] text-[14px] md:text-[16px] font-normal">
                    {{ item.date }}
                  </span>
                </div>
                <!-- Decorative lines -->
                <div class="absolute top-[10px] left-0 w-10 border-b border-[#B5B8C3]"/>
                <div class="absolute top-[10px] left-0 bottom-0 border-l border-[#B5B8C3]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
}

.content-window {
  transform-origin: center center;
  z-index: 50;
}

.white-overlay-top,
.white-overlay-bottom,
.white-overlay-left,
.white-overlay-right {
  transform-origin: center center;
  background: white;
}

.banner-content {
  position: relative;
  z-index: 40;
}

.banner-title,
.banner-subtitle {
  transform: translateY(100%);
  will-change: transform;
}

.wave-overlay {
  background: rgba(255, 255, 255, 0.05);
  will-change: transform, opacity;
  pointer-events: none;
  overflow: hidden;
  z-index: 45;
  opacity: 0;
}

/* First wave */
.wave-overlay::before {
  position: absolute;
  top: 0;
  left: -20%;
  right: -20%;
  bottom: 0;
  content: '';
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 65%,
    transparent 100%
  );
  transform: translateX(100%);
  animation: shimmerWave 1s linear infinite;
}

/* Second wave */
.wave-overlay::after {
  position: absolute;
  top: 0;
  left: -20%;
  right: -20%;
  bottom: 0;
  content: '';
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 65%,
    transparent 100%
  );
  transform: translateX(100%);
  animation: shimmerWave 1s linear infinite;
  animation-delay: 0.2s;
}

/* Third wave */
.wave-overlay .third-wave {
  position: absolute;
  top: 0;
  left: -20%;
  right: -20%;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0) 35%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 65%,
    transparent 100%
  );
  transform: translateX(100%);
  animation: shimmerWave 1s linear infinite;
  animation-delay: 0.4s;
}

@keyframes shimmerWave {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
