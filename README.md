# @wulfre/eslint-config

> [!IMPORTANT]
> this config uses the new [eslint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), and you currently need to add extra settings to use in vscode. See the [vscode support](#vscode-support) section.

## features

- 4 space indent, double quotes, no semicolons, dangling commas
- auto-fix formatting without additional dependencies (like prettier)
- only warnings, no errors
- works out of the box with `typescript`, `preact` / `react`, `astro`
- respects `.gitignore` automatically

## plugins

- [@eslint/js](https://www.npmjs.com/package/@eslint/js)
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@unocss/eslint-plugin](https://www.npmjs.com/package/@unocss/eslint-plugin)
- [eslint-plugin-astro](https://www.npmjs.com/package/eslint-plugin-astro)
- [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- [eslint-plugin-i](https://www.npmjs.com/package/eslint-plugin-i)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-only-warn](https://www.npmjs.com/package/eslint-plugin-only-warn)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - adjusted for preact
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

## vscode support

copy the [settings.json](./eslint-config/blob/main/.vscode/settings.json) from this repository into the `.vscode/settings.json` file in your project
