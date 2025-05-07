<script setup lang="ts">
import {onMounted} from 'vue'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const sections = gsap.utils.toArray<HTMLElement>('.page-section')

  sections.forEach((section, index) => {
    const animProps: gsap.TweenVars = {
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }

    if (index % 3 === 0) {
      animProps.y = 50
    } else if (index % 3 === 1) {
      animProps.x = -50
    } else {
      animProps.scale = 0.95
    }

    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      ...animProps
    })

    if (index % 2 === 0) {
      gsap.to(section.querySelectorAll('.float-element'), {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }
  })

  gsap.from('.first-section-after-banner', {
    scrollTrigger: {
      trigger: '.first-section-after-banner',
      start: 'top 80%'
    },
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: 'elastic.out(1, 0.5)'
  })
})
</script>

<template>
  <div>
    <HomeSectionBanner class="banner-section"/>

    <!-- eld device -->
    <HomeSectionBuyNow class="page-section"/>

    <!-- What makes us different? -->
    <HomeSectionMakeUs class="page-section">
      <!-- Add this to elements you want to float in this section -->
      <div class="float-element"/>
    </HomeSectionMakeUs>

    <!-- Choose Your Plan -->
    <HomeSectionChoosePlan class="page-section"/>

    <!-- Customer Reviews -->
    <HomeSectionCustomerReviews class="page-section">
      <!-- Floating elements for reviews -->
      <div class="float-element"/>
    </HomeSectionCustomerReviews>

    <!-- Efficiency boosted on all devices -->
    <HomeSectionDownloadApp class="page-section"/>
  </div>
</template>

<style>
.banner-section {
  transform-origin: center center;
  will-change: transform, opacity;
}

.page-section {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  will-change: transform, opacity;
}

.float-element {
  will-change: transform;
}
</style>