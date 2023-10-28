import { astroGlob, jsxGlob } from "../globs.js"
import { stylisticPlugin } from "../plugins.js"

const stylisticPrefix = "style"
const indent = 4

export const stylisticConfig = [
    {
        plugins: {
            [stylisticPrefix]: stylisticPlugin,
        },
        rules: {
            curly: ["error", "multi-or-nest", "consistent"],

            [`${stylisticPrefix}/array-bracket-spacing`]: ["error", "never"],
            [`${stylisticPrefix}/arrow-spacing`]: ["error", { after: true, before: true }],
            [`${stylisticPrefix}/block-spacing`]: ["error", "always"],
            [`${stylisticPrefix}/brace-style`]: ["error", "1tbs", { allowSingleLine: true }],
            [`${stylisticPrefix}/comma-dangle`]: ["error", "always-multiline"],
            [`${stylisticPrefix}/comma-spacing`]: ["error", { after: true, before: false }],
            [`${stylisticPrefix}/comma-style`]: ["error", "last"],
            [`${stylisticPrefix}/computed-property-spacing`]: ["error", "never", { enforceForClassMembers: true }],
            [`${stylisticPrefix}/dot-location`]: ["error", "property"],
            [`${stylisticPrefix}/eol-last`]: ["error"],
            [`${stylisticPrefix}/indent`]: ["error", indent],
            [`${stylisticPrefix}/key-spacing`]: ["error", { afterColon: true, beforeColon: false }],
            [`${stylisticPrefix}/keyword-spacing`]: ["error", { after: true, before: true }],
            [`${stylisticPrefix}/lines-between-class-members`]: ["error", "always", { exceptAfterSingleLine: true }],
            [`${stylisticPrefix}/max-statements-per-line`]: ["error", { max: 1 }],
            [`${stylisticPrefix}/member-delimiter-style`]: ["error", { multiline: { delimiter: "none" } }],
            [`${stylisticPrefix}/multiline-ternary`]: ["error", "always-multiline"],
            [`${stylisticPrefix}/new-parens`]: ["error"],
            [`${stylisticPrefix}/no-extra-parens`]: ["error", "functions"],
            [`${stylisticPrefix}/no-floating-decimal`]: "error",
            [`${stylisticPrefix}/no-mixed-operators`]: ["error", {
                allowSamePrecedence: true,
                groups: [
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"],
                ],
            }],
            [`${stylisticPrefix}/no-mixed-spaces-and-tabs`]: ["error"],
            [`${stylisticPrefix}/no-multi-spaces`]: ["error"],
            [`${stylisticPrefix}/no-multiple-empty-lines`]: ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
            [`${stylisticPrefix}/no-tabs`]: ["error"],
            [`${stylisticPrefix}/no-trailing-spaces`]: ["error"],
            [`${stylisticPrefix}/no-whitespace-before-property`]: ["error"],
            [`${stylisticPrefix}/object-curly-spacing`]: ["error", "always"],
            [`${stylisticPrefix}/object-property-newline`]: ["error", { allowMultiplePropertiesPerLine: true }],
            [`${stylisticPrefix}/operator-linebreak`]: ["error", "before"],
            [`${stylisticPrefix}/padded-blocks`]: ["error", { blocks: "never", classes: "never", switches: "never" }],
            [`${stylisticPrefix}/quote-props`]: ["error", "consistent-as-needed"],
            [`${stylisticPrefix}/quotes`]: ["error", "double", { allowTemplateLiterals: true, avoidEscape: false }],
            [`${stylisticPrefix}/rest-spread-spacing`]: ["error", "never"],
            [`${stylisticPrefix}/semi`]: ["error", "never"],
            [`${stylisticPrefix}/semi-spacing`]: ["error", { after: true, before: false }],
            [`${stylisticPrefix}/space-before-blocks`]: ["error", "always"],
            [`${stylisticPrefix}/space-before-function-paren`]: ["error", { anonymous: "always", asyncArrow: "always", named: "never" }],
            [`${stylisticPrefix}/space-in-parens`]: ["error", "never"],
            [`${stylisticPrefix}/space-infix-ops`]: ["error"],
            [`${stylisticPrefix}/space-unary-ops`]: ["error", { nonwords: false, words: true }],
            [`${stylisticPrefix}/spaced-comment`]: ["error", "always", {
                block: {
                    balanced: true,
                    exceptions: ["*"],
                    markers: ["!"],
                },
                line: {
                    exceptions: ["/", "#"],
                    markers: ["/"],
                },
            }],
            [`${stylisticPrefix}/template-curly-spacing`]: ["error"],
            [`${stylisticPrefix}/template-tag-spacing`]: ["error", "never"],
            [`${stylisticPrefix}/type-annotation-spacing`]: ["error", {}],
            [`${stylisticPrefix}/wrap-iife`]: ["error", "any", { functionPrototypeMethods: true }],
            [`${stylisticPrefix}/yield-star-spacing`]: ["error", "both"],
        },
    },
    {
        files: [jsxGlob, astroGlob],
        rules: {
            [`${stylisticPrefix}/jsx-closing-bracket-location`]: ["error"],
            [`${stylisticPrefix}/jsx-closing-tag-location`]: ["error"],
            [`${stylisticPrefix}/jsx-curly-brace-presence`]: ["error", { propElementValues: "always" }],
            [`${stylisticPrefix}/jsx-curly-newline`]: ["error"],
            [`${stylisticPrefix}/jsx-curly-spacing`]: ["error", "never"],
            [`${stylisticPrefix}/jsx-equals-spacing`]: ["error"],
            [`${stylisticPrefix}/jsx-first-prop-new-line`]: ["error"],
            [`${stylisticPrefix}/jsx-indent`]: ["error", indent, { checkAttributes: true, indentLogicalExpressions: true }],
            [`${stylisticPrefix}/jsx-indent-props`]: ["error", indent],
            [`${stylisticPrefix}/jsx-max-props-per-line`]: ["error", { maximum: 1, when: "multiline" }],
            [`${stylisticPrefix}/jsx-one-expression-per-line`]: ["error", { allow: "single-child" }],
            [`${stylisticPrefix}/jsx-quotes`]: ["error"],
            [`${stylisticPrefix}/jsx-tag-spacing`]: [
                "error",
                {
                    afterOpening: "never",
                    beforeClosing: "never",
                    beforeSelfClosing: "always",
                    closingSlash: "never",
                },
            ],
            [`${stylisticPrefix}/jsx-wrap-multilines`]: [
                "error",
                {
                    // eslint-disable-next-line sonar/no-duplicate-string -- allow for this config case
                    arrow: "parens-new-line",
                    assignment: "parens-new-line",
                    condition: "parens-new-line",
                    declaration: "parens-new-line",
                    logical: "parens-new-line",
                    prop: "parens-new-line",
                    return: "parens-new-line",
                },
            ],
        },
    },
]
