import { antfuPlugin } from "../plugins.js"

const antfuPrefix = "antfu"

export const antfuConfig = [
    {
        plugins: {
            [antfuPrefix]: antfuPlugin,
        },
        rules: {
            [`${antfuPrefix}/top-level-function`]: "error",
        },
    },
]
