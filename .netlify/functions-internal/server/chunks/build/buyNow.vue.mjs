import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { gsap } from 'gsap';
import { a as _sfc_main$1 } from './server.mjs';

const _imports_0 = "" + __buildAssetsURL("pt3.D1wevYvT.png");

const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAYAAADn/TAIAAAJL0lEQVR4Xu2d6XEbORCFFYIz8GawysCbgTcDOwOxTA4v/bD/WOTIrvJmYGfAEBQCQ3AICsGL7kGDDXB4zwXgfVVTPmYkHnjT/dA45u4uI0ajL2+K4ut9MV99nMzLz8Vy/bNYrDfm2E4X6990mL//qTvU+Rc+zM/S7xhPn/6dzFf/0O8OXw9ECDUkN+pi/YPEcUwUjR3L8tX8+SKCgpgigBqJ7nwrlO1eo7qGLbfjeRUtpovyw+Tx2/ti+Xw/fvz+lo7w9wpyvlg8v6ODf5ai1qLcTOYUgVg0+69p3gu9J3pv4e8EPcGpx6Qdusv3Gs78mxp0MjONZsRxTBRNQQKk1+LXJDHti4iODYkO0agH6O6dLstNKBYWCkeB53dDaRh6L/SeaoXEPgmRqFVICNPl6kudWMyd/jAUoRxjNF/99YmNuS+iyniXH+bmfPgz4Eroy2TfogXDaaj8HINYDiEiKkLTbqIQBHQD9OXZ7rIfXUzoD6+Nncpwl1QWgICuhQ2vFgxFGtMLojs0vDY16DPSZ4WALqDOw1DvJOZ0dC11AqLvJrwue7iXpHK9MYqbHCLMKUIBiYkOr8uOKsrscnuqHuZWRsuv94U20TmnLyrJu7REf87WD+E1wGeyeBrJd5Zd9LHm9z8dZZCWzofTVzXQKmk9fR9I4dV5GUSZm+Doo7xPsqmrWK4+qh7Tb0SZ27HRR7zPa3Kpi7vZYuyoJpN6aO2Q0ZcfbyhdueiTSrd9ulj9cqJBamqNanB353vC89HAJljmxXCKQje7bcaLctdTNd99dJGdx5l2k6ngZzok8D3baEyz13OCaHpBiyeKHhdEMxyiEY/naSCaQRCmrUF6HohmmITiCc/3ihpCgGgGiCee5fpneL4XXHHPdAMhmuHC4pEB0r6LhHZpCkWaPzTaHZ4Hw4LmPUl79TY8Uc0JrhRMVcvwPBgmanD0tfOeFk/AsjmTpneG58GwmdhhIGrDTntanhnu8oVBI9DAqJjlzsa1tK+BGY4XbZZb96deZRgj3dGj/U6rmUPWO9F0z/AciJNiNw11E55rBJeiUK9JCp2yWtkAASkqXSRlNd7LUlM/f4fnQBpIymqsJmcnZXEvajZb/x2eB2mgqsrNGGW3AcB8IINjoDXcqtpbB0J1tIEhTh87is7tfdNwBKJNfrilNtdGHUSbPOHhCNs9vyrqINrki2ytcvEANqJN3iivc1kPy1WJZy2VocHgKa6p6+yWuGD1Za7ouk54rhb1A6gSZ85FY1hiisd9zUkFg0FtZHDcstiZYTDFgFF6OG6SxRRjvg0QxCQfzUAmTfFYxdGLQFbQczJs1DkcTJCmQMjJdCW9KaQpECLpqrZ3JYNbFxV8QBZI76p2CML02e1uEyj6AZ9dba/0d7vQ3XDvBAB3/oi553N400H4G3AE53Nm3967/zyawwC4Ux5Ya6RWTQAoJCt5Mybc3rjF13t1LQAONUerGvzWBZ7gWgA8PIOMwh84F1eyocxUm7vATcj+Qb3vtdcwMheZxzJdjwoV48awqZ+PlMTjacVTEWgE/SSXlMTj5qLTypfC7Y+CoYYmSVE8nq2BcNojNfEU1dOI//CYVWFXNIwfv78NLwS3k5J4vFoOhNM+qYgnFA5/mPAi0CypiMfpBcLpjhTEk4xwqDFiOgq3SjZO8SQjHN0IsR69PZDjCuQ9QzgDOGIqvsp7jl44YSoY+qGeWcoH/V/4mYaMFg5/EHTH20dt+xulaMLuOITTAbGLhvCFo+dYgFZIQTSEN3dL1otjvnE7pCIawhcOplW0RkqiIbxpFfRhUvhQQyM10RCeVjwVgUZIUTSEZ2u8ORagEVIUDVHouVtYHtM8qe78sbd+vEAtB5xgl5lUgEGXHJyidmOK2gXlAChq06+bvX5sg0CQNWKMvax0coNAkD1WH/7GSnzCjlnVbhAIsubgVm5EbQ4D4O7Exlvq4R/wOcBD/E3tos2DGwSCrNEPvQvPOZyyZuuH8BzIk7MeeucuQroCFgkmR6fdIF0Bjfds1lN6MBdVww/oXWXPRVNuLn4WI0iWi5/NetGzGEGSXPVsVin4wCTny1UPvdMmmQxSeB6kjWeKL21/GYKgpwKH50DayJOgzzLFIaQ0Mcknu2IgGW6KNoKsuaLoE54DaXJTtBFU1IHXyYBGoo0gUac49bR7ED2NRBtB97BQ10mXYvksqxhujzYC6jrpI1XiRoea7Jzk6hdPn0bheRA3k0U5soHh/CrxuegxLBjldGBDbK3IRVXiS5guSy5DI2WlA7Ult2kThvgQnlFGyooenaIaM8SHUIv3kLIiRtdsWktRITKORU4cwxHxQW3melF1S17aQveyMAgaH/LMUE5RXd/4PBwBvxMdbrcw03at+5pDqFURqCpHwHj6JP60O19zCFVVhlkeMLpe02h1+BYmi9UvMcsQz/CgNunFDJ+D7HYB8QwLLRpz7O820Te2OAjxDIhQNJ33oM7FTvziNwrx9EsgmvYrw7cC8fRPdKIRbI0HaasH9tJTbN+99jzmeKUaQngNaBae+mK73IP2NOfg1mdR9InsibcxoUa6250i0SWqSMhLbaK+EwZGNWBZ1dHoGExxryk+0fCEDaPwPc3g+Rnz3fY+jNAWusfFdwcGR6+GU9POz8TTc7oWMs3a95jjBdHnfHjMye0CWg0hZJX6OXXtos8ros9pvChDqSnXniqnrt1KUfY+eBrxPnaFiYsyJmJvsooyhwiiD88qRPqy5ne3soS9zNnbquWE7rbnLCCKJmp6J6cl+m4QZY4Qpq+cBMTGlxb+73pLXMyDYC6gVkCL9SbFKaqhh3GCyeBmaY06AZGJNgbxQ8xRiCu+NHFcRxdKSdS9jvhzDQ76MvdMdHW8xCKiyrs8P+xFF3iYbqCeRRiFRETUAENJZyQEei92ScqeWOjBGugl9QA1TBWFvC6rL6TF+gcvC+mgPkRRkV6LXpOFotOQiyxVhER0GRB095JHoEcA1oiousurO3/DXX8jOooIdFCjH/MWcp4EyELknzW/o9r+bLsnEneU2+o9Pb+DWCKA08Tjt/dV6qq5+9s45uS/yg0JhV4bQkkENqcUlaygxsYnkahYWNTo3PA1ghBRVMLYkjiqny0/U9qh/fNyE8n/4OhjjaCFabIAAAAASUVORK5CYII=";

const _sfc_main = {
  __name: "buyNow",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Navigation, Autoplay, Pagination, EffectFade];
    const swiperInstance = ref(null);
    const counter = ref(1);
    const onSwiperInit = (swiper) => {
      swiperInstance.value = swiper;
      animateSlide(swiper.slides[swiper.activeIndex]);
      swiper.on("slideChangeTransitionStart", () => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const prevSlide = swiper.slides[swiper.previousIndex];
        animateOutSlide(prevSlide);
        animateSlide(currentSlide);
      });
    };
    const animateSlide = (slide) => {
      gsap.killTweensOf(slide.querySelectorAll("*"));
      const elements = slide.querySelectorAll("span, h1, h2, img");
      gsap.set(elements, { opacity: 0, y: 30 });
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });
    };
    const animateOutSlide = (slide) => {
      const elements = slide.querySelectorAll("span, h1, h2, img");
      gsap.to(elements, {
        opacity: 0,
        duration: 0.5
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container my-[127px] mySwiper" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules,
        onSwiper: onSwiperInit,
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false
        },
        "slides-per-view": 1,
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 1e3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          clickable: true,
          el: ".swiper-pagination"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(5, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-8 flex flex-col items-center justify-center relative"${_scopeId2}><div class="mb-2"${_scopeId2}><span class="text-[40px] font-medium text-green-500 py-[6px] px-[14px] rounded-full border border-green-500"${_scopeId2}> 13${ssrInterpolate(index)}$ </span></div><div class="text-center mb-2"${_scopeId2}><h1 class="font-medium text-[128px] leading-none tracking-[-4px] text-center"${_scopeId2}> PT3${ssrInterpolate(index)} ELD </h1><h2 class="font-inter font-medium text-[128px] leading-none tracking-[-4px] text-center [leading-trim:cap_height] text-[#40BF69]"${_scopeId2}> Device </h2></div><div class="max-w-xs"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="PT30 ELD Device" class="w-full transform scale-180"${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-8 flex flex-col items-center justify-center relative" }, [
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("span", { class: "text-[40px] font-medium text-green-500 py-[6px] px-[14px] rounded-full border border-green-500" }, " 13" + toDisplayString(index) + "$ ", 1)
                        ]),
                        createVNode("div", { class: "text-center mb-2" }, [
                          createVNode("h1", { class: "font-medium text-[128px] leading-none tracking-[-4px] text-center" }, " PT3" + toDisplayString(index) + " ELD ", 1),
                          createVNode("h2", { class: "font-inter font-medium text-[128px] leading-none tracking-[-4px] text-center [leading-trim:cap_height] text-[#40BF69]" }, " Device ")
                        ]),
                        createVNode("div", { class: "max-w-xs" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "PT30 ELD Device",
                            class: "w-full transform scale-180"
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="swiper-button-prev"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="rotate-180" alt="prev"${_scopeId}></div><div class="swiper-button-next"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="next"${_scopeId}></div><div class="flex items-center justify-center mt-10"${_scopeId}><div class="swiper-pagination"${_scopeId}></div></div>`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(5, (item, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-8 flex flex-col items-center justify-center relative" }, [
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("span", { class: "text-[40px] font-medium text-green-500 py-[6px] px-[14px] rounded-full border border-green-500" }, " 13" + toDisplayString(index) + "$ ", 1)
                      ]),
                      createVNode("div", { class: "text-center mb-2" }, [
                        createVNode("h1", { class: "font-medium text-[128px] leading-none tracking-[-4px] text-center" }, " PT3" + toDisplayString(index) + " ELD ", 1),
                        createVNode("h2", { class: "font-inter font-medium text-[128px] leading-none tracking-[-4px] text-center [leading-trim:cap_height] text-[#40BF69]" }, " Device ")
                      ]),
                      createVNode("div", { class: "max-w-xs" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "PT30 ELD Device",
                          class: "w-full transform scale-180"
                        })
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64)),
              createVNode("div", { class: "swiper-button-prev" }, [
                createVNode("img", {
                  src: _imports_1,
                  class: "rotate-180",
                  alt: "prev"
                })
              ]),
              createVNode("div", { class: "swiper-button-next" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: "next"
                })
              ]),
              createVNode("div", { class: "flex items-center justify-center mt-10" }, [
                createVNode("div", { class: "swiper-pagination" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-10 z-50"><div class="flex items-center justify-center space-x-4 mt-4 w-full"><span class="text-[#757988] text-[20px] font-normal">No of device:</span><button${ssrIncludeBooleanAttr(unref(counter) == 1) ? " disabled" : ""} class="w-[36px] h-[36px] rounded-full bg-white border border-[#BFE3CB] flex items-center justify-center text-[#40BF69]"> − </button><span class="text-[#757988] text-[20px]">${ssrInterpolate(unref(counter))}</span><button class="w-[36px] h-[36px] rounded-full bg-white border border-[#BFE3CB] flex items-center justify-center text-[#40BF69] mr-[30px]"> + </button>`);
      _push(ssrRenderComponent(_sfc_main$1, { label: "Buy now" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("modules/home/sections/buyNow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=buyNow.vue.mjs.map
