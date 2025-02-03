// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from "@inlang/paraglide-sveltekit"
import * as runtime from "$lib/paraglide/runtime.js"

export const i18n = createI18n(runtime, {
	defaultLanguageTag: "de",
    pathnames: {
        "/about": {
            de: "/ueber-uns",
            en: "/about"
        },
        "/experience": {
            de: "/erfahrung",
            en: "/experience"
        },
        "/contact": {
            de: "/kontakt",
            en: "/contact"
        },
        "/imprint": {
            de: "/impressum",
            en: "/imprint"
        },
        "/privacy_policy": {
            de: "/datenschutzerklaerung",
            en: "/privacy_policy"
        },
    }
})
