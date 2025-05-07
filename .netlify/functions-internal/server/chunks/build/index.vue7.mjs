import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[190px]" }, _attrs))}><h1 class="text-center text-[#1D1D1D] md:text-[100px] text-[50px] font-medium mb-[80px]">Terms of Service</h1><div class="max-w-2xl mx-auto md:px-0 px-3 py-8 text-gray-800"><section class="mb-[32px] border-b border-[#D9D9D9] pb-[32px]"><h2 class="text-[#1D1D1D] text-[36px] font-medium mb-[24px]">SMS Consent</h2><p class="text-[#757988] text-[16px] font-normal">The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.</p></section><section class="mb-[32px] border-b border-[#D9D9D9] pb-[32px]"><h2 class="text-[#1D1D1D] text-[36px] font-medium mb-[24px]">Types of SMS Communications</h2><p class="text-[#757988] text-[16px] font-normal"> If you have consented to receive text messages from Green Light ELD, you may receive messages related to the following: </p><ul class="list-disc my-[24px] ml-4"><li class="text-[#757988] text-[16px] font-normal">Customer care</li></ul><p class="text-[#757988] text-[16px] font-normal"> Example: Hello, this is a friendly reminder of your upcoming payment deadline on 21.03.2025 at 12:00:00. Reply STOP to opt out of SMS messaging at any time. </p></section><section class="mb-[32px] border-b border-[#D9D9D9] pb-[32px]"><h2 class="text-[#1D1D1D] text-[36px] font-medium mb-[24px]">Message Frequency</h2><p class="text-[#757988] text-[16px] font-normal">Message frequency may vary depending on the type of communication. For example, you may receive up to 5 SMS messages per week related to your payment deadline.</p></section><section class="mb-[32px] border-b border-[#D9D9D9] pb-[32px]"><h2 class="text-[#1D1D1D] text-[36px] font-medium mb-[24px]">Potential Fees for SMS Messaging</h2><p class="text-[#757988] text-[16px] font-normal"> Please note that standard message and data rates may apply, depending on your carrier&#39;s pricing plan. These fees may vary if the message is sent domestically or internationally. </p></section><section class="mb-[32px] border-b border-[#D9D9D9] pb-[32px]"><h2 class="text-[#1D1D1D] text-[36px] font-medium mb-[24px]">Opt-In Method</h2><p class="text-[#757988] text-[16px] font-normal"> You may opt-in to receive SMS messages from Green Light ELD in the following ways: </p><ul class="list-disc ml-4 my-[24px]"><li class="text-[#40BF69] text-[16px] font-normal">By submitting an online form</li></ul><p class="text-[#757988] text-[16px] font-normal"> If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms. </p></section><section class="mb-[32px] border-b border-[#D9D9D9] pb-[32px]"><h2 class="text-[#1D1D1D] text-[36px] font-medium mb-[24px]">Opt-Out Method</h2><p class="text-[#757988] text-[16px] font-normal"> You can opt out of receiving SMS messages at any time by: </p><ul class="list-disc ml-4 mt-[24px]"><li class="text-[#757988] text-[16px] font-normal">Replying &quot;STOP&quot; to any SMS message you receive</li><li class="text-[#757988] text-[16px] font-normal">Contacting us directly to request removal from our messaging list </li></ul></section><section class="mb-[32px] border-b border-[#D9D9D9] pb-[32px]"><h2 class="text-[#1D1D1D] text-[36px] font-medium mb-[24px]">Help</h2><p class="text-[#757988] text-[16px] font-normal">If you are experiencing any issues, you can:</p><ul class="list-disc ml-4 mt-[24px]"><li class="text-[#757988] text-[16px] font-normal">Reply with the keyword &quot;HELP&quot; to any message</li><li class="text-[#757988] text-[16px] font-normal">Contact us directly for assistance</li></ul></section><section class="mb-[32px] border-b border-[#D9D9D9] pb-[32px]"><h2 class="text-xl font-semibold mb-2">Standard Messaging Disclosures</h2><ul class="list-disc pl-4 text-[#757988] text-[16px] font-normal"><li>Message and data rates may apply</li><li>You can opt out at any time by replying &quot;STOP&quot;</li><li>For assistance, text &quot;HELP&quot; or visit our Privacy Policy and Terms and Conditions pages </li><li>Message frequency may vary</li></ul></section><section><h2 class="text-xl font-semibold mb-2">For any questions, contact us at:</h2><ul class="list-none text-[#40BF69] text-[16px] font-normal"><li><a href="tel:+12542963331" class="underline">+1 (254) 296-3331</a></li><li class="my-2"><a href="mailto:support@greenlighteld.com" class="underline">support@greenlighteld.com</a></li><li><a href="https://greenlighteld.com" class="underline" target="_blank">https://greenlighteld.com</a></li></ul></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/termsofuse/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue7.mjs.map
