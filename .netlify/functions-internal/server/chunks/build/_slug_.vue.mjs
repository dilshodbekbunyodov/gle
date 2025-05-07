import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import RecentNews from './RecentNews.vue.mjs';
import { _ as _sfc_main$1 } from './FormComment.vue2.mjs';
import { a as _sfc_main$2 } from './server.mjs';
import './nuxt-link.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './img_1.png.mjs';
import './TextArea.vue.mjs';
import './Input.vue.mjs';
import 'vue-router';
import '@vee-validate/rules';

const _imports_0 = "" + __buildAssetsURL("truckBanner.DJ6PfmaM.png");

const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABcCAYAAAClWXHyAAAE0ElEQVR4Xu2b61EbQRCECYGfFDAqhUAGdgZ2BiYDnAFkgDOQMyAEhUAICoEQ8J7NQzVubDHbtz0a1FVfucrGNz2tZTV7Jx0dibVcLi/MbL1YLL75f/toKpdFa+ayNfPQ/nx84tb/zEcRyuK4yf/c3qg1c7PVzAvt7zdtJS/9z1dWuSzeasg1993/v4raJYvz8/Mb///Sqhn+6Rv4B6u9XME76p1Z3KXP4p0N/WbaptoK/uyvte+KZpF2AIs0tM1ebVP/Ubkseht6Zm+Hji1ZtSyakR/eXCcP+zqA7TJQvRdpFnM0tMVeDWDlsphWFjBCZV8GsHJZTIW8gTlJN3Rsafnn9uNfnudi9iymrWJaTb7w3KQZOrZULot2zWNFQ1tMA1iac2KCLLgD2II/MUdYeV8KlctixCCxA5sMT2Caj0vgbTSbk5OTpfcW0tN7zfajLglnZ2fy7blkFuL3mmd421GHymWxmPcAvyu87ahD5bKYtiNQYDjU7Siokllk2I7awf7O+1IoSRb33ldYSbajR9p21KEkJwheFlm2o7Zir7230coyNRvzA4vtYitQYDRZzrwr4G00vMHKchziucNEUKMfqrwFNYsMw0Rj430pVC4LS/Lb235zPnlvo2VJsjg9Pf3ivYX0NExsfAEBvLs0HcqQBfWIeDgWvapcFoff3leVzGK6GCgwHNqK7dDht3c+eCs2qJJZlFuxHbIkkzM1i3IrtkPlsrCKKzYoq5hFuRXboXJZtIt9BQWGQ12xQWW550y9g9cueOcLjKY1tPa+FLIEx0RqFtNxwBdQQLvP2qEsWbCfGF37AgJ4T0k6ZDmGK24WGQYK6ortULkssgwUGYar5eBvBr4FNQtLMFA0eI/BOmQJsqAOV5PKbUkdKpdFku35wftSKEkWj9QPFlqCLcnybM+3wNtQDtvzjGpZ3Htvo6FmUXJiDCrLzQ1qFm3FXvkCo6F+t6ZDVvHmRrvgGhQZDe/rFx2yBPfhjfnkaNIiwfdrMtx7npQhi5Lvv62pC+9ttEpmkeH915Kcfy3H+y83C0tw/qWf+YKyoudf+ZnP8gxYa+BtNNwsQIHhtFV75X0p5H0poGaRZaigft4oqCxZUE8TluTDddSpMagsDxioWSSZoB+9L4WyZMF+giSfGo19LAjKcmTBXeyW47Yc975rUFYxC0twLKCf+4KyHFlwH7i0i258kdFkeYEz3A+gZ2GHF/hFVjELX0AE99FYUBmeIh1e4BkFfCngfiYNFFBweIFf4WYBCijgNhUU8KWAmwUooIDbVFDAlwJuFqCAAm5TQQFfCrhZgAIKuE0FBXwp4GYBCijgNhUU8KWAmwUooIDbVFDAlwJuFqCAAm5TQQFfCrhZgAIKuE0FBXwp4GYBCijgNhUU8KWAmwUooIDbVFDAlwJuFqCAAm5TQQFfCrhZgAIKuE0FBXwp4GYBCijgNhUU8KWAmwUooIDbVFDAlwJuFqCAAm5TQQFfCrhZgAIKuE0FBXwp4GYBCijgNhUU8KWAmwUooIDbVFDAlwJuFqCAAm5TQQFfCrhZgAIKuE0FBXwp4GYBCijgNhUU8KWAmwUooIDbVFDAlwJuFqCAAm5TQQFfCrhZgAIKuE0FBXwp4GYBCijgNhUU8KWAmsUvtHsD7QRLa2wAAAAASUVORK5CYII=";

const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAqUlEQVR4XmNgIAAUFBQEpKWlDWRkZBxANIiPrgYOgJIKsrKy+4H4PzpGVwsGIA1ycnL30RXj1QSUmI+ukKAmHLb0A/1VD8Lo6sEAXQNQYT66GgyARZM9uhoMQDtNQIl+IL6PhFE0AQPmPbI8TNN8dIW4MNDW8+Ro2k+yJiDuB2sSAAJFRUV5GMai0B8mB1ILCQk0gK4Ja+ihg1FNUEBXTfuRMbAU0keWBwDLEbnW9+qxNQAAAABJRU5ErkJggg==";

const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAABM0lEQVR4Xp2U6xGCMBCEKYGfDBAmJViCHWgH0gl2QAmUQAmUYAmWYAl6CxGTzfFyZ3ZgksuX43IhSf6UtTa1k1KeC7QZ4Ak0Y0wvfnvuMI75sizPVVXd5gUy2crgfR5YEACy8Eng0RgXv+T9mWWZnRfJwOCC2lT0w4VChgxV3CJu5hjvM11mF+KOWsqaHGYuixoOkjINqJ1/HhyjOfpyALAjB3obPeTZu5pG874DMITDNFOtouCDfjF77BYl8LBRSmajLCcO/NMts0fJRK0EH3LQJSx0x55D06yWxJdZ6Zgtr2YNudof3kCybpilChmYqXsGhmjGHWDGqtyfDRcnghF4iG6kL5QCsDzPrwLEZdqVsVlqO1ZRFLW74gxgo5O6zcPThEXYCFkB8jUOTJ6X1RIo+gC0g0gkZCh/oAAAAABJRU5ErkJggg==";

const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAYAAACuLnWgAAABAElEQVR4XsWV4Q2DIBCFHaE/jQphBDdoR+gI3aDdoN3AERyhIzBCR2AERmjfIRiLZ6xI0ku+GL2H7w4Bi+IfoZQ61HXdVlV1xvVCSCmvTdPclwg6GoP7E42P3+sCL1dCCA3eOUBhFoaPLxMk+liYA+psajITZKJ3BpiplknmwjgTaolJxliRNqXWmdDKYJIxrqKyLBWKejH5RTabhPBjDKObkWwSAs87RpvPhL4l9oNhtPtN/ELRjIZlkwkdOSJhhU0rmyUjLB0VzPM1hhnw51aczAIa0GGai8Qqf6EbTfBdboxgL4Y272hCgdaOYlj32u9q41nrkvJO68c96T8TDD6FgtW4wKGIzwAAAABJRU5ErkJggg==";

const _imports_5 = "" + __buildAssetsURL("brat.25BRmrpA.png");

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[150px]" }, _attrs))}><div class="container"><div class="relative md:mx-0 mx-3"><img${ssrRenderAttr("src", _imports_0)} class="rounded-[15px]" alt=""><h3 class="text-white font-inter font-medium md:text-[55px] text-[20px] leading-[120%] absolute bottom-0 md:pl-[80px] pl-[20px] pb-[47px]"> Network of wormholes colonies extraordinary claims require. </h3></div><div class="md:flex mt-[114px] gap-20"><div class="md:w-9/12 w-12/12 md:px-0 px-5"><div class="text-gray-700"><p class="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold text-[#757988] font-normal text-[16px]"> New report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air. However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims. </p><h2 class="text-[#1D1D1D] font-medium text-[36px] mt-[21px] mb-[24px]"> What sizes do MacBook Airs come in? </h2><p class="text-[#757988] font-normal text-[16px]"> Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches the pre- 2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company discontinued that model in 2017. </p><div class="border border-[#1D1D1D26] px-[32px] py-[41px] flex items-center mt-[32px] w-full"><img${ssrRenderAttr("src", _imports_1)} class="w-[60px] h-[46px]" alt="logo"><div class="ml-[32px]"><h3 class="text-[20px] text-[#1D1D1D] font-medium"> And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.</h3><p class="text-[#40BF69] text-[14px] font-medium mt-[20px]">- Green Light ELD</p></div></div><div class="md:flex items-center gap-8 mt-[50px]"><img class="md:w-[400px] md:mb-0 mb-3 w-full h-[400px] md:m-0 m-auto object-cover" src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=2048x2048&amp;w=is&amp;k=20&amp;c=laH1UL7RxM9mqD9TSOYbAFbHBO3RokKTz3O1arUJ0_0=" alt=""><img class="md:w-[400px] w-full h-[400px] object-cover md:m-0 m-auto" src="https://media.istockphoto.com/id/1472269904/photo/business-people-having-a-meeting.jpg?s=2048x2048&amp;w=is&amp;k=20&amp;c=Ti4jmLjaes1mpQtIkDchDPk_oFYniUuMXVGM1qTSGiY=" alt=""></div><div class="mt-[50px]"><div class="mb-[24px]"><h1 class="text-[36px] font-medium text-[#1D1D1D] mb-4">Apple currently sells.</h1></div><div class="prose prose-lg max-w-none"><p class="mb-6 text-[#757988] text-[16px]"> A new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air. </p><div class="mb-8"><h2 class="text-[22px] font-medium text-[#1D1D1D] mb-4">Ordered &amp; Unordered Lists.</h2><ul class="list-disc pl-6 space-y-2 mb-6 text-[#1D1D1D] text-[18px]"><li>Yet this above sewed flirted opened ouch</li><li>Goldfinch realistic sporadic ingenuous</li><li>Abominable this abidin far successfully then like piquan</li></ul></div><div class="mb-8"><h2 class="text-[22px] font-medium text-[#1D1D1D] mb-4">Ordered &amp; Unordered Lists.</h2><ol class="list-decimal pl-6 space-y-2 mb-6 text-[#1D1D1D] text-[18px]"><li>Yet this above sewed flirted opened ouch</li><li>Goldfinch realistic sporadic ingenuous</li><li>Abominable this abidin far successfully then like piquan</li></ol></div><p class="mb-6 text-[#757988] text-[16px]"> However, Apple might not include it in the Air series when it launches it. As for the notebook&#39;s release date, the 15-inch MacBook isn&#39;t coming soon. It&#39;ll get a late 2023 release at best, according to the new claims. </p></div></div><div class="border-t border-[#1D1D1D26]"><div class="md:flex items-center justify-between"><div class="flex items-center gap-4 pt-[41px]"><h5 class="text-[#1D1D1D] text-[14px] font-normal">Tags :</h5><span class="text-[#1D1D1D] font-normal text-[12px] py-[5px] px-[15px] bg-[#1D1D1D08] rounded-[30px]">Tech</span><span class="text-[#1D1D1D] font-normal text-[12px] py-[5px] px-[15px] bg-[#1D1D1D08] rounded-[30px]">Ui-ThemeZ</span></div><div class="flex items-center gap-4 pt-[41px]"><h5 class="text-[#1D1D1D] text-[14px] font-normal">Share :</h5><span class="text-[#1D1D1D] font-normal text-[12px] h-[35px] w-[35px] flex items-center justify-center bg-[#1D1D1D08] rounded-[30px]"><img${ssrRenderAttr("src", _imports_2)} class="w-auto" alt="facebook"></span><span class="text-[#1D1D1D] font-normal text-[12px] h-[35px] w-[35px] flex items-center justify-center bg-[#1D1D1D08] rounded-[30px]"><img${ssrRenderAttr("src", _imports_3)} class="w-auto" alt="facebook"></span><span class="text-[#1D1D1D] font-normal text-[12px] h-[35px] w-[35px] flex items-center justify-center bg-[#1D1D1D08] rounded-[30px]"><img${ssrRenderAttr("src", _imports_4)} class="w-auto" alt="facebook"></span></div></div><div class="bg-[#fbfbfb] p-[40px] border-b border-[#1D1D1D26] mt-[32px] flex items-center"><img class="w-[100px] h-[100px] object-cover rounded-[5px]" src="https://picsum.photos/200/300?random=1" alt=""><div class="ml-[30px]"><h4 class="text-[20px] text-[#1D1D1D] font-semibold">Chris Smith</h4><h6 class="text-[#757988] text-[16px] font-normal mt-[12px]">Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.</h6></div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></div><div class="md:w-3/12 w-12/12 md:px-0 px-5"><div class="border-t border-[#D9D9D9] border-b py-[60px] text-center"><h4 class="text-[40px] text-[#1D1D1D] font-medium text-center mb-[24px] leading-12"> Get Started with Green Light ELD </h4>`);
      _push(ssrRenderComponent(_sfc_main$2, { label: "Leave a request" }, null, _parent));
      _push(`</div><div class="mt-[50px]"><h4 class="text-[#1D1D1D] text-[22px] font-medium mb-[32px]">Latest Posts</h4><!--[-->`);
      ssrRenderList(3, (item, index) => {
        _push(`<div class="flex items-center mb-[24px]"><img${ssrRenderAttr("src", _imports_5)} class="rounded-[5px] w-[90px] h-[100px]" alt="brat"><div class="ml-[25px]"><span class="text-[#1D1D1D] font-normal text-[12px] py-[5px] px-[15px] bg-[#1D1D1D08] rounded-[30px]">Web Design</span><h5 class="text-[#1D1D1D] font-medium text-[17px] mt-[10px]"> ways to quickly increase traffic to your website </h5></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(RecentNews, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_.vue.mjs.map
