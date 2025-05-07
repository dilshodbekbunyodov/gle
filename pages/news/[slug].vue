<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import RecentNews from "~/pages/news/RecentNews.vue";
import FormComment from './FormComment.vue'
</script>

<template>
  <div class="pt-[150px]">
    <div class="container">
      <div class="relative md:mx-0 mx-3">
        <img src="@/assets/images/truckBanner.png" class="rounded-[15px]" alt="">
        <h3 class="text-white font-inter font-medium md:text-[55px] text-[20px] leading-[120%] absolute bottom-0 md:pl-[80px] pl-[20px] pb-[47px]">
          Network of wormholes colonies extraordinary claims require.
        </h3>
      </div>

      <div class="md:flex mt-[114px] gap-20">
        <div class="md:w-9/12 w-12/12 md:px-0 px-5">
          <div class="text-gray-700">
            <p
                class="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold text-[#757988] font-normal text-[16px]"
            >
              New report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a
              15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track
              record confirmed that Apple is working on the larger MacBook Air.

              However, Apple might not include it in the Air series when it launches it. As for the notebook’s release
              date,
              the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims.
            </p>

            <h2 class="text-[#1D1D1D] font-medium text-[36px] mt-[21px] mb-[24px]">
              What sizes do MacBook Airs come in?
            </h2>

            <p class="text-[#757988] font-normal text-[16px]">
              Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches the
              pre- 2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company
              discontinued that model in 2017.
            </p>


            <div class="border border-[#1D1D1D26] px-[32px] py-[41px] flex items-center mt-[32px] w-full">
              <img src="@/assets/images/logo2.png" class="w-[60px] h-[46px]" alt="logo">

              <div class="ml-[32px]">
                <h3 class="text-[20px] text-[#1D1D1D] font-medium">
                  And the day came when the risk to remain tight in a bud was more
                  painful than the risk it took to blossom.</h3>

                <p class="text-[#40BF69] text-[14px] font-medium mt-[20px]">- Green Light ELD</p>
              </div>
            </div>

            <div class="md:flex items-center gap-8 mt-[50px]">
              <img
                  class="md:w-[400px] md:mb-0 mb-3 w-full h-[400px] md:m-0 m-auto object-cover"
                  src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=2048x2048&w=is&k=20&c=laH1UL7RxM9mqD9TSOYbAFbHBO3RokKTz3O1arUJ0_0="
                  alt="">
              <img
                  class="md:w-[400px] w-full h-[400px] object-cover md:m-0 m-auto"
                  src="https://media.istockphoto.com/id/1472269904/photo/business-people-having-a-meeting.jpg?s=2048x2048&w=is&k=20&c=Ti4jmLjaes1mpQtIkDchDPk_oFYniUuMXVGM1qTSGiY="
                  alt="">
            </div>

            <div class="mt-[50px]">
              <div class="mb-[24px]">
                <h1 class="text-[36px] font-medium text-[#1D1D1D] mb-4">Apple currently sells.</h1>
              </div>

              <!-- Article Content -->
              <div class="prose prose-lg max-w-none">
                <p class="mb-6 text-[#757988] text-[16px]">
                  A new report said earlier this week that Apple is working on a brand new laptop. Apple plans to
                  release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a
                  proven track record confirmed that Apple is working on the larger MacBook Air.
                </p>

                <!-- Unordered List Section -->
                <div class="mb-8">
                  <h2 class="text-[22px] font-medium text-[#1D1D1D] mb-4">Ordered & Unordered Lists.</h2>
                  <ul class="list-disc pl-6 space-y-2 mb-6 text-[#1D1D1D] text-[18px]">
                    <li>Yet this above sewed flirted opened ouch</li>
                    <li>Goldfinch realistic sporadic ingenuous</li>
                    <li>Abominable this abidin far successfully then like piquan</li>
                  </ul>
                </div>

                <!-- Ordered List Section -->
                <div class="mb-8">
                  <h2 class="text-[22px] font-medium text-[#1D1D1D] mb-4">Ordered & Unordered Lists.</h2>
                  <ol class="list-decimal pl-6 space-y-2 mb-6 text-[#1D1D1D] text-[18px]">
                    <li>Yet this above sewed flirted opened ouch</li>
                    <li>Goldfinch realistic sporadic ingenuous</li>
                    <li>Abominable this abidin far successfully then like piquan</li>
                  </ol>
                </div>

                <p class="mb-6 text-[#757988] text-[16px]">
                  However, Apple might not include it in the Air series when it launches it. As for the notebook's
                  release date, the 15-inch MacBook isn't coming soon. It'll get a late 2023 release at best, according
                  to the new claims.
                </p>
              </div>
            </div>

            <div class="border-t border-[#1D1D1D26]">

              <div class="md:flex items-center justify-between">
                <div class="flex items-center gap-4 pt-[41px]">
                  <h5 class="text-[#1D1D1D] text-[14px] font-normal">Tags :</h5>
                  <span class="text-[#1D1D1D] font-normal text-[12px] py-[5px] px-[15px] bg-[#1D1D1D08] rounded-[30px]">Tech</span>
                  <span class="text-[#1D1D1D] font-normal text-[12px] py-[5px] px-[15px] bg-[#1D1D1D08] rounded-[30px]">Ui-ThemeZ</span>
                </div>

                <div class="flex items-center gap-4 pt-[41px]">
                  <h5 class="text-[#1D1D1D] text-[14px] font-normal">Share :</h5>

                  <span
                      class="text-[#1D1D1D] font-normal text-[12px] h-[35px] w-[35px] flex items-center justify-center bg-[#1D1D1D08] rounded-[30px]">
                    <img src="@/assets/images/facebook.png" class="w-auto" alt="facebook">
                  </span>
                  <span
                      class="text-[#1D1D1D] font-normal text-[12px] h-[35px] w-[35px] flex items-center justify-center bg-[#1D1D1D08] rounded-[30px]">
                        <img src="@/assets/images/twitter.png" class="w-auto" alt="facebook">
                  </span>
                  <span
                      class="text-[#1D1D1D] font-normal text-[12px] h-[35px] w-[35px] flex items-center justify-center bg-[#1D1D1D08] rounded-[30px]">
                        <img src="@/assets/images/youtube.png" class="w-auto" alt="facebook">
                  </span>
                </div>
              </div>

              <div class="bg-[#fbfbfb] p-[40px] border-b border-[#1D1D1D26] mt-[32px] flex items-center">
                <img class="w-[100px] h-[100px] object-cover rounded-[5px]" src="https://picsum.photos/200/300?random=1"
                     alt="">
                <div class="ml-[30px]">
                  <h4 class="text-[20px] text-[#1D1D1D] font-semibold	">Chris Smith</h4>
                  <h6 class="text-[#757988] text-[16px] font-normal mt-[12px]">Nulla eleifend, lectus eu gravida
                    facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.</h6>
                </div>
              </div>

              <FormComment/>
            </div>
          </div>
        </div>

        <div class="md:w-3/12 w-12/12 md:px-0 px-5">
          <div class="border-t border-[#D9D9D9] border-b py-[60px] text-center">
            <h4 class="text-[40px] text-[#1D1D1D] font-medium	text-center mb-[24px] leading-12">
              Get Started with Green Light ELD
            </h4>

            <Button label="Leave a request"/>
          </div>

          <div class="mt-[50px]">
            <h4 class="text-[#1D1D1D] text-[22px] font-medium	mb-[32px]">Latest Posts</h4>

            <div v-for="(item, index) in 3" :key="index" class="flex items-center mb-[24px]">
              <img src="@/assets/images/brat.png" class="rounded-[5px] w-[90px] h-[100px]" alt="brat">

              <div class="ml-[25px]">
                <span class="text-[#1D1D1D] font-normal text-[12px] py-[5px] px-[15px] bg-[#1D1D1D08] rounded-[30px]">Web Design</span>

                <h5 class="text-[#1D1D1D] font-medium	 text-[17px] mt-[10px]">
                  ways to quickly increase
                  traffic to your website
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RecentNews/>
    </div>
  </div>
</template>

<style scoped>

</style>