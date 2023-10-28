import { onlyWarnPlugin } from "../plugins.js"

const onlyWarnPrefix = "only-warn"

export const onlyWarnConfig = [
    {
        plugins: {
            [onlyWarnPrefix]: onlyWarnPlugin,
        },
    },
]
