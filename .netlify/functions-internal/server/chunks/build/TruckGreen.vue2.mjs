import { defineComponent, ref, useTemplateRef, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { c as useNuxtApp } from './server.mjs';

const _imports_0 = "" + __buildAssetsURL("truck.CxajCYuv.png");

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TruckGreen",
  __ssrInlineRender: true,
  setup(__props) {
    const moved = ref(false);
    const { $gsap } = useNuxtApp();
    useTemplateRef("box");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen custom-gradient cursor-pointer overflow-hidden flex items-center justify-between px-8 py-18 rounded-[30px] group w-[99%] m-auto my-[120px] relative" }, _attrs))}><div class="absolute inset-0 z-0"><div class="absolute inset-0 bg-[#bee5ca]"></div><div class="${ssrRenderClass([moved.value && "-left-[48%]", "inset-0 custom-gradient border-2 border-[#49c270] rounded-full absolute -left-[45%] -top-[255px] w-[2810px] h-[2823px] transition-all delay-300 duration-1500 ease-in-out"])}"></div></div><div class="z-10 text-left w-full flex justify-end mx-auto"><div class="${ssrRenderClass([moved.value && "pl-10 lg:w-10/12", "mt-[70px] mb-[60px] lg:w-8/12 transition-all duration-1500 ease-in-out delay-300 flex flex-col items-start justify-center text-left"])}"><h1 class="text-white text-[32px] md:text-[48px] font-medium leading-10"> We will provide you with everything <span class="text-white/60 md:text-[40px] font-medium">you need</span></h1><h2 class="text-white/60 text-[28px] md:text-[40px] font-medium mt-2"> for a safe ride of your truck. </h2></div></div><img id="truck-img" class="absolute scale-[1.3] z-10 translate-x-[70%]"${ssrRenderAttr("src", _imports_0)} alt="truck"></div>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=TruckGreen.vue2.mjs.map
