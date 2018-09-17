import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../redux/reducers'
import { increment, decrement } from '../redux/counter/counter'

type Props = {
  name: string
}

type StateProps = {
  value: number
  prevValue: number
}

type DispatchProps = {
  increment: typeof increment
  decrement: typeof decrement
}

class Component extends React.Component<StateProps & Props & DispatchProps> {
  private handleIncrement = () => {
    this.props.increment()
  }

  private handleDecrement = () => {
    this.props.decrement()
  }

  readonly state: Readonly<{ data: string }> = { data: '' }

  render() {
    return (
      <>
        <div>value: {this.props.value}</div>
        <div>prev value: {this.props.prevValue}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    )
  }
}

export const CounterExample = connect(
  (state: ApplicationState) => {
    return {
      value: state.counter.count,
      prevValue: state.counter.prev.count
    }
  },
  { increment, decrement }
)(Component)
