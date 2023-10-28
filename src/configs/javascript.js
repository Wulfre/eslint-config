import { renameConfigRules } from "../utils.js"
import { javascriptPlugin } from "../plugins.js"

const prefixJavascript = "js"

export const javascriptConfig = [
    {
        rules: {
            ...renameConfigRules(javascriptPlugin.configs.recommended.rules, prefixJavascript),
        },
    },
]
