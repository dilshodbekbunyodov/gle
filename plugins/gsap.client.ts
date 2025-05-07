import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import {ScrollSmoother} from "gsap/ScrollSmoother";

export default defineNuxtPlugin((nuxtApp) => {

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother)


    return {
        provide: {
            gsap,
            scrollTrigger: ScrollTrigger,
           scrollSmoother: ScrollSmoother
        },
    }
})
