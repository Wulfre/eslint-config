import fg from "fast-glob"

export const hasTypescript = fg.globSync("**/tsconfig.json").length > 0
export const hasUnocss = fg.globSync("**/unocss.config.?([cm])[jt]s").length > 0

export function renameConfigRules(rules, prefix) {
    return Object.fromEntries(
        Object.entries(rules).map(([key, value]) => {
            const newKey = key.includes("/")
                ? `${prefix}/${key.split("/").slice(1).join("/")}`
                : key
            return [newKey, value]
        }),
    )
}
