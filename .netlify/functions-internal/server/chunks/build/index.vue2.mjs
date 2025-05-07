import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1 } from './img_1.png.mjs';
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
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="md:px-6 px-0 py-12 pt-[185px] md:mb-[100px] mb-[50px]"><div class="container mx-auto md:px-0 px-5"><div class="md:flex"><div class="text-[18px] font-light text-[#1D1D1D] mb-2 mt-[20px]">• Blog</div><h2 class="text-[#1D1D1D] font-medium leading-[100%] md:text-[100px] text-[30px] md:ml-[32px]"> NEWS AND <br><span class="font-medium leading-[100%] text-[#40BF69] md:ml-52 ml-0">USEFUL ARTICLES</span></h2></div></div></div><div class="container mb-24 px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"><!--[-->`);
  ssrRenderList(6, (index2) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: index2,
      to: `/news/${index2}`,
      class: "group space-y-4"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="relative w-full h-[255px] overflow-hidden rounded-[15px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="image" class="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 group-hover:-top-full"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="image" class="absolute top-full left-0 w-full h-full object-cover transition-all duration-500 group-hover:-top-[20px] mt-[20px]"${_scopeId}></div><p class="text-[#1D1D1D] font-medium text-lg md:text-xl leading-snug"${_scopeId}> Common UX painpoints in Dashboard-related projects you must know </p>`);
        } else {
          return [
            createVNode("div", { class: "relative w-full h-[255px] overflow-hidden rounded-[15px]" }, [
              createVNode("img", {
                src: _imports_1,
                alt: "image",
                class: "absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 group-hover:-top-full"
              }),
              createVNode("img", {
                src: _imports_1,
                alt: "image",
                class: "absolute top-full left-0 w-full h-full object-cover transition-all duration-500 group-hover:-top-[20px] mt-[20px]"
              })
            ]),
            createVNode("p", { class: "text-[#1D1D1D] font-medium text-lg md:text-xl leading-snug" }, " Common UX painpoints in Dashboard-related projects you must know ")
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue2.mjs.map
