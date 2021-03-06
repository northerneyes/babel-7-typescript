import 'regenerator-runtime/runtime'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'

type BarProps = {
  a: string
  b: string
}

type Foo = {
  name: string
  foo(): string
  bar(props: BarProps): number
}

const props: Foo = {
  name: 'hi',
  foo: () => 'hi',
  bar: () => 2
}

ReactDOM.render(<App {...props} />, document.getElementById('app'))
