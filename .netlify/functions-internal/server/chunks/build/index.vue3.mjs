import { _ as _sfc_main$2 } from './buyNow.vue.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './TruckGreen.vue2.mjs';
import { _ as _sfc_main$3 } from './FindPlan.vue2.mjs';
import 'swiper/modules';
import 'swiper/vue';
import 'gsap';
import './server.mjs';
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
import './dot.svg.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeSectionBuyNow = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="px-4 sm:px-6 py-8 sm:py-12 pt-[100px] sm:pt-[150px] md:pt-[185px] mb-[80px] sm:mb-[100px] md:mb-[120px]"><div class="container mx-auto"><div class="flex flex-col md:flex-row md:items-start"><div class="text-[16px] sm:text-[18px] font-light text-[#1D1D1D] mb-4 md:mb-2 mt-2 md:mt-[20px]"> • Devices </div><h2 class="text-[#1D1D1D] font-medium leading-tight text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] md:ml-8"> Top-Tier ELD Devices <br><span class="font-medium text-[#40BF69] block md:inline"> At the best price </span></h2></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSectionBuyNow, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue3.mjs.map
