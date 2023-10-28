import { hasUnocss, renameConfigRules } from "../utils.js"
import { unocssPlugin } from "../plugins.js"

const unocssPrefix = "unocss"

export const unocssConfig = hasUnocss
    ? [
        {
            plugins: {
                [unocssPrefix]: unocssPlugin,
            },
            rules: {
                ...renameConfigRules(unocssPlugin.configs.recommended.rules, unocssPrefix),
            },
        },
    ]
    : []
