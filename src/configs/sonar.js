import { renameConfigRules } from "../utils.js"
import { sonarPlugin } from "../plugins.js"

const sonarPrefix = "sonar"

export const sonarConfig = [
    {
        plugins: {
            [sonarPrefix]: sonarPlugin,
        },
        rules: {
            ...renameConfigRules(sonarPlugin.configs.recommended.rules, sonarPrefix),
        },
    },
]
