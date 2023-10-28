import fg from "fast-glob"

export const hasTypescript = fg.globSync("**/tsconfig.json").length > 0
export const hasUnocss = fg.globSync("**/unocss.config.?([cm])[jt]s").length > 0

export const defaultInterop = (module) => module.default ?? module

export const renameConfigRules = (rules, prefix) => Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
        const newKey = key.includes("/")
            ? `${prefix}/${key.split("/").slice(1).join("/")}`
            : key
        return [newKey, value]
    }),
)
