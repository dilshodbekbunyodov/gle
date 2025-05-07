
import { defineRule } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import {defineNuxtPlugin} from "#app";
export default defineNuxtPlugin((nuxtApp) => {
    defineRule('required', required);
    defineRule('email', email);
});
