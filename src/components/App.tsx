import React from 'react'
import { hot } from 'react-hot-loader'
import { RecompactExample, PropExample } from './RecompactExample'
import { StyledExample } from './StyledExample'
import Example from './Example'
import { IntlProvider } from 'react-intl'
import './reselect'
import { createStore } from '../redux/store'
import { Provider } from 'react-redux'
import { CounterExample } from './CounterExample'
import { RecompactAndCounterExample } from './RecompactAndCounterExample'
import './lodashExample'

interface Props {
  name: string
}

const store = createStore({})

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <>
            <Example />
            <RecompactExample name="20" />
            <PropExample name="2" />
            <CounterExample name="counter" />
            <RecompactAndCounterExample name="recompact counter" />
            <StyledExample name="some name" />
          </>
        </IntlProvider>
      </Provider>
    )
  }
}

export default hot(module)(App)
