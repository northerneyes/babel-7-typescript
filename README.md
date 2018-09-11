# Typescript + Babel 7 with webpack hmr and maximum type safety

Example TypeScript project built on top of new Babel 7 features. Includes React 16, webpack + HMR + typescript server, maximum type safety both by compiler and tslint, prettier + git hook. Since the TypeScript compiler is no longer required to compile sources you can keep your existing Babel pipeline and instead rely on editor-based type-checking or `tsc`.

## Installation

```sh
git clone https://github.com/northerneyes/babel-7-typescript.git && cd babel-7-typescript
yarn install
yarn build:dll
yarn dev
yarn typecheck
yarn lint
```

If you are using VSCode, do not use default tslint extension [vscode-tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) and disable it, this project uses [tslint-language-service](https://github.com/angelozerr/tslint-language-service/blob/master/README.md)
