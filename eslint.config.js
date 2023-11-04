import { astroConfig } from "./src/configs/astro.js"
import { javascriptConfig } from "./src/configs/javascript.js"
import { onlyWarnConfig } from "./src/configs/only-warn.js"
import { sonarConfig } from "./src/configs/sonar.js"
import { stylisticConfig } from "./src/configs/stylistic.js"
import { typescriptConfig } from "./src/configs/typescript.js"
import { unicornConfig } from "./src/configs/unicorn.js"
import { unocssConfig } from "./src/configs/unocss.js"
import { preactConfig } from "./src/configs/preact.js"
import { eslintCommentsConfig } from "./src/configs/eslint-comments.js"
import { importConfig } from "./src/configs/imports.js"
import { ignoresConfig } from "./src/configs/ignores.js"
import { jsonConfig } from "./src/configs/json.js"

export default [
    ...ignoresConfig,
    ...onlyWarnConfig,
    ...eslintCommentsConfig,
    ...stylisticConfig,
    ...importConfig,
    ...javascriptConfig,
    ...typescriptConfig,
    ...astroConfig,
    ...preactConfig,
    ...unocssConfig,
    ...unicornConfig,
    ...sonarConfig,
    ...jsonConfig,
]
