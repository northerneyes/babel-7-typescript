import * as React from 'react'
import compose from 'recompact/compose'
import withState from 'recompact/withState'
import withHandlers from 'recompact/withHandlers'
import lifecycle from 'recompact/lifecycle'
import defaultProps from 'recompact/defaultProps'
import pure from 'recompact/pure'
import { InferableComponentEnhancerWithProps } from 'recompose'

type InputProps = {
  name: string
}

type DefaultProps = {
  defaultMessage?: string
}

// type PureType = InferableComponentEnhancerWithProps<Props, Props>
// const pureFunc: PureType = pure

type Props = StateProps & HandlerProps & InputProps & Required<DefaultProps>

export const Component = (props: Props) => {
  return (
    <div>
      {props.name} But hrm doesn't work because of using recompact
      <br />
      <div>
        <button onClick={props.handleClick}>Click me !</button>
      </div>
      <div>{props.message}</div>
      <div>{props.defaultMessage}</div>
    </div>
  )
}

type StateProps = {
  message: string
  setMessage: (message: string) => string
}

type HandlerProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const RecompactExample = compose<
  InputProps & DefaultProps, // input props from outside of component, aka interface props
  InputProps & Required<DefaultProps>, // after defaultProps
  InputProps & StateProps & Required<DefaultProps>, // after withState
  Props, // after withHandlers
  Props, // after lifecycle, lifecycle doesn't change anything, this is types which will go to the inner component
  Props
>(
  defaultProps<InputProps, DefaultProps>({
    defaultMessage: 'something 2'
  }),
  withState<
    InputProps & Required<DefaultProps>,
    string,
    'message',
    'setMessage'
  >('message', 'setMessage', ''),
  withHandlers<InputProps & StateProps & Required<DefaultProps>, HandlerProps>({
    handleClick: props => _ => {
      props.setMessage(props.message ? '' : "You've clicked me!")
    }
  }),
  lifecycle<Props, {}>({
    componentDidMount() {
      console.log(`mounted ${this.props.defaultMessage}`)
    }
  }),
  pure as InferableComponentEnhancerWithProps<Props, Props>
)(Component)
