import { defineComponent, computed, ref, watch, nextTick, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { c as useNuxtApp, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { useRoute, useRouter } from 'vue-router';
import gsap from 'gsap';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@vee-validate/rules';

const _imports_0$1 = "" + __buildAssetsURL("logoWhite.DEZmHjyr.svg");

const _imports_0 = "" + __buildAssetsURL("logo.CFA9ua_h.svg");

const arrowUp = "data:image/svg+xml,%3csvg%20width='18'%20height='20'%20viewBox='0%200%2018%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.75%203.42999V13.5363H14.6312V5.33193L3.03315%2016.93L2.25%2016.1096L13.8108%204.54878H5.60636V3.42999H15.75Z'%20fill='%2340BF69'/%3e%3c/svg%3e";

const arrowUpWhite = "data:image/svg+xml,%3csvg%20width='18'%20height='20'%20viewBox='0%200%2018%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.75%203.42999V13.5363H14.6312V5.33193L3.03315%2016.93L2.25%2016.1096L13.8108%204.54878H5.60636V3.42999H15.75Z'%20fill='white'/%3e%3c/svg%3e";

const menu = "data:image/svg+xml,%3csvg%20width='18'%20height='25'%20viewBox='0%200%2018%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%204.10938V5.16406H0V4.10938H18ZM3.16406%209.41797H18V8.36328H3.16406V9.41797ZM0%2013.6367H18V12.582H0V13.6367ZM7.41797%2017.8906H18V16.8359H7.41797V17.8906Z'%20fill='%23fff'/%3e%3c/svg%3e";

const menuWhite = "data:image/svg+xml,%3csvg%20width='18'%20height='25'%20viewBox='0%200%2018%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%204.10938V5.16406H0V4.10938H18ZM3.16406%209.41797H18V8.36328H3.16406V9.41797ZM0%2013.6367H18V12.582H0V13.6367ZM7.41797%2017.8906H18V16.8359H7.41797V17.8906Z'%20fill='%231D1D1D'/%3e%3c/svg%3e";

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const NAV_ITEMS = [
      { title: "Home", link: "/" },
      { title: "Studio", link: "/studio" },
      { title: "Works", link: "/works" },
      { title: "News", link: "/news" },
      { title: "Contact", link: "/contact" }
    ];
    const isHomePage = computed(() => route.path === "/");
    const isMobileMenuOpen = ref(false);
    const isMenuVisible = ref(false);
    const hoveredIndex = ref(null);
    watch(() => route.path, () => {
      isMobileMenuOpen.value = false;
    });
    const isActive = (itemLink) => {
      return itemLink === "/" ? route.path === "/" : route.path.startsWith(itemLink);
    };
    const rightContent = ref(null);
    const openMenuTimeline = ref(null);
    const closeButton = ref(null);
    const navItemsRaw = ref([]);
    const navItems = navItemsRaw;
    const menuPanel = ref(null);
    watch(isMobileMenuOpen, async (val) => {
      var _a;
      if (val) {
        isMenuVisible.value = true;
        await nextTick();
        gsap.set(menuPanel.value, { x: "-100%" });
        gsap.set(navItems.value, { y: 100, opacity: 0 });
        gsap.set(rightContent.value, { y: -100, opacity: 0 });
        gsap.set(closeButton.value, { y: -30, opacity: 0 });
        const tl = gsap.timeline({
          onReverseComplete: () => {
            isMenuVisible.value = false;
          }
        });
        openMenuTimeline.value = tl;
        tl.to(menuPanel.value, {
          x: 0,
          duration: 1.2,
          ease: "power4.out"
        });
        tl.to(navItems.value, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.6");
        tl.to(rightContent.value, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.1");
        tl.to(closeButton.value, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power4.out"
        }, "-=0.4");
      } else {
        (_a = openMenuTimeline.value) == null ? void 0 : _a.reverse();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-full absolute top-0 left-0 z-20 transition-all duration-300" }, _attrs))}><div class="container mx-auto px-4 py-4 md:py-6 xl:py-10"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "z-30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", isHomePage.value ? unref(_imports_0$1) : unref(_imports_0))} alt="Company Logo" class="h-8 md:h-10"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: isHomePage.value ? unref(_imports_0$1) : unref(_imports_0),
                alt: "Company Logo",
                class: "h-8 md:h-10"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center"><div class="${ssrRenderClass([isHomePage.value ? "border-[#FFFFFF4D]" : "border-[#1D1D1D4D]", "ml-6 lg:ml-12 border rounded-full p-1 flex gap-1 lg:gap-2"])}"><!--[-->`);
      ssrRenderList(NAV_ITEMS, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: item.link,
          class: ["py-2 px-3 lg:py-[6px] lg:px-[20px] rounded-full text-sm transition", [
            isActive(item.link) ? isHomePage.value ? "bg-[#FFFFFF1A]" : "bg-[#1D1D1D1A]" : "hover:bg-[#FFFFFF1A]",
            isActive(item.link) ? isHomePage.value ? "text-white" : "text-black" : isHomePage.value ? "text-white" : "text-[#1D1D1D]"
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav><div class="flex items-center gap-2 lg:gap-4"><button class="${ssrRenderClass([isHomePage.value ? "bg-white text-[#40BF69]" : "bg-[#40BF69] text-white", "font-semibold text-sm px-4 py-2 lg:px-5 lg:py-2.5 rounded-[30px] flex items-center transition"])}"> Start Project <img${ssrRenderAttr("src", isHomePage.value ? unref(arrowUp) : unref(arrowUpWhite))} class="ml-2 w-3 h-3" alt="Arrow up"></button><button class="p-2"><img${ssrRenderAttr("src", isHomePage.value ? unref(menu) : unref(menuWhite))} class="w-5 h-5" alt="Menu"></button></div></div></div><nav style="${ssrRenderStyle(isMenuVisible.value ? null : { display: "none" })}" class="fixed top-0 left-0 w-full h-screen z-40 inset-0 overflow-hidden"><button class="close-button h-[35px] w-[35px] md:top-10 md:right-25 absolute top-5 right-5 rounded-full border border-white text-white font-medium z-50 flex items-center justify-center">`);
      _push(ssrRenderComponent(unref(XMarkIcon), { class: "w-5 h-5" }, null, _parent));
      _push(`</button><div class="w-full h-full grid md:grid-cols-10"><div class="md:col-span-6 flex flex-col justify-center items-center bg-[#81BE94]"><ul><!--[-->`);
      ssrRenderList(NAV_ITEMS, (item, index) => {
        _push(`<li class="${ssrRenderClass([{
          "opacity-100": hoveredIndex.value === null || hoveredIndex.value === index,
          "opacity-30": hoveredIndex.value !== null && hoveredIndex.value !== index
        }, "text-5xl font-bold py-2 px-6 rounded-full text-white mb-2 transition-opacity duration-300"])}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          class: "w-full flex items-center justify-between"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.title)}</span><span class="ml-30 font-normal"${_scopeId}>+</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(item.title), 1),
                createVNode("span", { class: "ml-30 font-normal" }, "+")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="md:col-span-4 hidden md:flex flex-col justify-center items-center bg-[#B4E6C4] relative"><div class="text-center md:text-left mt-5"><img${ssrRenderAttr("src", _imports_0$1)} class="w-[200px]" alt="logo"><p class="text-[25px] text-[#fff] font-medium"> 541 Melville Geek,<br> Palo Alto, CA 94301 </p><p class="text-[25px] text-[#fff] font-medium mt-[10px]"> hello@hubfolio.agency </p><p class="text-[25px] text-[#fff] font-medium mt-[10px] underline"> +1 840 841 25 69 </p></div></div></div></nav></header>`);
    };
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const navItems = [
      { title: "Home", path: "/" },
      { title: "Works", path: "/works" },
      { title: "Studio", path: "/studio" },
      { title: "News", path: "/news" },
      { title: "Contact", path: "/contact" }
    ];
    const isActive = (path) => {
      if (path === "/") {
        return route.path === "/";
      }
      return route.path.startsWith(path);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-between bg-white text-black px-4 pt-20 pb-10" }, _attrs))}>`);
      if (unref(route).name !== "contact") {
        _push(`<div class="text-center group"><h1 class="text-[48px] md:text-[100px] font-semibold"> LET&#39;S MAKE <span class="inline-block relative"><span class="absolute -top-[60px] group-hover:-top-30 group-hover:-right-[180px] group-hover:scale-3d group-hover:text-[30px] -right-[40px] bg-[#40BF69] text-white text-[10px] rounded-full w-[62px] h-[62px] md:flex items-center justify-center leading-none transition-all duration-300 group-hover:w-[180px] hidden group-hover:h-[180px]"> CONTACT<br>US </span></span></h1><h1 class="text-[48px] md:text-[100px] font-semibold">SOMETHING GREAT!</h1></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container"><div class="flex flex-col md:flex-row items-center justify-between gap-10 mt-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex flex-col items-center md:items-start text-center md:text-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center md:text-left"><p class="text-[12px] font-normal text-[#A4A4A4] mb-[12px]">LOCATION</p><p class="text-[16px] font-normal text-[#A4A4A4]">152 Thatcher Road St, Mahattan, NY<br>10463, US</p></div><div class="text-center md:text-left"><p class="text-[12px] font-normal text-[#A4A4A4] mb-[12px]">Inquiry</p><p class="text-[16px] font-normal text-[#A4A4A4]">hello@hubfolio.agency<br>+0685689696</p></div></div></div><div class="flex space-x-2 mt-[51px]"><div class="w-10 h-10 rounded-full border border-[#1D1D1D1A] flex items-center justify-center hover:bg-gray-100 cursor-pointer">IG</div><div class="w-10 h-10 rounded-full border border-[#1D1D1D1A] flex items-center justify-center hover:bg-gray-100 cursor-pointer">X</div><div class="w-10 h-10 rounded-full border border-[#1D1D1D1A] flex items-center justify-center hover:bg-gray-100 cursor-pointer">Bē</div><div class="w-10 h-10 rounded-full border border-[#1D1D1D1A] flex items-center justify-center hover:bg-gray-100 cursor-pointer">GH</div></div><div class="container"><div class="border-t border-t-[#1D1D1D26] mt-16 pt-12 mb-10 flex flex-col md:flex-row items-center justify-between text-sm text-[#A4A4A4] gap-6"><p class="text-center md:text-left"> © 2024 <span class="font-normal text-[#1D1D1D]">Hubfolio Agency</span>. All Rights Reserved </p><div class="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-2"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path,
          class: ["font-medium transition", {
            "text-black": isActive(item.path),
            "text-gray-500 hover:text-black": !isActive(item.path)
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Cursor",
  __ssrInlineRender: true,
  setup(__props) {
    const { $gsap } = useNuxtApp();
    const cursor = ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "custom-cursor",
        ref_key: "cursor",
        ref: cursor
      }, _attrs))} data-v-892ae7c2><div class="cursor-inner" data-v-892ae7c2></div><div class="cursor-outer" data-v-892ae7c2></div></div>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Cursor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-892ae7c2"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { $scrollSmoother } = useNuxtApp();
    const showButton = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$3;
      const _component_Footer = _sfc_main$2;
      const _component_Cursor = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "smooth-wrapper" }, _attrs))}><div id="smooth-content">`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Cursor, null, null, _parent));
      _push(`<button style="${ssrRenderStyle(unref(showButton) ? null : { display: "none" })}" aria-label="Back to top" class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-primary-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></button></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
