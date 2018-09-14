import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../redux/reducers'
import { increment, decrement } from '../redux/counter/counter'

type Props = {
  name: string
  value: number
  prevValue: number
  increment: typeof increment
  decrement: typeof decrement
}

class Component extends React.Component<Props> {
  handleIncrement = () => {
    this.props.increment()
  }
  handleDecrement = () => {
    this.props.decrement()
  }

  render() {
    return (
      <div>
        <div>value: {this.props.value}</div>
        <div>prev value: {this.props.prevValue}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
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
