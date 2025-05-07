<script setup>
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { gsap } from 'gsap'
import Button from "~/components/ui/Button.vue"

const modules = [Navigation, Autoplay, Pagination, EffectFade]
const swiperInstance = ref(null)
const counter = ref(1) // Start from 1 instead of 0

const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper
  animateSlide(swiper.slides[swiper.activeIndex])

  swiper.on('slideChangeTransitionStart', () => {
    const currentSlide = swiper.slides[swiper.activeIndex]
    const prevSlide = swiper.slides[swiper.previousIndex]

    animateOutSlide(prevSlide)
    animateSlide(currentSlide)
  })
}

const animateSlide = (slide) => {
  gsap.killTweensOf(slide.querySelectorAll('*'));

  const elements = slide.querySelectorAll('span, h1, h2, img');

  gsap.set(elements, { opacity: 0, y: 30 });

  gsap.to(elements, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.2)'
  });
}

const animateOutSlide = (slide) => {
  const elements = slide.querySelectorAll('span, h1, h2, img');
  gsap.to(elements, {
    opacity: 0,
    duration: 0.5
  });
}
</script>

<template>
  <div class="container my-[127px] mySwiper">
    <Swiper
        :modules="modules"
        @swiper="onSwiperInit"
        :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
        :slides-per-view="1"
        :effect="'fade'"
        :fadeEffect="{ crossFade: true }"
        :speed="1000"
        :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
        :pagination="{
        clickable: true,
        el: '.swiper-pagination',
      }"
    >
      <SwiperSlide v-for="(item, index) in 5" :key="index">
        <div class="p-8 flex flex-col items-center justify-center relative">
          <div class="mb-2">
            <span class="text-[40px] font-medium text-green-500 py-[6px] px-[14px] rounded-full border border-green-500">
              13{{ index }}$
            </span>
          </div>

          <div class="text-center mb-2">
            <h1 class="font-medium text-[128px] leading-none tracking-[-4px] text-center">
              PT3{{ index }} ELD
            </h1>
            <h2 class="font-inter font-medium text-[128px] leading-none tracking-[-4px] text-center [leading-trim:cap_height] text-[#40BF69]">
              Device
            </h2>
          </div>

          <div class="max-w-xs">
            <img
                src="@/assets/images/pt3.png"
                alt="PT30 ELD Device"
                class="w-full transform scale-180"
            >
          </div>
        </div>
      </SwiperSlide>

      <div class="swiper-button-prev">
        <img src="@/assets/images/nextPrev.png" class="rotate-180" alt="prev">
      </div>
      <div class="swiper-button-next">
        <img src="@/assets/images/nextPrev.png" alt="next">
      </div>

      <div class="flex items-center justify-center mt-10">
        <div class="swiper-pagination"/>
      </div>
    </Swiper>

    <div class="mt-10 z-50">
      <div class="flex items-center justify-center space-x-4 mt-4 w-full">
        <span class="text-[#757988] text-[20px] font-normal">No of device:</span>
        <button
            :disabled="counter == 1"
            @click="counter--"
            class="w-[36px] h-[36px] rounded-full bg-white border border-[#BFE3CB] flex items-center justify-center text-[#40BF69]"
        >
          −
        </button>
        <span class="text-[#757988] text-[20px]">{{counter}}</span>
        <button
            @click="counter++"
            class="w-[36px] h-[36px] rounded-full bg-white border border-[#BFE3CB] flex items-center justify-center text-[#40BF69] mr-[30px]"
        >
          +
        </button>

        <Button label="Buy now"/>
      </div>
    </div>
  </div>
</template>

<style>
.mySwiper .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
  content: '';
}

.mySwiper .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
  content: '';
}

.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  position: absolute;
  top: 50%;
  width: 70px;
  height: auto;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mySwiper .swiper-button-prev:hover,
.mySwiper .swiper-button-next:hover {
  transform: scale(1.1);
}

.mySwiper .swiper-button-prev {
  left: 10px;
}

.mySwiper .swiper-button-next {
  right: 10px;
}

.mySwiper .swiper-pagination {
  position: relative;
  margin-top: 40px;
  text-align: center;
  @apply border border-[#B5B8C3] rounded-full px-[20px] w-auto py-[8px] inline-block m-auto;
}

.mySwiper .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background: #B5B8C3;
  opacity: 1;
  margin: 0 4px;
  transition: all 0.3s ease;
}

.mySwiper .swiper-pagination-bullet-active {
  background-color: #40BF69 !important;
}

.swiper-slide img {
  position: relative;
  z-index: 1;
}
</style>