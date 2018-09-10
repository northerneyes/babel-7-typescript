import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

interface Props {
  name: string
}

class App extends Component<Props> {
  render () {
    return <div>{this.props.name} from tsx!</div>
  }
}

export default hot(module)(App)
