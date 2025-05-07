import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAZCAYAAAA4/K6pAAAAfklEQVR4XmNgoCaQlZUNkJGRcUAXJwrIyck1AA34D8JAQxrQ5fECoKYEmGayDAHaXo9uAEmGKCgoCAANOY9uwKghNDQEKB6Prh4rGFSGKKBrBmFgeJxHV4sB8LkAaEA9unoUMKp5yGgGATncJRJhzSAgLS1dQLZmGEB2BSmaAQP2whoWTzKWAAAAAElFTkSuQmCC";

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container my-[120px]" }, _attrs))}><div class="flex items-center justify-between md:px-0 px-5"><h1 class="text-[#1D1D1D] font-medium md:text-[48px] text-[22px] leading-[100%]"> Recent News </h1><button class="text-[#1D1D1D] font-medium text-[14px] md:py-[14px] py-[8px] md:px-[26px] px-[10px] rounded-full border border-[#1D1D1D4D] flex items-center"> All Articles <img${ssrRenderAttr("src", _imports_0)} class="ml-[18px] h-[15px] w-[9px]" alt="arrow"></button></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[50px] md:px-0 px-5"><!--[-->`);
  ssrRenderList(3, (index) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: index,
      to: `/news/${index}`,
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
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/RecentNews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RecentNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { RecentNews as default };
//# sourceMappingURL=RecentNews.vue.mjs.map
