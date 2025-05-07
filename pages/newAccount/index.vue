<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import GoogleIcon from '@/assets/images/google.png'
import FacebookIcon from '@/assets/images/face.png'

definePageMeta({
  layout: false
})

const formData = reactive({
  firstName: '',
  phone: '',
  lastName: '',
  password: '',
  email: '',
  confirmPassword: '',
  agreeTerms: false,
  // Step 2 fields
  companyName: '',
  timeZone: '',
  usdot: '',
  numTrucks: '',
  companyAddress: ''
})

const activeStep = ref(1)

const submitForm = () => {
  console.log('Submitted data:', formData)
}
</script>

<template>
  <div class="flex flex-col lg:flex-row min-h-screen lg:gap-40">
    <!-- Form Container -->
    <div class="w-full lg:w-[75%] flex flex-col px-6 lg:pl-[100px] py-4 overflow-y-auto z-50">
      <div class="flex-grow">
        <!-- Header -->
        <h1 class="text-4xl sm:text-5xl lg:text-[80px] font-semibold leading-tight whitespace-nowrap">
          <span class="text-[#40BF69]">NEW</span>
          <span class="text-[#1D1D1D]"> ACCOUNT</span>
        </h1>

        <!-- Progress Steps -->
        <div class="my-6 flex items-center justify-between w-full">
          <div class="w-8 h-8 flex items-center justify-center rounded-full text-white bg-[#40BF69]"
               :class="{ 'bg-opacity-30 text-[#40BF69]': activeStep < 1 }">
            1
          </div>
          <div class="relative flex items-center justify-center w-[90%] h-1.5 bg-[#EFF0F6] rounded-full overflow-hidden mx-2">
            <div class="absolute top-0 left-0 h-full bg-[#40BF69] rounded-full transition-all duration-800 ease-in-out"
                 :style="{ width: activeStep === 1 ? '50%' : '100%' }" />
          </div>
          <div class="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out"
               :class="activeStep >= 2 ? 'bg-[#40BF69] text-white' : 'bg-gray-200 text-gray-400'">
            2
          </div>
        </div>

        <!-- Step Forms with animation -->
        <div class="relative h-auto min-h-[300px]">
          <transition name="fade-slide" mode="out-in">
            <div v-if="activeStep === 1" key="step1" class="grid grid-cols-1 md:grid-cols-2 gap-3 transition-all ease-out duration-500">
              <Input v-model="formData.firstName" label="First Name" input-type="simple" placeholder="Ex: Eliza" />
              <Input v-model="formData.phone" label="Phone" input-type="simple" placeholder="Ex: +998911234567" />
              <Input v-model="formData.lastName" label="Lastname" input-type="simple" placeholder="Ex: Maguire" />
              <Input v-model="formData.password" label="Password" input-type="simple" type="password" placeholder="Password" />
              <Input v-model="formData.email" label="Email" input-type="simple" type="email" placeholder="Ex: jalil18@gmail.com" />
              <Input v-model="formData.confirmPassword" label="Confirm password" input-type="simple" type="password" placeholder="Confirm password" />
            </div>

            <div v-else key="step2" class="grid grid-cols-1 md:grid-cols-2 gap-3 transition-all ease-in duration-500">
              <Input v-model="formData.companyName" label="Company Name" input-type="simple" placeholder="Ex: Apple" />

              <!-- Custom Select for Time Zone -->
              <div class="flex flex-col">
                <Input
                    v-model="formData.timeZone"
                    label="Time zone"
                    input-type="select"
                    placeholder="Ex: 9 am"
                >
                  <option value="" disabled hidden>Ex: 9 am</option>
                  <option value="Tashkent">Tashkent (UTC+5)</option>
                  <option value="EST">USA (UTC-5)</option>
                </Input>
              </div>

              <Input v-model="formData.usdot" label="USDOT" input-type="simple" placeholder="Ex: USDOT" />
              <Input v-model="formData.numTrucks" label="Number of trucks" input-type="simple" placeholder="Ex: 5" />
              <Input v-model="formData.companyAddress" label="Company address" input-type="simple" placeholder="Ex: Tashkent" />
            </div>
          </transition>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-4">
        <!-- Primary button with Go Back -->
        <div class="mb-4 relative transition-all duration-300">
          <div class="flex justify-between items-center">
            <transition name="fade">
              <button
                  v-if="activeStep === 2"
                  @click="activeStep = 1"
                  class="text-sm text-[#40BF69] underline"
              >
                Go to back
              </button>
            </transition>

            <Button
                label="Next step"
                @click="activeStep === 1 ? activeStep = 2 : submitForm()"
                :class="[
          'transition-all duration-300',
          activeStep === 1 ? 'w-full mt-4' : 'w-1/3 2xl:w-1/4 ml-auto'
        ]"
            />
          </div>
        </div>


      <label class="flex items-start cursor-pointer mb-4">
          <input v-model="formData.agreeTerms" type="checkbox" class="hidden peer">
          <div class="w-5 h-5 border border-gray-300 rounded-[6px] flex items-center justify-center mt-0.5 peer-checked:bg-[#40BF69] peer-checked:border-[#EAEBEC]">
            <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <span class="text-[#1D1D1D] text-sm ml-2">
            By creating an account, you agree to our Terms & Conditions
          </span>
        </label>

        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-[#757988]"/>
          <span class="mx-4 text-[#757988] text-xs font-medium">OR</span>
          <div class="flex-grow border-t border-[#757988]"/>
        </div>

        <button class="bg-[#F5F5F5] w-full flex items-center justify-center rounded-xl py-3 px-4 mb-2">
          <img :src="GoogleIcon" class="w-5 h-5" alt="Google">
          <span class="text-[#1D1D1D] text-base font-medium ml-2">Continue with Google</span>
        </button>

        <button class="bg-[#F5F5F5] w-full flex items-center justify-center rounded-xl py-3 px-4">
          <img :src="FacebookIcon" class="w-5 h-5" alt="Facebook">
          <span class="text-[#1D1D1D] text-base font-medium ml-2">Continue with Facebook</span>
        </button>
      </div>
    </div>

    <!-- Right Side -->
    <div class="hidden lg:flex w-full lg:w-[50%] bg-gray-50 items-center justify-center px-8 py-18 rounded-tl-[50px] rounded-bl-[50px] relative h-[300px] lg:h-screen mt-8 lg:mt-0">
      <div class="absolute inset-0 overflow-hidden rounded-tl-[50px] rounded-bl-[50px] z-0">
        <div class="absolute inset-0 bg-[#bee5ca]" />
        <div class="custom-gradient border-2 border-[#49c270] rounded-full absolute -right-[5%] -top-[1500px] w-[2810px] h-[2823px] transition-all duration-400" />
      </div>
      <img src="@/assets/images/truck2.png" class="absolute scale-[1.5] left-[-25%] w-[100%]" alt="truck" />
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.4s ease-in;
}
.fade-slide-leave-active {
  transition: all 0.4s ease-out;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
