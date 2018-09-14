import React from 'react'
import compose from 'recompact/compose'
import withPropsOnChange from 'recompact/withPropsOnChange'
import { connect } from 'react-redux'
import { ApplicationState } from '../redux/reducers'
import { increment, decrement } from '../redux/counter/counter'
import InferableComponentEnhancerWithProps from 'recompact/InferableComponentEnhancerWithProps'

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

class Component extends React.Component<
  StateProps & Props & DispatchProps & WithProps
> {
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
        <div>add value: {this.props.add}</div>
        <div>value: {this.props.value}</div>
        <div>prev value: {this.props.prevValue}</div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    )
  }
}

type WithProps = { add: number }

export const RecompactAndCounterExample = compose<
  Props,
  StateProps & DispatchProps,
  WithProps
>(
  connect<StateProps, DispatchProps, Props, ApplicationState>(
    state => {
      return {
        value: state.counter.count,
        prevValue: state.counter.prev.count
      }
    },
    { increment, decrement }
  ) as InferableComponentEnhancerWithProps<StateProps & DispatchProps, Props>,
  withPropsOnChange<Props & StateProps & DispatchProps, WithProps>(
    ['name'],
    _ => ({ add: 3 })
  )
)(Component)
