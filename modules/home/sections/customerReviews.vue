<script setup lang="ts">
import {Navigation, Autoplay} from 'swiper/modules'

const modules = ref([Navigation, Autoplay])
const activeIndex = ref<number | string>(1)

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}
</script>

<template>
  <div class="container m-auto py-[120px]">
    <h3 class="text-[#1D1D1D] text-[18px] font-light flex items-center md:justify-normal justify-center">
      <img src="@/assets/images/dot.svg" class='mr-[12px]' alt="dot icon" >
      Customer Reviews
    </h3>

    <div class="grid md:grid-cols-2 grid-cols-1 items-start">
      <div class="relative w-[300px] h-[300px] md:m-0 m-auto">
        <div class="flex items-center justify-center">
          <svg viewBox="0 0 500 500">
            <defs>
              <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(1,150,250)" />
            </defs>
            <g class="textcircle">
              <text textLength="0">
                <textPath xlink:href="#textcircle" textLength="940">
                  TRUSTED BY CLIENTS - TESTIMINIAL -
                </textPath>
              </text>
            </g>
          </svg>
        </div>

        <img src="@/assets/images/comma.svg" class="w-[100px] h-[76px] absolute top-[114px] right-[95px]" alt="comma">
      </div>


      <div class="md:px-0 px-5">
        <Swiper
            :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
            :slides-per-view="1"
            :breakpoints="{
                    320: {
                        slidesPerView: 1,
                    },
                }"
            :modules="modules"
            @slide-change="onSlideChange"
        >

          <SwiperSlide
              v-for="(item,  index) in 5"
              :key="index"
          >
            <h5 class="md:text-[36px] md:text-left text-center text-[25px] font-medium text-[#1D1D1D] leading-tight tracking-tight">
              “GREEN Light ELD ability to create a high quality UIs stands out. It’s something we place a premium on.
              A studio with passionate, professional, fun and full creativity. Recommend!!”
            </h5>

            <div class="flex items-center justify-between border-t border-[#B5B8C3] mt-[40px]">
              <div class="flex items-center gap-4 mt-6">
                <img
                    src="@/assets/images/handleImage.png"
                    alt="Bradley Gordon"
                    class="w-12 h-12 rounded-full object-cover"
                >
                <div>
                  <p class="text-lg font-medium text-[#1D1D1D]">Bradley Gordon</p>
                  <p class="text-sm text-[#BBBBBB]">CEO & Founder, Archin Studio</p>
                </div>
              </div>

              <div class="flex gap-2 mt-6 border border-[#B5B8C3] rounded-[30px] p-[12px]">
                   <span
                       v-for="(indexDot) in 5"
                       :key="indexDot + 1"
                       class="w-3 h-3 rounded-full transition-colors duration-300"
                       :class="{
                        'bg-[#40BF69]': activeIndex === indexDot,
                        'bg-gray-300': activeIndex !== indexDot
                      }"
                   />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </div>
</template>

<style scoped>
text {
  animation: rotate 25s linear infinite;
  transform-origin: 250px 250px;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.textcircle {
  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  transform-origin: 250px 250px;
}

</style>

