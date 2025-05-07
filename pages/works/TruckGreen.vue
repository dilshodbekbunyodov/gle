<script setup lang="ts">
import {ref} from 'vue';

const moved = ref(false);

const changePlaceTruck = () => {
  moved.value = !moved.value;
};

const {$gsap} = useNuxtApp();
const boxRef = useTemplateRef('box')

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '#truck-img',
      start: 'top 200px',
      end: 'center 200px',
      scrub: 3,
    }
  });

  tl.to(boxRef.value, {
    x: '-20%',
    duration: 20,
    ease: 'power2.in',
  })
      .to(boxRef.value, {
        x: '-120%',
        duration: 20,
        ease: 'expo.out',
      });
})

</script>

<template>
  <div
      class="h-screen custom-gradient cursor-pointer overflow-hidden flex items-center justify-between px-8 py-18 rounded-[30px] group w-[99%] m-auto my-[120px] relative"
      @click="changePlaceTruck">

    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[#bee5ca]"/>
      <div
          class="inset-0 custom-gradient border-2 border-[#49c270] rounded-full absolute -left-[45%] -top-[255px] w-[2810px] h-[2823px] transition-all  delay-300 duration-1500 ease-in-out"
          :class="moved && '-left-[48%]'"
      />
    </div>

    <div class="z-10 text-left w-full flex justify-end mx-auto">
      <div
          class="mt-[70px] mb-[60px] lg:w-8/12 transition-all duration-1500 ease-in-out delay-300 flex flex-col items-start justify-center text-left"
          :class="moved && 'pl-10 lg:w-10/12'">
        <h1 class="text-white text-[32px] md:text-[48px] font-medium leading-10">
          We will provide you with everything
          <span class="text-white/60 md:text-[40px] font-medium">you need</span>
        </h1>
        <h2 class="text-white/60 text-[28px] md:text-[40px] font-medium mt-2">
          for a safe ride of your truck.
        </h2>
      </div>
    </div>

    <img id="truck-img" class="absolute scale-[1.3] z-10 translate-x-[70%]" ref="box" src="~/assets/images/truck.png"
         alt="truck">


    <!--    <img-->
    <!--        src="@/assets/images/truck.png"-->
    <!--        alt="truck"-->
    <!--        class="absolute transition-all delay-300 duration-1500 ease-in-out scale-[1.3] z-10"-->
    <!--        :class="moved ? 'transform -translate-x-[110%]' : 'transform translate-x-[60%]'"-->
    <!--    >-->
  </div>
</template>

