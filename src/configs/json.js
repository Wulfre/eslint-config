import { renameConfigRules } from "../utils.js"
import { jsonParser, jsonPlugin } from "../plugins.js"
import { jsonGlob } from "../globs.js"

const jsonPrefix = "json"

export const jsonConfig = [
    {
        files: [jsonGlob],
        plugins: {
            [jsonPrefix]: jsonPlugin,
        },
        languageOptions: {
            parser: jsonParser,
        },
        rules: {
            ...renameConfigRules(jsonPlugin.configs.base.overrides.at(0).rules, jsonPrefix),
            ...renameConfigRules(jsonPlugin.configs["recommended-with-jsonc"].rules, jsonPrefix),
            [`${jsonPrefix}/array-bracket-spacing`]: ["error", "never"],
            [`${jsonPrefix}/comma-dangle`]: ["error", "never"],
            [`${jsonPrefix}/comma-style`]: ["error", "last"],
            [`${jsonPrefix}/indent`]: ["error", 4],
            [`${jsonPrefix}/key-spacing`]: ["error", { afterColon: true, beforeColon: false }],
            [`${jsonPrefix}/object-curly-newline`]: ["error", { consistent: true, multiline: true }],
            [`${jsonPrefix}/object-curly-spacing`]: ["error", "always"],
            [`${jsonPrefix}/object-property-newline`]: ["error", { allowMultiplePropertiesPerLine: true }],
        },
    },
]
