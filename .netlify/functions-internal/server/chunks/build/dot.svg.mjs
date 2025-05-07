import { defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdvanceButton",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    color: { default: "text-white" }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "transform flex items-baseline cursor-pointer transition-all duration-400 group" }, _attrs))}><div class="bg-[#40BF69] transform scale-[0.2] group-hover:scale-[1] rounded-full border border-[#40BF69] mr-[12px] transition-all duration-400 h-10 w-10 flex items-center justify-center"><svg class="opacity-0 group-hover:opacity-100 mr-[50px] group-hover:mr-0 transition-all duration-300" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.375H9.75M9.75 5.375L5.375 1M9.75 5.375L5.375 9.75" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="${ssrRenderClass([_ctx.color, "font-medium text-base pb-3.5"])}">${ssrInterpolate(_ctx.label)} <div class="w-full h-[1px] bg-[#40BF69] mt-[14px] group-hover:w-[0px] transition-all duration-400"></div></div></div>`);
    };
  }
});

const _imports_0 = "data:image/svg+xml,%3csvg%20width='7'%20height='7'%20viewBox='0%200%207%207'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='7'%20height='7'%20rx='3.5'%20fill='%231D1D1D'/%3e%3c/svg%3e";

export { _sfc_main as _, _imports_0 as a };
//# sourceMappingURL=dot.svg.mjs.map
