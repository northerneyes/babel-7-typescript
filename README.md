# TypeScript + Babel 7

Example TypeScript project built on top of new Babel 7 features. Includes React 16, Jest and Enzyme (for tests). Since the TypeScript compiler is no longer required to compile sources you can keep your existing Babel pipeline and instead rely on editor-based type-checking or `tsc`.

## Installation

```sh
git clone https://github.com/damassi/babel-7-typescript-example && cd babel-7-typescript-example
yarn install
yarn start
yarn test:watch
yarn typecheck
```

If using VSCode, make sure to install the recommended extensions.

## Example

```jsx
// App.tsx
import React, { Component } from 'react'

interface Props {
  name: string
}

export const App extends Component<Props> {
  render () {
    return (
      <div>
        Hi {this.props.name} from .tsx!
      </div>
    )
  }
}

// index.ts
import ReactDOM from 'react-dom/server'
import { App } from './components/App'

console.log(ReactDOM.renderToString(<App name='leif' />))
```

```sh
yarn build (or babel src --out-dir dist --extensions '.ts,.tsx')
```
