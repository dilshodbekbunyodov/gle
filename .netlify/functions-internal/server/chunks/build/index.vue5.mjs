import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { defineComponent, mergeModels, useModel, ref, unref, mergeProps, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { I as Input } from './Input.vue.mjs';
import { T as TextArea } from './TextArea.vue.mjs';
import { b as useForm, a as _sfc_main$2 } from './server.mjs';
import { VueTelInput } from 'vue-tel-input';
import { vMaska } from 'maska/vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '@vee-validate/rules';

const backgroundImage = "" + __buildAssetsURL("contact.DgoXqYiH.png");

const AC = "####";
const AD = "###-###";
const AE = "#-###-####";
const AF = "##-###-####";
const AG = "(268)###-####";
const AI = "(264)###-####";
const AL = "(###)###-###";
const AM = "##-###-###";
const AN = "9###-####";
const AO = "(###)###-###";
const AQ = "1##-###";
const AR = "(###)###-####";
const AS = "(684)###-####";
const AT = "(###)###-####";
const AU = "#-####-####";
const AW = "###-####";
const AZ = "##-###-##-##";
const BA = "##-####";
const BB = "(246)###-####";
const BD = "##-###-###";
const BE = "(###)###-###";
const BF = "##-##-####";
const BG = "(###)###-###";
const BH = "####-####";
const BI = "##-##-####";
const BJ = "##-##-####";
const BM = "(441)###-####";
const BN = "###-####";
const BO = "#-###-####";
const BR = "(##)9####-####";
const BS = "(242)###-####";
const BT = "#-###-###";
const BW = "##-###-###";
const BY = "(##)###-##-##";
const BZ = "###-####";
const CA = "(###)###-####";
const CD = "(###)###-###";
const CF = "##-##-####";
const CG = "##-###-####";
const CH = "##-###-####";
const CI = "##-###-###";
const CK = "##-###";
const CL = "#-####-####";
const CM = "####-####";
const CN = "##-#####-#####";
const CO = "(###)###-####";
const CR = "####-####";
const CU = "#-###-####";
const CV = "(###)##-##";
const CW = "###-####";
const CY = "##-###-###";
const CZ = "(###)###-###";
const DE = "###-###";
const DJ = "##-##-##-##";
const DK = "##-##-##-##";
const DM = "(767)###-####";
const DO = "(849)###-####";
const DZ = "##-###-####";
const EC = "#-###-####";
const EE = "###-####";
const EG = "(###)###-####";
const ER = "#-###-###";
const ES = "(###)###-###";
const ET = "##-###-####";
const FI = "(###)###-##-##";
const FJ = "##-#####";
const FK = "#####";
const FM = "###-####";
const FO = "###-###";
const FR = "(###)###-###";
const GA = "#-##-##-##";
const GD = "(473)###-####";
const GE = "(###)###-###";
const GF = "#####-####";
const GH = "(###)###-###";
const GI = "###-#####";
const GL = "##-##-##";
const GM = "(###)##-##";
const GN = "##-###-###";
const GQ = "##-###-####";
const GR = "(###)###-####";
const GT = "#-###-####";
const GU = "(671)###-####";
const GW = "#-######";
const GY = "###-####";
const HK = "####-####";
const HN = "####-####";
const HR = "##-###-###";
const HT = "##-##-####";
const HU = "(###)###-###";
const ID = "(8##)###-##-###";
const IE = "(###)###-###";
const IL = "#-###-####";
const IN = "(####)###-###";
const IO = "###-####";
const IQ = "(###)###-####";
const IR = "(###)###-####";
const IS = "###-####";
const IT = "(###)####-###";
const JM = "(876)###-####";
const JO = "#-####-####";
const JP = "(###)###-###";
const KE = "###-######";
const KG = "(###)###-###";
const KH = "##-###-###";
const KI = "##-###";
const KM = "##-#####";
const KN = "(869)###-####";
const KP = "####-#############";
const KR = "##-###-####";
const KW = "####-####";
const KY = "(345)###-####";
const KZ = "(7##)###-##-##";
const LA = "##-###-###";
const LB = "#-###-###";
const LC = "(758)###-####";
const LI = "(###)###-####";
const LK = "##-###-####";
const LR = "##-###-###";
const LS = "#-###-####";
const LT = "(###)##-###";
const LU = "(###)###-###";
const LV = "##-###-###";
const LY = "21-###-####";
const MA = "##-####-###";
const MC = "##-###-###";
const MD = "####-####";
const ME = "##-###-###";
const MG = "##-##-#####";
const MH = "###-####";
const MK = "##-###-###";
const ML = "##-##-####";
const MM = "###-###";
const MN = "##-##-####";
const MO = "####-####";
const MP = "(670)###-####";
const MQ = "(###)##-##-##";
const MR = "##-##-####";
const MS = "(664)###-####";
const MT = "####-####";
const MU = "###-####";
const MV = "###-####";
const MW = "#-####-####";
const MX = "##-##-####";
const MY = "#-###-###";
const MZ = "##-###-###";
const NA = "##-###-####";
const NC = "##-####";
const NE = "##-##-####";
const NF = "3##-###";
const NG = "(###)###-####";
const NI = "####-####";
const NL = "##-###-####";
const NO = "(###)##-###";
const NP = "##-###-###";
const NR = "###-####";
const NU = "####";
const NZ = "(###)###-####";
const OM = "##-###-###";
const PA = "###-####";
const PE = "(###)###-###";
const PF = "##-##-##";
const PG = "(###)##-###";
const PH = "(###)###-####";
const PK = "(###)###-####";
const PL = "(###)###-###";
const PS = "##-###-####";
const PT = "##-###-####";
const PW = "###-####";
const PY = "(###)###-###";
const QA = "####-####";
const RE = "#####-####";
const RO = "##-###-####";
const RS = "##-###-####";
const RU = "(###)###-##-##";
const RW = "(###)###-###";
const SA = "#-###-####";
const SB = "#####";
const SC = "#-###-###";
const SD = "##-###-####";
const SE = "##-###-####";
const SG = "####-####";
const SH = "####";
const SI = "##-###-###";
const SK = "(###)###-###";
const SL = "##-######";
const SM = "####-######";
const SN = "##-###-####";
const SO = "#-###-###";
const SR = "###-###";
const SS = "##-###-####";
const ST = "##-#####";
const SV = "##-##-####";
const SX = "(721)###-####";
const SY = "##-####-###";
const SZ = "##-##-####";
const TC = "(649)###-####";
const TD = "##-##-##-##";
const TG = "##-###-###";
const TH = "##-###-###";
const TJ = "##-###-####";
const TK = "####";
const TL = "78#-#####";
const TM = "#-###-####";
const TN = "##-###-###";
const TO = "#####";
const TR = "(###)###-####";
const TT = "(868)###-####";
const TV = "2####";
const TW = "####-####";
const TZ = "##-###-####";
const UA = "(##)###-##-##";
const UG = "(###)###-###";
const UK = "##-####-####";
const US = "(###)###-####";
const UY = "#-###-##-##";
const UZ = "##-###-####";
const VA = "6-698-#####";
const VC = "(784)###-####";
const VE = "(###)###-####";
const VG = "(284)###-####";
const VI = "(340)###-####";
const VN = "(###)####-###";
const VU = "#####";
const WF = "##-####";
const WS = "##-####";
const YE = "##-###-###";
const ZA = "##-###-####";
const ZM = "##-###-####";
const ZW = "#-######";
const masks = {
  AC,
  AD,
  AE,
  AF,
  AG,
  AI,
  AL,
  AM,
  AN,
  AO,
  AQ,
  AR,
  AS,
  AT,
  AU,
  AW,
  AZ,
  BA,
  BB,
  BD,
  BE,
  BF,
  BG,
  BH,
  BI,
  BJ,
  BM,
  BN,
  BO,
  BR,
  BS,
  BT,
  BW,
  BY,
  BZ,
  CA,
  CD,
  CF,
  CG,
  CH,
  CI,
  CK,
  CL,
  CM,
  CN,
  CO,
  CR,
  CU,
  CV,
  CW,
  CY,
  CZ,
  DE,
  DJ,
  DK,
  DM,
  DO,
  DZ,
  EC,
  EE,
  EG,
  ER,
  ES,
  ET,
  FI,
  FJ,
  FK,
  FM,
  FO,
  FR,
  GA,
  GD,
  GE,
  GF,
  GH,
  GI,
  GL,
  GM,
  GN,
  GQ,
  GR,
  GT,
  GU,
  GW,
  GY,
  HK,
  HN,
  HR,
  HT,
  HU,
  ID,
  IE,
  IL,
  IN,
  IO,
  IQ,
  IR,
  IS,
  IT,
  JM,
  JO,
  JP,
  KE,
  KG,
  KH,
  KI,
  KM,
  KN,
  KP,
  KR,
  KW,
  KY,
  KZ,
  LA,
  LB,
  LC,
  LI,
  LK,
  LR,
  LS,
  LT,
  LU,
  LV,
  LY,
  MA,
  MC,
  MD,
  ME,
  MG,
  MH,
  MK,
  ML,
  MM,
  MN,
  MO,
  MP,
  MQ,
  MR,
  MS,
  MT,
  MU,
  MV,
  MW,
  MX,
  MY,
  MZ,
  NA,
  NC,
  NE,
  NF,
  NG,
  NI,
  NL,
  NO,
  NP,
  NR,
  NU,
  NZ,
  OM,
  PA,
  PE,
  PF,
  PG,
  PH,
  PK,
  PL,
  PS,
  PT,
  PW,
  PY,
  QA,
  RE,
  RO,
  RS,
  RU,
  RW,
  SA,
  SB,
  SC,
  SD,
  SE,
  SG,
  SH,
  SI,
  SK,
  SL,
  SM,
  SN,
  SO,
  SR,
  SS,
  ST,
  SV,
  SX,
  SY,
  SZ,
  TC,
  TD,
  TG,
  TH,
  TJ,
  TK,
  TL,
  TM,
  TN,
  TO,
  TR,
  TT,
  TV,
  TW,
  TZ,
  UA,
  UG,
  UK,
  US,
  UY,
  UZ,
  VA,
  VC,
  VE,
  VG,
  VI,
  VN,
  VU,
  WF,
  WS,
  YE,
  ZA,
  ZM,
  ZW
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PhoneInput",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      default: ""
    },
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["dialCode"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const phone = useModel(__props, "modelValue");
    const dialCode = ref("");
    const masksRef = ref(JSON.parse(JSON.stringify(masks)));
    const options = ref({});
    const phoneMask = ref("## ###-##-##");
    function handleCountry(country) {
      dialCode.value = "+" + country.dialCode;
      emit("dialCode", dialCode.value);
      phoneMask.value = masksRef.value[country.iso2] || "###################";
    }
    function handleChange(_phone, phoneObj) {
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VueTelInput), mergeProps({
        modelValue: phone.value,
        "onUpdate:modelValue": ($event) => phone.value = $event,
        "auto-format": false
      }, unref(options), {
        class: "input-field !border-t-0 !border-l-0 !border-r-0",
        onOnInput: handleChange,
        onCountryChanged: handleCountry
      }, _attrs, ssrGetDirectiveProps(_ctx, unref(vMaska), { mask: unref(phoneMask), eager: true })), null, _parent));
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { defineField, handleSubmit, handleReset, errors } = useForm({
      validationSchema: {
        name: "required",
        email: "required|email",
        phone: "required",
        subject: "required",
        use: "required"
      }
    });
    const [name] = defineField("name");
    const [email] = defineField("email");
    const [phone] = defineField("phone");
    const [subject] = defineField("subject");
    const [use] = defineField("use");
    const dialCode = ref("");
    handleSubmit(async (values) => {
      console.log({
        ...values,
        phone: `${dialCode.value} ${phone.value}`,
        formName: "Consultation"
      });
      handleReset();
    });
    function handleDialCode(code) {
      dialCode.value = code;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[170px]" }, _attrs))}><h1 class="text-[#1D1D1D] mb-[70px] font-inter font-medium md:text-[100px] text-[20px] leading-[100%] md:tracking-[-3px] text-center"> CONTACT US </h1><div class="w-[99%] m-auto"><iframe class="border-0 w-full h-[540px] rounded-[15px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1522861.3382905934!2d-82.89984618952859!3d27.559265013252418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2z0KTQu9C-0YDQuNC00LAsINCh0KjQkA!5e0!3m2!1sru!2s!4v1746432224419!5m2!1sru!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><div class="container mt-[189px]"><div class="md:flex items-center justify-center md:px-0 px-5"><div class="md:w-5/12 w-12/12"><h2 class="font-inter font-medium text-[48px] leading-[100%] tracking-[-3px] uppercase text-[#1D1D1D]">Leave <span class="text-[#40BF69] mb-[80px]">request</span></h2><div class="mt-[80px] mb-[60px]"><h5 class="mb-[20px] text-[#1D1D1D] font-medium text-[22px] leading-[100%] tracking-[0]">Address</h5><span class="text-[#757988] font-normal text-[16px] leading-[100%] tracking-[0]">Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</span></div><div class="mt-[60px] mb-[60px]"><h5 class="mb-[20px] text-[#1D1D1D] font-medium text-[22px] leading-[100%] tracking-[0]">Email</h5><span class="text-[#757988] font-normal text-[16px] leading-[100%] tracking-[0]">Support@uithemez.com</span></div><a href="" class="text-[#40BF69] text-[30px] font-semibold underline">+1 840 841 25 69</a><ul class="flex items-center mt-[32px] gap-8"><li class="text-[#1D1D1D] text-[16px] font-normal">Facebook</li><li class="text-[#1D1D1D] text-[16px] font-normal">Twitter</li><li class="text-[#1D1D1D] text-[16px] font-normal">LinkedIn</li><li class="text-[#1D1D1D] text-[16px] font-normal">Instagram</li></ul></div><div class="md:w-7/12 w-12/12 md:mt-0 mt-[20px] bg-cover bg-center bg-no-repeat py-[50px] px-[50px] rounded-[30px]" style="${ssrRenderStyle(`background-image: url(${unref(backgroundImage)})`)}"><div class="text-center"><h4 class="text-white text-[36px] uppercase mb-[24px]">Contact us</h4><p class="text-white font-normal text-[20px] leading-[150%] tracking-[0] text-center">Have questions? We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible.</p></div><form><div class="grid grid-cols-2 gap-8 relative">`);
      _push(ssrRenderComponent(Input, {
        modelValue: unref(name),
        "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
        placeholder: "Name",
        errors: unref(errors).name
      }, null, _parent));
      _push(ssrRenderComponent(Input, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        placeholder: "Email",
        errors: unref(errors).email
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        onDialCode: handleDialCode
      }, null, _parent));
      _push(ssrRenderComponent(Input, {
        modelValue: unref(subject),
        "onUpdate:modelValue": ($event) => isRef(subject) ? subject.value = $event : null,
        placeholder: "Subject",
        errors: unref(errors).subject
      }, null, _parent));
      _push(ssrRenderComponent(TextArea, {
        modelValue: unref(use),
        "onUpdate:modelValue": ($event) => isRef(use) ? use.value = $event : null,
        placeholder: "Message",
        errors: unref(errors).use
      }, null, _parent));
      _push(`<div class="mt-[32px]"><h4 class="text-white text-[18px] mb-[20px] font-normal">Do you currently use an ELD platform?</h4><div class="flex items-center"><label class="flex items-center space-x-3 cursor-pointer"><input type="radio" name="eldPlatform" value="yes" class="hidden peer" model-value=""><div class="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center peer-checked:border-[#40BF69] peer-checked:bg-[#40BF69]"><div class="w-2 h-2 rounded-full bg-[#C9FFDB] peer-checked:bg-white"></div></div><span class="text-white text-[14px]">Yes</span></label><label class="flex items-center space-x-3 cursor-pointer ml-[24px]"><input type="radio" name="eldPlatform" value="no" class="hidden peer" model-value=""><div class="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center peer-checked:border-[#40BF69] peer-checked:bg-[#40BF69]"><div class="w-2 h-2 rounded-full bg-[#C9FFDB] peer-checked:bg-white"></div></div><span class="text-white text-[14px]">No</span></label></div><div class="flex items-start mt-[24px]"><div class="flex items-center h-5"><label class="flex items-center space-x-3 cursor-pointer"><input id="consent" name="consent" type="checkbox" class="hidden peer" model-value=""><div class="w-[24px] h-[24px] border-1 border-white rounded-[6px] flex items-center justify-center peer-checked:bg-[#40BF69] peer-checked:border-[#40BF69]"><svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></div></label></div><div class="ml-3"><label for="consent" class="text-[#FFFFFFB2] font-normal text-[14px]"> By checking this box, I consent to receive SMS messages from Green Light ELD related to Customer care at the phone number provided above. The SMS frequency may vary. Data rates may apply. For assistance reply HELP. Reply STOP to opt out of receiving text messages. Please review our `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/termsofuse",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` and `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/termsofuse",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` for details. </label></div></div><div class="mt-[44px] text-center">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "submit",
        label: "Send message"
      }, null, _parent));
      _push(`</div></div></form></div></div></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue5.mjs.map
