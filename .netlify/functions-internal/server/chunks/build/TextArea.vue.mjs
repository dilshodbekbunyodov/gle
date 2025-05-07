import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextArea",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    modelValue: {
      type: String,
      required: true
    },
    customClass: {
      type: String,
      required: false,
      default: ""
    },
    errors: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [__props.customClass, "input-container"]
      }, _attrs))} data-v-5b07464d>`);
      if (__props.label) {
        _push(`<label class="text-sm font-medium" data-v-5b07464d>${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({ placeholder: __props.placeholder }, _ctx.$attrs, {
        value: __props.modelValue,
        class: "input-field text-white"
      }), "textarea")} data-v-5b07464d>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
      if (__props.errors) {
        _push(`<p class="mt-1 text-sm text-red-600" data-v-5b07464d>${ssrInterpolate(__props.errors)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/TextArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b07464d"]]);

export { TextArea as T };
//# sourceMappingURL=TextArea.vue.mjs.map
