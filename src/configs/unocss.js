import { hasUnocss, renameConfigRules } from "../utils.js"
import { unocssPlugin } from "../plugins.js"
import { astroGlob, jsxGlob, tsxGlob } from "../globs.js"

const unocssPrefix = "unocss"

export const unocssConfig = hasUnocss
    ? [
        {
            files: [jsxGlob, tsxGlob, astroGlob],
            plugins: {
                [unocssPrefix]: unocssPlugin,
            },
            rules: {
                ...renameConfigRules(unocssPlugin.configs.recommended.rules, unocssPrefix),
            },
        },
    ]
    : []
