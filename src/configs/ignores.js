import { readFileSync, existsSync } from "node:fs"
import parse from "parse-gitignore"

const gitignoreFile = ".gitignore"
const gitignoreGlobs = existsSync(gitignoreFile)
    ? parse(readFileSync(gitignoreFile, "utf8")).globs().reduce((acc, glob) => (
        glob.type === "ignore"
            ? [...acc, ...glob.patterns]
            : [...acc, ...glob.patterns.map((pattern) => `!${pattern}`)]
    ), [])
    : []

export const ignoresConfig = [
    {
        ignores: [...gitignoreGlobs],
    },
]
