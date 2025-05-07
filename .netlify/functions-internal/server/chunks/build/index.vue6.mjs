import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { I as Input } from './Input.vue.mjs';
import { a as _sfc_main$1, _ as _export_sfc } from './server.mjs';
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

const _imports_0 = "" + __buildAssetsURL("truck2.BDSXixR7.png");

const GoogleIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADb0lEQVR4Xs2XzWsTQRiHA01RFCEeFA9CF48iGOpu8CLO7lYQPTR4EQ9iQNRYwebsJRGy7UUIHsTjoiB4UHpRCrbJ2oPgLX+AhwE9tE0iK5JY+gHjTDbbZt+Zbne3u9UfPJSEzDtPZt6ZbFOpiMEIZVraeKGlKWZLV5oUTCFD0NeyRf+aHT13Z/nqRQnWSCRUqNDWFTbxsExAZIvJwpqxhIm19BzmJ41CDncm5Ek4R6SwrYm+YntiYpTNwDkDZ1XP5amcLSgcIzkcqT9XNLnEF0uGFV2ZhvP75iDlVjW5DOf3TeuKkoVFgiOzdsD8+2JCy7FeCHdSqZCm1Nqqchk2O3vdUeXJwT3JjQ0tx0IHCosJoWJQarcso6w0LBpJzlk9gQhgVVMwWzE4PkjaE7lyJDmW9TfHzJ+3znFCUI6tBhybeIh1WNpcTBPG78ppTszln8ixbNbTNVeQ0audJO1r42D1Im5NHKFSzWFBxvr7I6Rz4/z21sIxBxZipTJQzmXjwyHyq3SGSl5I5gkkSDYX0giKQezKKQmO2y2a0S1oRs+MA2R0s6mNxdFpKORhId2EEn5xindJHOjGn2l2QMqclJc5KOGXOAVprXJqqz5qCqR2oF8ASvglVsFqzwwiWIMSfoldEN6BENqjJpTwS+yC//MhcXpwcSTPSQHYXQlFdkucgv1T7HdR2/WjZKahE7T0IPAjOarYGa1KxgJhdG0oNYw6s+Y8NW3VRzCU+1E/Tm5atwmyHjJi/6ljlzAUgrAv2/8wvAs/Ns6S69ZdV27A/RKYY1/ZqxVUo7vT+xufRrOu3PPGJSC2jY2se9mhOSIHza5JUIij2vVeb98aJ6zHjTyUgmBkFSXPwJBBFZLRZnqYEwLQ7ZW8A60iEgiJwFFXkq2cavSaUAaiVrsWHNsPnbwmEBKzxD4bfDXpmJL69pXvqd0WdE8vDLJKGWeFBEJibPS5aDqrX/LclU4t9v5Upf85d8z8E6I++85JDeH/yxViq0VQ4f4X3BESwSRffoVi7ORirvdEoZIFrmgSvJ7zCCLDDt7bVLLMFUyCdy/6W46qa+H/raAF8miv7do/Npp/Gl7ODTupKNzBCQOOemVxGfQlFkwSBdtpIe/JjyWOaNESTBqEZmJiMM7WM9kpcyAMexUPhEz2uKZ9eTQGawTJX7AjpzhNO/COAAAAAElFTkSuQmCC";

const FacebookIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACuElEQVR4Xr2Yu27bMBSG/QjZRG3ZOnVr5gbNE7Qv0LyBvURShyIGumSLO6aL13Qy0BfwkGQz4CVrIKBDxwqUFARtkqrnyJYtH5ISKZH5gQ82zNvvc3iTBoOOYlF26If50AuyGQvT2A/TBD4LBL/D78uyLMhOsS5t70R7o2SPRXxcN2NADExZlOzTfnsLjfkhn0gG7Yo9o37ARx0j1kbMPuUf6XhGshw1KV6YndNxW1XOtTCb085c4QV8iWNSH0rhCqSdvABz6kMqm2k9OMt2oOWU1nSzKD2mjUz5cHFf3Nw9FfzhXyETltE2dSDdI+qrFC57ttqrhEa6fF88Uj+Cfv5+FtrV8YI0kc5HhnuTpIEu367/Ui9StRlEhFSvoydU1AXTqisdg8hOFFnP6F0u9KKH0jWIZ3jdYCxUMEC1IFAXV3+Ko6958QZWcQVtLwPn4soc3DRooQmvxhn1tBFGltY3IkoOB+V1iBYYcHCWU18bHU1yob4JHlznYGNO8T4nFOrSZFA3nSogzTMw2O9Yc2kQiDGCva5SLg2WC4X+aIpLg4iRQZMNWSXcdmi/TRil2IbBzz8ehH5VVCmOaYEKGwbfQx+0XxV4kTXaZmwYNNkb19tMPqQFKmwYpH02gucxHidCgQL89zd3jwIq3f562ql3uTBbIOwke1uexyYLheJum+Hx9jbT4zx2ZzCdbgzuj/ExU6ighTOD9M0DnMnnQiUNHBncRq8SRrHLXLRvkMdC9Cr5QTISGzRj3WCQNr+vMU21TYNwcjQ/uFeCynPaWIUtg+WxpqvVfORaF1lLBufSh/U26aS7r0HttKrETpLjcmVJOu9jEDKUeCEf0vE6af3mYUoH6WoQo9YppW3aGt1GVNcgRowF/NSJMZnwpoFn+LvJ/Qy8LIGk5g2/x6+/ZDMwNtzcSjroPyLEM8OCoYBqAAAAAElFTkSuQmCC";

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      firstName: "",
      phone: "",
      lastName: "",
      password: "",
      email: "",
      confirmPassword: "",
      agreeTerms: false,
      // Step 2 fields
      companyName: "",
      timeZone: "",
      usdot: "",
      numTrucks: "",
      companyAddress: ""
    });
    const activeStep = ref(1);
    const submitForm = () => {
      console.log("Submitted data:", formData);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col lg:flex-row min-h-screen lg:gap-40" }, _attrs))} data-v-211f7aa7><div class="w-full lg:w-[75%] flex flex-col px-6 lg:pl-[100px] py-4 overflow-y-auto z-50" data-v-211f7aa7><div class="flex-grow" data-v-211f7aa7><h1 class="text-4xl sm:text-5xl lg:text-[80px] font-semibold leading-tight whitespace-nowrap" data-v-211f7aa7><span class="text-[#40BF69]" data-v-211f7aa7>NEW</span><span class="text-[#1D1D1D]" data-v-211f7aa7> ACCOUNT</span></h1><div class="my-6 flex items-center justify-between w-full" data-v-211f7aa7><div class="${ssrRenderClass([{ "bg-opacity-30 text-[#40BF69]": unref(activeStep) < 1 }, "w-8 h-8 flex items-center justify-center rounded-full text-white bg-[#40BF69]"])}" data-v-211f7aa7> 1 </div><div class="relative flex items-center justify-center w-[90%] h-1.5 bg-[#EFF0F6] rounded-full overflow-hidden mx-2" data-v-211f7aa7><div class="absolute top-0 left-0 h-full bg-[#40BF69] rounded-full transition-all duration-800 ease-in-out" style="${ssrRenderStyle({ width: unref(activeStep) === 1 ? "50%" : "100%" })}" data-v-211f7aa7></div></div><div class="${ssrRenderClass([unref(activeStep) >= 2 ? "bg-[#40BF69] text-white" : "bg-gray-200 text-gray-400", "w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out"])}" data-v-211f7aa7> 2 </div></div><div class="relative h-auto min-h-[300px]" data-v-211f7aa7>`);
      if (unref(activeStep) === 1) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-3 transition-all ease-out duration-500" data-v-211f7aa7>`);
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).firstName,
          "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
          label: "First Name",
          "input-type": "simple",
          placeholder: "Ex: Eliza"
        }, null, _parent));
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).phone,
          "onUpdate:modelValue": ($event) => unref(formData).phone = $event,
          label: "Phone",
          "input-type": "simple",
          placeholder: "Ex: +998911234567"
        }, null, _parent));
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).lastName,
          "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
          label: "Lastname",
          "input-type": "simple",
          placeholder: "Ex: Maguire"
        }, null, _parent));
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).password,
          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
          label: "Password",
          "input-type": "simple",
          type: "password",
          placeholder: "Password"
        }, null, _parent));
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).email,
          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
          label: "Email",
          "input-type": "simple",
          type: "email",
          placeholder: "Ex: jalil18@gmail.com"
        }, null, _parent));
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).confirmPassword,
          "onUpdate:modelValue": ($event) => unref(formData).confirmPassword = $event,
          label: "Confirm password",
          "input-type": "simple",
          type: "password",
          placeholder: "Confirm password"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-3 transition-all ease-in duration-500" data-v-211f7aa7>`);
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).companyName,
          "onUpdate:modelValue": ($event) => unref(formData).companyName = $event,
          label: "Company Name",
          "input-type": "simple",
          placeholder: "Ex: Apple"
        }, null, _parent));
        _push(`<div class="flex flex-col" data-v-211f7aa7>`);
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).timeZone,
          "onUpdate:modelValue": ($event) => unref(formData).timeZone = $event,
          label: "Time zone",
          "input-type": "select",
          placeholder: "Ex: 9 am"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option value="" disabled hidden data-v-211f7aa7${_scopeId}>Ex: 9 am</option><option value="Tashkent" data-v-211f7aa7${_scopeId}>Tashkent (UTC+5)</option><option value="EST" data-v-211f7aa7${_scopeId}>USA (UTC-5)</option>`);
            } else {
              return [
                createVNode("option", {
                  value: "",
                  disabled: "",
                  hidden: ""
                }, "Ex: 9 am"),
                createVNode("option", { value: "Tashkent" }, "Tashkent (UTC+5)"),
                createVNode("option", { value: "EST" }, "USA (UTC-5)")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).usdot,
          "onUpdate:modelValue": ($event) => unref(formData).usdot = $event,
          label: "USDOT",
          "input-type": "simple",
          placeholder: "Ex: USDOT"
        }, null, _parent));
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).numTrucks,
          "onUpdate:modelValue": ($event) => unref(formData).numTrucks = $event,
          label: "Number of trucks",
          "input-type": "simple",
          placeholder: "Ex: 5"
        }, null, _parent));
        _push(ssrRenderComponent(Input, {
          modelValue: unref(formData).companyAddress,
          "onUpdate:modelValue": ($event) => unref(formData).companyAddress = $event,
          label: "Company address",
          "input-type": "simple",
          placeholder: "Ex: Tashkent"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div><div class="mt-4" data-v-211f7aa7><div class="mb-4 relative transition-all duration-300" data-v-211f7aa7><div class="flex justify-between items-center" data-v-211f7aa7>`);
      if (unref(activeStep) === 2) {
        _push(`<button class="text-sm text-[#40BF69] underline" data-v-211f7aa7> Go to back </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$1, {
        label: "Next step",
        onClick: ($event) => unref(activeStep) === 1 ? activeStep.value = 2 : submitForm(),
        class: [
          "transition-all duration-300",
          unref(activeStep) === 1 ? "w-full mt-4" : "w-1/3 2xl:w-1/4 ml-auto"
        ]
      }, null, _parent));
      _push(`</div></div><label class="flex items-start cursor-pointer mb-4" data-v-211f7aa7><input${ssrIncludeBooleanAttr(Array.isArray(unref(formData).agreeTerms) ? ssrLooseContain(unref(formData).agreeTerms, null) : unref(formData).agreeTerms) ? " checked" : ""} type="checkbox" class="hidden peer" data-v-211f7aa7><div class="w-5 h-5 border border-gray-300 rounded-[6px] flex items-center justify-center mt-0.5 peer-checked:bg-[#40BF69] peer-checked:border-[#EAEBEC]" data-v-211f7aa7><svg class="w-3 h-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" data-v-211f7aa7><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-v-211f7aa7></path></svg></div><span class="text-[#1D1D1D] text-sm ml-2" data-v-211f7aa7> By creating an account, you agree to our Terms &amp; Conditions </span></label><div class="flex items-center my-4" data-v-211f7aa7><div class="flex-grow border-t border-[#757988]" data-v-211f7aa7></div><span class="mx-4 text-[#757988] text-xs font-medium" data-v-211f7aa7>OR</span><div class="flex-grow border-t border-[#757988]" data-v-211f7aa7></div></div><button class="bg-[#F5F5F5] w-full flex items-center justify-center rounded-xl py-3 px-4 mb-2" data-v-211f7aa7><img${ssrRenderAttr("src", unref(GoogleIcon))} class="w-5 h-5" alt="Google" data-v-211f7aa7><span class="text-[#1D1D1D] text-base font-medium ml-2" data-v-211f7aa7>Continue with Google</span></button><button class="bg-[#F5F5F5] w-full flex items-center justify-center rounded-xl py-3 px-4" data-v-211f7aa7><img${ssrRenderAttr("src", unref(FacebookIcon))} class="w-5 h-5" alt="Facebook" data-v-211f7aa7><span class="text-[#1D1D1D] text-base font-medium ml-2" data-v-211f7aa7>Continue with Facebook</span></button></div></div><div class="hidden lg:flex w-full lg:w-[50%] bg-gray-50 items-center justify-center px-8 py-18 rounded-tl-[50px] rounded-bl-[50px] relative h-[300px] lg:h-screen mt-8 lg:mt-0" data-v-211f7aa7><div class="absolute inset-0 overflow-hidden rounded-tl-[50px] rounded-bl-[50px] z-0" data-v-211f7aa7><div class="absolute inset-0 bg-[#bee5ca]" data-v-211f7aa7></div><div class="custom-gradient border-2 border-[#49c270] rounded-full absolute -right-[5%] -top-[1500px] w-[2810px] h-[2823px] transition-all duration-400" data-v-211f7aa7></div></div><img${ssrRenderAttr("src", _imports_0)} class="absolute scale-[1.5] left-[-25%] w-[100%]" alt="truck" data-v-211f7aa7></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/newAccount/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-211f7aa7"]]);

export { index as default };
//# sourceMappingURL=index.vue6.mjs.map
