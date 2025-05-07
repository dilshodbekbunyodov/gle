import { defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { a as _imports_0, _ as _sfc_main$2 } from './dot.svg.mjs';
import { a as _sfc_main$1 } from './server.mjs';

const _imports_1 = "data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.5%2012.5C2.5%207.78595%202.5%205.42893%203.96447%203.96447C5.42893%202.5%207.78595%202.5%2012.5%202.5C17.214%202.5%2019.5711%202.5%2021.0355%203.96447C22.5%205.42893%2022.5%207.78595%2022.5%2012.5C22.5%2017.214%2022.5%2019.5711%2021.0355%2021.0355C19.5711%2022.5%2017.214%2022.5%2012.5%2022.5C7.78595%2022.5%205.42893%2022.5%203.96447%2021.0355C2.5%2019.5711%202.5%2017.214%202.5%2012.5Z'%20stroke='%2340BF69'%20stroke-width='1.5'/%3e%3ccircle%20opacity='0.5'%20cx='16.5'%20cy='8.5'%20r='2'%20stroke='%2340BF69'%20stroke-width='1.5'/%3e%3cpath%20opacity='0.5'%20d='M2.5%2010.6538L3.48073%2010.513C10.459%209.51099%2016.4238%2015.5313%2015.3571%2022.5M22.5%2013.8846L21.5266%2013.7498C18.6828%2013.356%2016.1097%2014.7718%2014.7846%2017.0001'%20stroke='%2340BF69'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e";

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FindPlan",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F5F5F5] w-[98%] rounded-[30px] m-auto" }, _attrs))}><div class="container py-[60px]"><div class="md:flex items-start justify-between mb-[60px]"><h4 class="text-[64px] leading-none text-[#1D1D1D] font-medium"> Find a plan that’s <br><span class="text-[#40BF69]">right for you</span></h4><h3 class="text-[#1D1D1D] text-[18px] font-light flex items-center justify-center mb-0"><img${ssrRenderAttr("src", _imports_0)} class="mr-[12px]" alt="dot"> Enjoy Your 1 Week Free Trial </h3></div><div class="grid md:grid-cols-3 grid-cols-1 gap-5"><!--[-->`);
      ssrRenderList(3, (item, index) => {
        _push(`<div><div class="group bg-white rounded-[26px] border border-[#75798833] relative overflow-hidden transition-all duration-300 hover:z-10"><div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute inset-0 opacity-50 bg-[#80d49b]"></div><div class="inset-0 custom-gradient border-2 border-[#49c270] rounded-full absolute group-hover:-left-[47%] -left-[200%] -top-[58px] w-[800px] h-[800px] transition-all duration-400"></div></div><div class="relative z-10 py-[40px] px-[79px] transition-all duration-300"><div class="flex items-center"><img${ssrRenderAttr("src", _imports_1)} class="stroke-[#40BF69]" alt="picture"><span class="font-inter group-hover:text-white -all duration-300 ml-[12px] font-normal text-[20px] leading-[100%] tracking-[0] underline decoration-solid decoration-[0px] underline-offset-[0px] text-[#40BF69]"> View image </span></div><h1 class="font-[500] text-4xl leading-none mb-0 mt-[16px] group-hover:text-white group-hover:text-[44px] transition-all duration-400"> ELD Vehicle Subscription </h1><h4 class="my-[16px] text-[#757988] font-normal text-[18px] leading-none tracking-tight group-hover:text-white transition-colors duration-300"> ELD Vehicle Subscription </h4><h1 class="text-[#40BF69] group-hover:text-white text-[32px] font-medium pb-[28px] border-b border-[#75798866] group-hover:border-white transition-all duration-300"> $50 <span class="ml-[12px] text-[#757988] group-hover:text-white text-[20px] font-light transition-colors duration-300">per month with $192 upfront payment</span></h1><ul class="mt-[32px] mb-[45px] list-disc w-[90%]"><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> ELD Hardware and Software </li><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> HOS, IFTA, DVIR, GPS Tracking &amp; Back Office </li><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> HOS, IFTA, DVIR, GPS Tracking &amp; Back Office </li></ul><div class="flex items-center justify-center space-x-4 my-4 w-full"><span class="text-[#757988] text-[16px] font-normal group-hover:text-white">No of device:</span><button${ssrIncludeBooleanAttr(unref(counter) == 1) ? " disabled" : ""} class="w-[32px] h-[32px] rounded-full group-hover:border-white group-hover:text-white bg-transparent border border-[#BFE3CB] flex items-center justify-center text-[#40BF69]"> − </button><span class="text-[#757988] group-hover:text-white text-[16px]">${ssrInterpolate(unref(counter))}</span><button class="w-[32px] h-[32px] rounded-full group-hover:border-white group-hover:text-white bg-transparent border border-[#BFE3CB] flex items-center justify-center text-[#40BF69] mr-[30px]"> + </button></div>`);
        _push(ssrRenderComponent(_sfc_main$1, { label: "Buy now" }, null, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-[80px] flex items-center justify-center">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        label: "Let us help you",
        color: "text-[#1D1D1D]"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=FindPlan.vue2.mjs.map
