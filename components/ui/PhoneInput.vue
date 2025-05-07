<script setup lang="ts">
import { VueTelInput } from "vue-tel-input"
import { vMaska } from "maska/vue"
import masks from "~/masks.json"

const emit = defineEmits(["dialCode"])
const phone = defineModel<string>({
  default: ""
})
const dialCode = ref("")

const masksRef = ref(JSON.parse(JSON.stringify(masks)))

const options = ref({})
const phoneMask = ref("## ###-##-##")

function handleCountry(country: any) {
  dialCode.value = "+" + country.dialCode
  emit("dialCode", dialCode.value)
  phoneMask.value = masksRef.value[country.iso2] || "###################"
}

function handleChange(_phone: string, phoneObj: any) {
}


</script>

<template>
  <VueTelInput
      v-model="phone"
      v-maska="{ mask: phoneMask, eager: true }"
      :auto-format="false"
      v-bind="options"
      class="input-field !border-t-0 !border-l-0 !border-r-0"
      @on-input="handleChange"
      @country-changed="handleCountry"
  >
<!--    <template #icon-right>-->
<!--      <div class="absolute left-20 w-10 h-full flex items-center bg-transparent">{{ dialCode }}</div>-->
<!--    </template>-->
  </VueTelInput>
</template>

<style>
.vti__input {
  outline: none!important;
  color: white!important;
  box-shadow: none!important;
}

.vti__dropdown-arrow {
  color: white;
}

.vti__input::placeholder{
  color: white;
}

.vue-tel-input input:focus {
  box-shadow: none!important;
  border: none;
}

.vti__dropdown:hover {
  background-color: transparent!important;
}

.input-field {
  padding: 17px 2px!important;
  border-bottom: 1px solid #FFFFFF80!important;
  outline: none!important;
  box-shadow: none!important;
}

.input-field::placeholder {
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  color: #FFFFFF!important;
}

</style>
