<template>
  <div class="custom-cursor" ref="cursor">
    <div class="cursor-inner"></div>
    <div class="cursor-outer"></div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
const cursor = ref<HTMLElement | null>(null)
const cursorInner = ref<HTMLElement | null>(null)
const cursorOuter = ref<HTMLElement | null>(null)

let isInteractive = false

onMounted(() => {
  if (!import.meta.client) return

  // Initialize cursor position
  $gsap.set(cursor.value, { xPercent: -50, yPercent: -50 })

  // Follow mouse movement
  window.addEventListener('mousemove', moveCursor)

  // Hover effects
  setupHoverEffects()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
})

function moveCursor(e: MouseEvent) {
  if (!cursor.value) return

  $gsap.to(cursor.value, {
    x: e.clientX,
    y: e.clientY,
    duration: isInteractive ? 0.2 : 0.6,
    ease: isInteractive ? "power2.out" : "power1.out"
  })
}

function setupHoverEffects() {
  // Interactive elements (buttons, links, etc.)
  const interactiveElements = document.querySelectorAll('a, button, .interactive')

  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      isInteractive = true
      $gsap.to(cursorInner.value, { scale: 0.4, duration: 0.3 })
      $gsap.to(cursorOuter.value, { scale: 1.4, duration: 0.3 })
    })

    el.addEventListener('mouseleave', () => {
      isInteractive = false
      $gsap.to(cursorInner.value, { scale: 1, duration: 0.3 })
      $gsap.to(cursorOuter.value, { scale: 1, duration: 0.3 })
    })
  })
}
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;
}

.cursor-inner {
  width: 6px;
  height: 6px;
  background: #40BF69;
  border-radius: 50%;
  transform: scale(1);
  will-change: transform;
}

.cursor-outer {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 22px;
  height: 22px;
  border: 2px solid #40BF69;
  border-radius: 50%;
  transform: scale(1);
  will-change: transform;
  opacity: 0.7;
}

/* Hide cursor on touch devices */
@media (pointer: coarse) {
  .custom-cursor {
    display: none;
  }
}
</style>