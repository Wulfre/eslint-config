import { readFileSync } from "node:fs"

const gitignores = readFileSync(".gitignore", "utf8").replaceAll(/#.*/g, "").split(/\r?\n/).filter(Boolean)

export const ignoresConfig = [
    {
        ignores: [...gitignores],
    },
]
