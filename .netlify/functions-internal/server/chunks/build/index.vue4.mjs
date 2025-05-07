import { a as _sfc_main$1, b as __nuxt_component_1 } from './customerReviews.vue.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './dot.svg.mjs';
import 'swiper/vue';
import 'swiper/modules';
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
  const _component_HomeSectionChoosePlan = _sfc_main$1;
  const _component_HomeSectionCustomerReviews = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[100px] sm:pt-[150px] md:pt-[185px]" }, _attrs))}><section class="px-4 sm:px-6 py-8 sm:py-12 mb-[80px] sm:mb-[100px] md:mb-[120px]"><div class="container mx-auto"><div class="flex flex-col md:flex-row md:items-start"><div class="text-[16px] sm:text-[18px] font-light text-[#1D1D1D] mb-4 md:mb-2 mt-[10px] md:mt-[20px]"> • Pricing </div><h2 class="text-[#1D1D1D] font-medium leading-[110%] text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] md:ml-8"> The best prices <br><span class="font-medium text-[#40BF69] block md:inline md:ml-20"> on the market </span></h2></div></div></section>`);
  _push(ssrRenderComponent(_component_HomeSectionChoosePlan, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeSectionCustomerReviews, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/studio/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue4.mjs.map
