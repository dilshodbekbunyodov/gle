<script setup lang="ts">

</script>

<template>
  <div class="custom-gradient overflow-hidden flex items-center justify-between px-8 py-18 rounded-[30px] group w-[99%] m-auto my-[120px] relative">

    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[#bee5ca]"/>
      <div class="inset-0 custom-gradient border-2 border-[#49c270] rounded-full absolute -left-[45%] -top-[255px] w-[2810px] h-[2823px] group-hover:-left-[46%] transition-all duration-400"/>
    </div>

    <div class="container mx-auto md:flex items-center justify-between relative z-10 md:px-0 px-5">

      <div class="flex flex-col gap-8">
        <div class="md:text-left text-center">
          <h4 class="text-white font-semibold md:text-[64px] text-[34px] md:tracking-[-3px] leading-none mb-0">Efficiency boosted</h4>
          <h4 class="text-white/60 font-semibold md:text-[64px] text-[34px] tracking-[-3px] leading-none">on all devices</h4>
        </div>

        <div class="flex items-center md:justify-normal justify-center gap-4">
          <NuxtLink to="/">
            <img src="@/assets/images/Appld.png" alt="App Store">
          </NuxtLink>

          <NuxtLink to="/">
            <img src="@/assets/images/google2.png" class="w-[130px] h-[40px]" alt="Google Play">
          </NuxtLink>
        </div>
      </div>

      <div class="group relative">
        <img
            src="@/assets/images/handleImage.png"
            alt="Tablet"
            class="w-full max-w-[700px] object-contain transform scale-[1.3] translate-y-[110px]  md:group-hover:translate-y-[13px] group-hover:translate-y-[40px] transition-all duration-400"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>