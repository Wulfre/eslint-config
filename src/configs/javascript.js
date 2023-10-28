import globals from "globals"
import { renameConfigRules } from "../utils.js"
import { javascriptPlugin } from "../plugins.js"

const javascriptPrefix = "js"

export const javascriptConfig = [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            ...renameConfigRules(javascriptPlugin.configs.recommended.rules, javascriptPrefix),
        },
    },
]
