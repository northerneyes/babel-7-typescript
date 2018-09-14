import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../redux/reducers'
import { increment, decrement, incrementValue } from '../redux/counter/counter'

type Props = {
  name: string
  value: number
  increment: typeof increment
  decrement: typeof decrement
  incrementValue: typeof incrementValue
}

class Component extends React.Component<Props> {
  handleIncrement = () => {
    this.props.increment()
  }
  handleDecrement = () => {
    this.props.decrement()
  }

  handleIncrement2 = () => {
    this.props.incrementValue(10)
  }

  render() {
    return (
      <div>
        <div>value: {this.props.value}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleIncrement2}>Increment by 2</button>
      </div>
    )
  }
}

export const CounterExample = connect(
  (state: ApplicationState) => ({
    value: state.counter.count
  }),
  { increment, decrement, incrementValue }
)(Component)
