import { defaultInterop } from "./utils.js"

// plugins
import * as _onlyWarnPlugin from "eslint-plugin-only-warn"
export const onlyWarnPlugin = defaultInterop(_onlyWarnPlugin)

import * as _eslintCommentsPlugin from "eslint-plugin-eslint-comments"
export const eslintCommentsPlugin = defaultInterop(_eslintCommentsPlugin)

import * as _stylisticPlugin from "@stylistic/eslint-plugin"
export const stylisticPlugin = defaultInterop(_stylisticPlugin)

import * as _javascriptPlugin from "@eslint/js"
export const javascriptPlugin = defaultInterop(_javascriptPlugin)

import * as _typescriptPlugin from "@typescript-eslint/eslint-plugin"
export const typescriptPlugin = defaultInterop(_typescriptPlugin)

import * as _astroPlugin from "eslint-plugin-astro"
export const astroPlugin = defaultInterop(_astroPlugin)

import * as _unocssPlugin from "@unocss/eslint-plugin"
export const unocssPlugin = defaultInterop(_unocssPlugin)

import * as _reactPlugin from "eslint-plugin-react"
export const reactPlugin = defaultInterop(_reactPlugin)

import * as _reactHooksPlugin from "eslint-plugin-react-hooks"
export const reactHooksPlugin = defaultInterop(_reactHooksPlugin)

import * as _jsxA11yPlugin from "eslint-plugin-jsx-a11y"
export const jsxA11yPlugin = defaultInterop(_jsxA11yPlugin)

import * as _unicornPlugin from "eslint-plugin-unicorn"
export const unicornPlugin = defaultInterop(_unicornPlugin)

import * as _sonarPlugin from "eslint-plugin-sonarjs"
export const sonarPlugin = defaultInterop(_sonarPlugin)

// parsers
import * as _typescriptParser from "@typescript-eslint/parser"
export const typescriptParser = defaultInterop(_typescriptParser)

import * as _astroParser from "astro-eslint-parser"
export const astroParser = defaultInterop(_astroParser)
