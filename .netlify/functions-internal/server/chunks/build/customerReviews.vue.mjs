import { defineComponent, mergeProps, unref, ref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { a as _imports_0, _ as _sfc_main$2 } from './dot.svg.mjs';
import { u as useRouter, a as _sfc_main$3, _ as _export_sfc } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "choosePlan",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F5F5F5] w-[98%] rounded-[30px] m-auto" }, _attrs))}><div class="container py-[60px]"><div class="md:flex items-start md:justify-between justify-center mb-[60px] md:px-0 px-5"><h4 class="md:text-[64px] text-[20px] md:text-left text-center leading-none text-[#1D1D1D] font-medium"> Choose <br><span class="text-[#40BF69]">Your Plan</span></h4><h3 class="text-[#1D1D1D] text-[18px] font-light flex items-center justify-center mb-0"><img${ssrRenderAttr("src", _imports_0)} class="mr-[12px]" alt="dot"> Enjoy Your 1 Week Free Trial </h3></div><div class="grid md:grid-cols-3 grid-cols-1 gap-5 md:px-0 px-5"><!--[-->`);
      ssrRenderList(3, (item, index) => {
        _push(`<div><div class="group bg-white rounded-[26px] border border-[#75798833] relative overflow-hidden transition-all duration-300 hover:z-10"><div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute inset-0 opacity-50 bg-[#80d49b]"></div><div class="inset-0 custom-gradient border-2 border-[#49c270] rounded-full absolute group-hover:-left-[100%] -left-[200%] -top-[60px] w-[800px] h-[800px] transition-all duration-400"></div></div><div class="relative z-10 py-[40px] px-[79px] transition-all duration-300"><span class="text-[#40BF69] group-hover:text-white text-[12px] font-bold py-[4px] px-[13px] border border-[#40BF69] group-hover:border-white rounded-full leading-none tracking-wider uppercase transition-colors duration-300"> POPULAR </span><h1 class="font-[500] text-4xl leading-none tracking-tighter mb-0 mt-[16px] group-hover:text-white group-hover:text-[48px] transition-all duration-400"> 150 Trucks </h1><h4 class="my-[16px] font-inter font-normal text-lg leading-none tracking-tight group-hover:text-white transition-colors duration-300"> Launch your business </h4><h1 class="text-[#40BF69] group-hover:text-white text-[32px] font-medium pb-[28px] border-b border-[#75798866] group-hover:border-white transition-all duration-300"> $50 <span class="ml-[12px] text-[#757988] group-hover:text-white text-[20px] font-light transition-colors duration-300">per month</span></h1><ul class="mt-[32px] mb-[45px] list-disc"><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> Weight Station Alerts </li><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> Instant Violation Warnings </li><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> Automated Reporting </li><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> Real-Time Device Analysis </li><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> 24/7 Online Support </li><li class="text-[#757988] group-hover:text-white text-[16px] font-normal mb-[8px] transition-colors duration-300"> Implementation Assistance </li></ul>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          label: "Lets start now",
          color: "text-[#1D1D1D]",
          onClick: ($event) => unref(router).push("/newAccount")
        }, null, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-[80px] text-center">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        label: "Leave a request",
        onClick: ($event) => unref(router).push("/contact")
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});

const _imports_1 = "data:image/svg+xml,%3csvg%20width='100'%20height='76'%20viewBox='0%200%20100%2076'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_526_539)'%3e%3cg%20clip-path='url(%23clip1_526_539)'%3e%3cg%20clip-path='url(%23clip2_526_539)'%3e%3cpath%20d='M0.961544%2016.9217C0.961544%2012.4025%202.78847%208.46015%206.34616%205.28707C9.90385%201.92169%2014.1346%200.190918%2019.0385%200.190918C21.0577%200.190918%2023.2692%200.671687%2025.5769%201.53707L25.1923%201.15246L27.5%202.21015H27.8846C28.6539%202.69092%2029.5192%203.26784%2030.5769%203.94092C30.5769%204.13323%2030.9615%204.614%2031.7308%205.28707C38.1731%2010.9601%2040.7692%2019.5178%2039.8077%2030.864C38.75%2047.2101%2029.0385%2062.0178%2010.6731%2075.1909C9.61539%2076.0563%208.46154%2076.5371%207.21154%2076.5371C5.19231%2076.5371%203.46154%2075.7678%202.21154%2074.1332C-0.0961486%2071.4409%200.288467%2068.9409%203.36539%2066.6332C18.3654%2055.7678%2026.5385%2043.9409%2027.7885%2031.2486C25%2032.8832%2022.0192%2033.6525%2018.9423%2033.6525C14.0385%2033.6525%209.90385%2032.0178%206.25001%2028.8448C2.69231%2025.4794%200.961544%2021.4409%200.961544%2016.9217ZM60.3846%2016.9217C60.3846%2012.4025%2062.2115%208.46015%2065.7692%205.28707C69.3269%201.92169%2073.5577%200.190918%2078.4615%200.190918C80.4808%200.190918%2082.6923%200.671687%2085%201.53707L84.6154%201.24861C85.3846%201.44092%2086.1539%201.82553%2086.9231%202.3063H87.3077C88.3654%202.78707%2089.2308%203.36399%2090%204.03707C90%204.22938%2090.3846%204.71015%2091.1539%205.38323C97.5962%2011.0563%20100.192%2019.614%2099.2308%2030.9601C98.1731%2047.3063%2088.4615%2062.114%2070.0962%2075.2871C69.0385%2076.1525%2067.8846%2076.6332%2066.6346%2076.6332C64.6154%2076.6332%2063.0769%2075.864%2062.0192%2074.2294C59.4231%2071.5371%2059.7116%2069.0371%2062.7885%2066.7294C77.7885%2055.7678%2085.9615%2043.9409%2087.3077%2031.2486C84.5192%2032.8832%2081.5385%2033.6525%2078.4615%2033.6525C73.5577%2033.6525%2069.4231%2032.0178%2065.7692%2028.8448C62.2115%2025.4794%2060.3846%2021.4409%2060.3846%2016.9217Z'%20fill='%2340BF69'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_526_539'%3e%3crect%20width='100'%20height='76'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_526_539'%3e%3crect%20width='100'%20height='76.92'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_526_539'%3e%3crect%20width='100'%20height='76.9231'%20fill='white'%20transform='translate(0%20-0.00146484)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

const _imports_2 = "" + __buildAssetsURL("handleImage.C82O7P8I.png");

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "customerReviews",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = ref([Navigation, Autoplay]);
    const activeIndex = ref(1);
    const onSlideChange = (swiper) => {
      activeIndex.value = swiper.activeIndex;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container m-auto py-[120px]" }, _attrs))} data-v-2bf9abe1><h3 class="text-[#1D1D1D] text-[18px] font-light flex items-center md:justify-normal justify-center" data-v-2bf9abe1><img${ssrRenderAttr("src", _imports_0)} class="mr-[12px]" alt="dot icon" data-v-2bf9abe1> Customer Reviews </h3><div class="grid md:grid-cols-2 grid-cols-1 items-start" data-v-2bf9abe1><div class="relative w-[300px] h-[300px] md:m-0 m-auto" data-v-2bf9abe1><div class="flex items-center justify-center" data-v-2bf9abe1><svg viewBox="0 0 500 500" data-v-2bf9abe1><defs data-v-2bf9abe1><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(1,150,250)" data-v-2bf9abe1></path></defs><g class="textcircle" data-v-2bf9abe1><text textLength="0" data-v-2bf9abe1><textPath xlink:href="#textcircle" textLength="940" data-v-2bf9abe1> TRUSTED BY CLIENTS - TESTIMINIAL - </textPath></text></g></svg></div><img${ssrRenderAttr("src", _imports_1)} class="w-[100px] h-[76px] absolute top-[114px] right-[95px]" alt="comma" data-v-2bf9abe1></div><div class="md:px-0 px-5" data-v-2bf9abe1>`);
      _push(ssrRenderComponent(_component_Swiper, {
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false
        },
        "slides-per-view": 1,
        breakpoints: {
          320: {
            slidesPerView: 1
          }
        },
        modules: unref(modules),
        onSlideChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(5, (item, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h5 class="md:text-[36px] md:text-left text-center text-[25px] font-medium text-[#1D1D1D] leading-tight tracking-tight" data-v-2bf9abe1${_scopeId2}> “GREEN Light ELD ability to create a high quality UIs stands out. It’s something we place a premium on. A studio with passionate, professional, fun and full creativity. Recommend!!” </h5><div class="flex items-center justify-between border-t border-[#B5B8C3] mt-[40px]" data-v-2bf9abe1${_scopeId2}><div class="flex items-center gap-4 mt-6" data-v-2bf9abe1${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="Bradley Gordon" class="w-12 h-12 rounded-full object-cover" data-v-2bf9abe1${_scopeId2}><div data-v-2bf9abe1${_scopeId2}><p class="text-lg font-medium text-[#1D1D1D]" data-v-2bf9abe1${_scopeId2}>Bradley Gordon</p><p class="text-sm text-[#BBBBBB]" data-v-2bf9abe1${_scopeId2}>CEO &amp; Founder, Archin Studio</p></div></div><div class="flex gap-2 mt-6 border border-[#B5B8C3] rounded-[30px] p-[12px]" data-v-2bf9abe1${_scopeId2}><!--[-->`);
                    ssrRenderList(5, (indexDot) => {
                      _push3(`<span class="${ssrRenderClass([{
                        "bg-[#40BF69]": unref(activeIndex) === indexDot,
                        "bg-gray-300": unref(activeIndex) !== indexDot
                      }, "w-3 h-3 rounded-full transition-colors duration-300"])}" data-v-2bf9abe1${_scopeId2}></span>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode("h5", { class: "md:text-[36px] md:text-left text-center text-[25px] font-medium text-[#1D1D1D] leading-tight tracking-tight" }, " “GREEN Light ELD ability to create a high quality UIs stands out. It’s something we place a premium on. A studio with passionate, professional, fun and full creativity. Recommend!!” "),
                      createVNode("div", { class: "flex items-center justify-between border-t border-[#B5B8C3] mt-[40px]" }, [
                        createVNode("div", { class: "flex items-center gap-4 mt-6" }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: "Bradley Gordon",
                            class: "w-12 h-12 rounded-full object-cover"
                          }),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-lg font-medium text-[#1D1D1D]" }, "Bradley Gordon"),
                            createVNode("p", { class: "text-sm text-[#BBBBBB]" }, "CEO & Founder, Archin Studio")
                          ])
                        ]),
                        createVNode("div", { class: "flex gap-2 mt-6 border border-[#B5B8C3] rounded-[30px] p-[12px]" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (indexDot) => {
                            return createVNode("span", {
                              key: indexDot + 1,
                              class: ["w-3 h-3 rounded-full transition-colors duration-300", {
                                "bg-[#40BF69]": unref(activeIndex) === indexDot,
                                "bg-gray-300": unref(activeIndex) !== indexDot
                              }]
                            }, null, 2);
                          }), 64))
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(5, (item, index) => {
                return createVNode(_component_SwiperSlide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("h5", { class: "md:text-[36px] md:text-left text-center text-[25px] font-medium text-[#1D1D1D] leading-tight tracking-tight" }, " “GREEN Light ELD ability to create a high quality UIs stands out. It’s something we place a premium on. A studio with passionate, professional, fun and full creativity. Recommend!!” "),
                    createVNode("div", { class: "flex items-center justify-between border-t border-[#B5B8C3] mt-[40px]" }, [
                      createVNode("div", { class: "flex items-center gap-4 mt-6" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "Bradley Gordon",
                          class: "w-12 h-12 rounded-full object-cover"
                        }),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-lg font-medium text-[#1D1D1D]" }, "Bradley Gordon"),
                          createVNode("p", { class: "text-sm text-[#BBBBBB]" }, "CEO & Founder, Archin Studio")
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-2 mt-6 border border-[#B5B8C3] rounded-[30px] p-[12px]" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (indexDot) => {
                          return createVNode("span", {
                            key: indexDot + 1,
                            class: ["w-3 h-3 rounded-full transition-colors duration-300", {
                              "bg-[#40BF69]": unref(activeIndex) === indexDot,
                              "bg-gray-300": unref(activeIndex) !== indexDot
                            }]
                          }, null, 2);
                        }), 64))
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/home/sections/customerReviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2bf9abe1"]]);

export { _imports_2 as _, _sfc_main$1 as a, __nuxt_component_1 as b };
//# sourceMappingURL=customerReviews.vue.mjs.map
