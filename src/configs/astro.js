import { astroGlob } from "../globs.js"
import { renameConfigRules, hasTypescript } from "../utils.js"
import { astroPlugin, astroParser, typescriptParser } from "../plugins.js"

const astroPrefix = "astro"

export const astroConfig = [
    {
        files: [astroGlob],
        plugins: {
            [astroPrefix]: astroPlugin,
        },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                extraFileExtensions: [astroGlob],
                parser: hasTypescript ? typescriptParser : undefined,
            },
        },
        rules: {
            ...renameConfigRules(astroPlugin.configs.recommended.rules, astroPrefix),
            ...renameConfigRules(astroPlugin.configs["jsx-a11y-recommended"].rules, astroPrefix),

            [`${astroPrefix}/semi`]: ["error", "never"],
        },
    },
]
