import { jsxGlob } from "../globs.js"
import { reactPlugin, reactHooksPlugin, jsxA11yPlugin } from "../plugins.js"
import { renameConfigRules } from "../utils.js"

const preactPrefix = "preact"

export const preactConfig = [
    {
        files: [jsxGlob],
        settings: {
            react: {
                pragma: "h",
                version: "16.0",
            },
        },
        plugins: {
            [preactPrefix]: reactPlugin,
            [`${preactPrefix}-hooks`]: reactHooksPlugin,
            [`${preactPrefix}-jsx-a11y`]: jsxA11yPlugin,
        },
        rules: {
            ...renameConfigRules(jsxA11yPlugin.configs.strict.rules, `${preactPrefix}-jsx-a11y`),
            ...renameConfigRules(reactHooksPlugin.configs.recommended.rules, `${preactPrefix}-hooks`),

            [`${preactPrefix}/react-in-jsx-scope`]: ["off"],
            [`${preactPrefix}/display-name`]: ["off"],

            [`${preactPrefix}/no-deprecated`]: ["error"],
            [`${preactPrefix}/jsx-no-bind`]: ["warn", {
                ignoreRefs: true,
                allowFunctions: true,
                allowArrowFunctions: true,
            }],
            [`${preactPrefix}/jsx-no-comment-textnodes`]: ["error"],
            [`${preactPrefix}/jsx-no-duplicate-props`]: ["error"],
            [`${preactPrefix}/jsx-no-target-blank`]: ["error"],
            [`${preactPrefix}/jsx-no-undef`]: ["error"],
            [`${preactPrefix}/jsx-tag-spacing`]: ["error", { beforeSelfClosing: "always" }],
            [`${preactPrefix}/jsx-uses-react`]: "error",
            [`${preactPrefix}/jsx-uses-vars`]: "error",
            [`${preactPrefix}/jsx-key`]: ["error", { checkFragmentShorthand: true }],
            [`${preactPrefix}/self-closing-comp`]: ["error"],
            [`${preactPrefix}/prefer-es6-class`]: ["error"],
            [`${preactPrefix}/prefer-stateless-function`]: ["warn"],
            [`${preactPrefix}/require-render-return`]: ["error"],
            [`${preactPrefix}/no-danger`]: ["warn"],

            // legacy APIs not supported in preact
            [`${preactPrefix}/no-did-mount-set-state`]: ["error"],
            [`${preactPrefix}/no-did-update-set-state`]: ["error"],
            [`${preactPrefix}/no-find-dom-node`]: ["error"],
            [`${preactPrefix}/no-is-mounted`]: ["error"],
            [`${preactPrefix}/no-string-refs`]: ["error"],
        },
    },
]
