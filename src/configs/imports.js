import { importPlugin } from "../plugins.js"

const importPrefix = "import"

export const importConfig = [
    {
        plugins: {
            [importPrefix]: importPlugin,
        },
        rules: {
            "import/first": ["error"],
            "import/no-duplicates": ["error"],
            "import/no-mutable-exports": ["error"],
            "import/no-named-default": ["error"],
            "import/no-self-import": ["error"],
            "import/no-webpack-loader-syntax": ["error"],
            "import/order": ["error"],
            "import/newline-after-import": ["error"],
        },
    },
]
