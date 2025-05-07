import { defineComponent, ref, mergeProps, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { T as TextArea } from './TextArea.vue.mjs';
import { I as Input } from './Input.vue.mjs';
import { a as _sfc_main$1 } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormComment",
  __ssrInlineRender: true,
  setup(__props) {
    const text = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[60px]" }, _attrs))}><h2 class="text-[#1D1D1D] font-medium text-[40px] mb-6">Leave a comment</h2><form class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>`);
      _push(ssrRenderComponent(Input, {
        modelValue: unref(text),
        "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : null,
        class: "border-b border-[#1D1D1D33] !text-[#757575]"
      }, null, _parent));
      _push(`</div><div><label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>`);
      _push(ssrRenderComponent(Input, {
        modelValue: unref(text),
        "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : null,
        class: "border-b border-[#1D1D1D33] !text-[#757575]"
      }, null, _parent));
      _push(`</div></div><div><label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>`);
      _push(ssrRenderComponent(TextArea, {
        modelValue: unref(text),
        "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : null,
        class: "border-b border-[#1D1D1D33] !text-[#757575]"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        label: "POST COMMENT",
        class: "w-full"
      }, null, _parent));
      _push(`</form></div>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=FormComment.vue2.mjs.map
