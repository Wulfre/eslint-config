import { eslintCommentsPlugin } from "../plugins.js"
import { renameConfigRules } from "../utils.js"

const eslintCommentsPrefix = "eslint-comments"

export const eslintCommentsConfig = [
    {
        plugins: {
            [eslintCommentsPrefix]: eslintCommentsPlugin,
        },
        rules: {
            ...renameConfigRules(eslintCommentsPlugin.configs.recommended.rules, eslintCommentsPrefix),

            [`${eslintCommentsPrefix}/require-description`]: ["error"],
        },
    },
]
