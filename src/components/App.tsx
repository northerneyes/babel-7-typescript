import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { RecompactExample } from './RecompactExample'
import Example from './Example'

interface Props {
  name: string
}

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Example />
        <RecompactExample name="hello world" />
      </div>
    )
  }
}

export default hot(module)(App)
