import { renameConfigRules, hasTypescript } from "../utils.js"
import { astroGlob, tsGlob } from "../globs.js"
import { typescriptPlugin, typescriptParser } from "../plugins.js"

const typescriptPrefix = "ts"

export const typescriptConfig = hasTypescript
    ? [
        {
            files: [tsGlob, astroGlob],
            plugins: {
                [typescriptPrefix]: typescriptPlugin,
            },
            languageOptions: {
                parser: typescriptParser,
                parserOptions: {
                    project: hasTypescript,
                },
            },
            rules: {
                ...renameConfigRules(typescriptPlugin.configs["strict-type-checked"].rules, typescriptPrefix),
                ...renameConfigRules(typescriptPlugin.configs["stylistic-type-checked"].rules, typescriptPrefix),

                [`${typescriptPrefix}/consistent-type-definitions`]: ["error", "type"],
            },
        },
    ]
    : []
