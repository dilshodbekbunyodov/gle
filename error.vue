<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

defineProps({
  error: Object,
})

definePageMeta({
  layout: 'default',
})

const handleError = () => clearError({redirect: '/'})

</script>

<template>
  <NuxtLayout>
    <div v-if="error?.statusCode === 404">
      <div class="flex flex-col items-center justify-center pt-[200px]">
        <svg width="588" height="318" viewBox="0 0 588 318" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_543_1574" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="16" y="40" width="557"
                height="240">
            <path
                d="M16.5296 232.088V198.775L114.662 43.7273H142.442V91.1562H125.503L59.4415 195.839V197.646H196.421V232.088H16.5296ZM126.858 275V221.925L127.31 207.018V43.7273H166.834V275H126.858ZM293.986 279.404C275.391 279.404 259.43 274.699 246.105 265.288C232.855 255.803 222.654 242.138 215.502 224.296C208.426 206.379 204.887 184.81 204.887 159.589C204.962 134.369 208.538 112.913 215.615 95.2216C222.767 77.4545 232.968 63.9034 246.218 54.5682C259.543 45.2329 275.466 40.5653 293.986 40.5653C312.506 40.5653 328.428 45.2329 341.754 54.5682C355.079 63.9034 365.28 77.4545 372.357 95.2216C379.509 112.989 383.085 134.445 383.085 159.589C383.085 184.885 379.509 206.491 372.357 224.409C365.28 242.251 355.079 255.878 341.754 265.288C328.504 274.699 312.581 279.404 293.986 279.404ZM293.986 244.058C308.44 244.058 319.846 236.944 328.203 222.715C336.634 208.411 340.85 187.369 340.85 159.589C340.85 141.22 338.93 125.787 335.091 113.29C331.252 100.793 325.831 91.3821 318.83 85.0582C311.828 78.6591 303.547 75.4595 293.986 75.4595C279.607 75.4595 268.239 82.6115 259.882 96.9155C251.526 111.144 247.31 132.036 247.234 159.589C247.159 178.034 249.004 193.543 252.768 206.115C256.607 218.687 262.028 228.173 269.029 234.572C276.031 240.896 284.35 244.058 293.986 244.058ZM392.426 232.088V198.775L490.559 43.7273H518.339V91.1562H501.4L435.338 195.839V197.646H572.317V232.088H392.426ZM502.755 275V221.925L503.207 207.018V43.7273H542.731V275H502.755Z"
                fill="#1D1D1D"/>
          </mask>
          <g mask="url(#mask0_543_1574)">
            <circle cx="-206.672" cy="88.3273" r="608.263" transform="rotate(-0.336469 -206.672 88.3273)"
                    fill="url(#paint0_linear_543_1574)" stroke="url(#paint1_linear_543_1574)"/>
            <circle cx="250.216" cy="230.625" r="608.263" transform="rotate(-0.336469 250.216 230.625)"
                    fill="url(#paint2_linear_543_1574)" stroke="url(#paint3_radial_543_1574)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_543_1574" x1="-206.672" y1="-520.436" x2="-206.672" y2="697.091"
                            gradientUnits="userSpaceOnUse">
              <stop stop-color="#40BF69" stop-opacity="0.56"/>
              <stop offset="1" stop-color="#40BF69" stop-opacity="0.2"/>
            </linearGradient>
            <linearGradient id="paint1_linear_543_1574" x1="430.946" y1="27.8029" x2="-979.415" y2="340.278"
                            gradientUnits="userSpaceOnUse">
              <stop stop-color="#40BF69"/>
              <stop offset="1" stop-color="#40BF69" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_543_1574" x1="250.216" y1="-378.138" x2="250.216" y2="839.389"
                            gradientUnits="userSpaceOnUse">
              <stop stop-color="#40BF69" stop-opacity="0.6"/>
              <stop offset="1" stop-color="#40BF69" stop-opacity="0.2"/>
            </linearGradient>
            <radialGradient id="paint3_radial_543_1574" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(250.216 230.625) rotate(89.968) scale(1261.16)">
              <stop offset="0.046875" stop-color="#40BF69" stop-opacity="0"/>
              <stop offset="1" stop-color="#40BF69"/>
            </radialGradient>
          </defs>
        </svg>

        <h2 class="text-[#1D1D1D] font-inter font-medium text-[36px] leading-[100%] text-center uppercase">
          PAGE NOT FOUND
        </h2>

        <div class="mt-[32px]">
          <Button label="Back to homepage" @click="handleError"/>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>