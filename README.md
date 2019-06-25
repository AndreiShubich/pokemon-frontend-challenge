# pokemon-frontend-challenge

[![Build Status](https://travis-ci.org/shubich/pokemon-frontend-challenge.svg?branch=master)](https://travis-ci.org/shubich/pokemon-frontend-challenge)

## Recommended system requirements
* OS - Windows 10
* Node.js - ^10
* Browser - Google Chrome

## Get started
    npm install
    npm start

### [Demo, GitHub Pages](https://shubich.github.io/pokemon-frontend-challenge/)

## Tech Stack
* TypeScript
* Create React App
* React (100% Hooks, zero classes)

## Used VS Code extensions
* EditorConfig for VS Code
* ESLint

## VS Code settings.json
```json
{
    "git.autofetch": true,
    "eslint.alwaysShowStatus": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "typescript", "autoFix": true },
        { "language": "typescriptreact", "autoFix": true }
    ],
    "eslint.autoFixOnSave": true,
}
```
## Done
- [x] SPA displaying ALL Pokemon with their avatar, stats, basic information and type
- [x] Filter Pokemon by Type(Water, Electric etc)
- [x] Moves list and evolution information

## TODO
- [ ] Error handling
- [ ] ...
