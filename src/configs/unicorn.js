import { renameConfigRules } from "../utils.js"
import { unicornPlugin } from "../plugins.js"
import { astroGlob, jsxGlob } from "../globs.js"

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
            [`${unicornPrefix}/no-array-for-each`]: ["off"],
            [`${unicornPrefix}/no-array-reduce`]: ["off"],
            [`${unicornPrefix}/no-useless-undefined`]: ["off"],

            [`${unicornPrefix}/prefer-at`]: ["error", { checkAllIndexAccess: true }],
        },
    },
    {
        files: [jsxGlob, astroGlob],
        rules: {
            [`${unicornPrefix}/filename-case`]: ["error", { case: "pascalCase", ignore: ["index.*"] }],
        },
    },
]
