<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import TextArea from "~/components/ui/TextArea.vue";
import Button from "~/components/ui/Button.vue";

import backgroundImage from "assets/images/contact.png";
import PhoneInput from "~/components/ui/PhoneInput.vue";

const {defineField, handleSubmit, handleReset, errors} = useForm({
  validationSchema: {
    name: "required",
    email: "required|email",
    phone: "required",
    subject: "required",
    use: "required"
  }
})

const [name] = defineField("name")
const [email] = defineField("email")
const [phone] = defineField("phone")
const [subject] = defineField("subject")
const [use] = defineField("use")

const dialCode = ref("")

const onSubmit = handleSubmit(async (values) => {
  console.log({
    ...values,
    phone: `${dialCode.value} ${phone.value}`,
    formName: "Consultation"
  })
  handleReset()
})

function handleDialCode(code: string) {
  dialCode.value = code
}
</script>

<template>
  <div class="pt-[170px]">
    <h1 class="text-[#1D1D1D] mb-[70px] font-inter font-medium md:text-[100px] text-[20px] leading-[100%] md:tracking-[-3px] text-center">
      CONTACT US
    </h1>

    <div class="w-[99%] m-auto">
      <iframe
          class="border-0 w-full h-[540px] rounded-[15px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1522861.3382905934!2d-82.89984618952859!3d27.559265013252418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2z0KTQu9C-0YDQuNC00LAsINCh0KjQkA!5e0!3m2!1sru!2s!4v1746432224419!5m2!1sru!2s"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"/>
    </div>

    <div class="container mt-[189px]">
      <div class="md:flex items-center justify-center md:px-0 px-5">
        <div class="md:w-5/12 w-12/12">
          <h2 class="font-inter font-medium text-[48px] leading-[100%] tracking-[-3px] uppercase text-[#1D1D1D]">Leave
            <span class="text-[#40BF69] mb-[80px]">request</span>
          </h2>

          <div class="mt-[80px] mb-[60px]">
            <h5 class="mb-[20px] text-[#1D1D1D] font-medium text-[22px] leading-[100%] tracking-[0]">Address</h5>
            <span class="text-[#757988] font-normal	 text-[16px] leading-[100%] tracking-[0]">Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</span>
          </div>

          <div class="mt-[60px] mb-[60px]">
            <h5 class="mb-[20px] text-[#1D1D1D] font-medium text-[22px] leading-[100%] tracking-[0]">Email</h5>
            <span
                class="text-[#757988] font-normal	 text-[16px] leading-[100%] tracking-[0]">Support@uithemez.com</span>
          </div>

          <a href="" class="text-[#40BF69] text-[30px] font-semibold underline">+1 840 841 25 69</a>

          <ul class="flex items-center mt-[32px] gap-8">
            <li class="text-[#1D1D1D] text-[16px] font-normal">Facebook</li>
            <li class="text-[#1D1D1D] text-[16px] font-normal">Twitter</li>
            <li class="text-[#1D1D1D] text-[16px] font-normal">LinkedIn</li>
            <li class="text-[#1D1D1D] text-[16px] font-normal">Instagram</li>
          </ul>
        </div>

        <div
            class="md:w-7/12 w-12/12 md:mt-0 mt-[20px] bg-cover bg-center bg-no-repeat py-[50px] px-[50px] rounded-[30px]"
            :style="`background-image: url(${backgroundImage})`">
          <div class="text-center">
            <h4 class="text-white text-[36px] uppercase mb-[24px]">Contact us</h4>
            <p class="text-white font-normal text-[20px] leading-[150%] tracking-[0] text-center">Have questions? We'd
              love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <form @submit.prevent="onSubmit">
            <div class="grid grid-cols-2 gap-8 relative">
              <Input
                  v-model="name"
                  placeholder="Name"
                  :errors="errors.name"
              />

              <Input
                  v-model="email"
                  placeholder="Email"
                  :errors="errors.email"
              />
            </div>


            <PhoneInput v-model="phone" @dial-code="handleDialCode"/>

            <Input
                v-model="subject"
                placeholder="Subject"
                :errors="errors.subject"
            />

            <TextArea v-model="use" placeholder="Message" :errors="errors.use"/>


            <div class="mt-[32px]">
              <h4 class="text-white text-[18px] mb-[20px] font-normal">Do you currently use an ELD platform?</h4>

              <!-- Radio Options -->
              <div class="flex items-center">
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input
                      type="radio"
                      name="eldPlatform"
                      value="yes"
                      class="hidden peer"
                      model-value=""/>
                  <div
                      class="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center peer-checked:border-[#40BF69] peer-checked:bg-[#40BF69]">
                    <div class="w-2 h-2 rounded-full bg-[#C9FFDB] peer-checked:bg-white"></div>
                  </div>
                  <span class="text-white text-[14px]">Yes</span>
                </label>


                <label class="flex items-center space-x-3 cursor-pointer ml-[24px]">
                  <input
                      type="radio"
                      name="eldPlatform"
                      value="no"
                      class="hidden peer"
                      model-value=""/>
                  <div
                      class="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center peer-checked:border-[#40BF69] peer-checked:bg-[#40BF69]">
                    <div class="w-2 h-2 rounded-full bg-[#C9FFDB] peer-checked:bg-white"></div>
                  </div>
                  <span class="text-white text-[14px]">No</span>
                </label>
              </div>

              <!-- Consent Checkbox -->
              <div class="flex items-start mt-[24px]">
                <div class="flex items-center h-5">
                  <label class="flex items-center space-x-3 cursor-pointer">
                    <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        class="hidden peer"
                        model-value="">
                    <div
                        class="w-[24px] h-[24px] border-1 border-white rounded-[6px] flex items-center justify-center peer-checked:bg-[#40BF69] peer-checked:border-[#40BF69]">
                      <svg
                          class="w-3 h-3 text-white hidden peer-checked:block"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </label>

                </div>

                <div class="ml-3">
                  <label for="consent" class="text-[#FFFFFFB2] font-normal text-[14px]">
                    By checking this box, I consent to receive SMS messages from Green Light ELD related to Customer
                    care
                    at the phone number provided above. The SMS frequency may vary. Data rates may apply. For assistance
                    reply HELP. Reply STOP to opt out of receiving text messages. Please review our
                    <NuxtLink to="/termsofuse" class="underline">Privacy
                      Policy</NuxtLink> and <NuxtLink to="/termsofuse" class="underline">Terms of Service</NuxtLink> for details.
                  </label>
                </div>
              </div>

              <div class="mt-[44px] text-center">
                <Button type="submit" label="Send message"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>