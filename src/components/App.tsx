import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { RecompactExample, PropExample } from './RecompactExample'
import Example from './Example'
import { IntlProvider } from 'react-intl'

interface Props {
  name: string
}

class App extends Component<Props> {
  render() {
    return (
      <IntlProvider locale="en">
        <>
          <Example />
          <RecompactExample name="20" />
          <PropExample name="2" />
        </>
      </IntlProvider>
    )
  }
}

export default hot(module)(App)
