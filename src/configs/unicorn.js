import { renameConfigRules } from "../utils.js"
import { unicornPlugin } from "../plugins.js"

const unicornPrefix = "unicorn"

export const unicornConfig = [
    {
        plugins: {
            [unicornPrefix]: unicornPlugin,
        },
        rules: {
            ...renameConfigRules(unicornPlugin.configs.recommended.rules, unicornPrefix),

            [`${unicornPrefix}/prevent-abbreviations`]: ["off"],
            [`${unicornPrefix}/no-await-expression-member`]: ["off"],

            [`${unicornPrefix}/prefer-at`]: ["error", { checkAllIndexAccess: true }],
        },
    },
]
