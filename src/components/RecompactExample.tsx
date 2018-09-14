import * as React from 'react'
import compose from 'recompact/compose'
import withState from 'recompact/withState'
import withHandlers from 'recompact/withHandlers'
import lifecycle from 'recompact/lifecycle'
import defaultProps from 'recompact/defaultProps'
// import withProps from 'recompact/withProps'
import withPropsOnChange from 'recompact/withPropsOnChange'
import branch from 'recompact/branch'
import renderNothing from 'recompact/renderNothing'
import pure from 'recompact/pure'
// import onlyUpdateForKeys from 'withPropsOnChange/onlyUpdateForKeys'
// import pure from 'recompact/pure'
import InferableComponentEnhancerWithProps from 'recompact/InferableComponentEnhancerWithProps'

type InputProps = {
  name: string
}

type DefaultProps = {
  defaultMessage?: string
}

type Props = StateProps &
  HandlerProps &
  InputProps &
  Required<DefaultProps> &
  WithProps

export const Component: React.SFC<Props> = props => {
  return (
    <>
      {props.name} But hrm doesn't work because of using recompact
      <br />
      <div>
        <button onClick={props.handleClick}>Click me !</button>
      </div>
      <div>{props.message}</div>
      <div>{props.defaultMessage}</div>
    </>
  )
}

type StateProps = {
  message: string
  setMessage: (message: string) => string
}

type HandlerProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// export interface Example<Props> {
//   <P extends Props>(component: P): Props
// }

// const p: Example<{ message: 5, name: "123" }>;// = ({name: "3"}) => ({ message: 5, name: "123" })
// p()

export const Loading = (_: InputProps) => {
  return <div>Loading</div>
}

export const defaultPropsExample: React.ComponentType<{
  name: string
  message: string
  setMessage: (state: string) => string
}> = props => {
  return <div>{props.message}</div>
}
const p2 = withState<{ name: string }, string, 'message', 'setMessage'>(
  'message',
  'setMessage',
  ''
)

type WithProps = { add: number }
export const PropExample = p2(defaultPropsExample)
export const RecompactExample = compose<
  InputProps,
  WithProps,
  Required<DefaultProps>, // after defaultProps
  StateProps, // after withState
  HandlerProps,
  {},
  {},
  {}
>( // after withHandlers
  // Props, // after lifecycle, lifecycle doesn't change anything, this is types which will go to the inner component
  // Props
  withPropsOnChange<InputProps, WithProps>(['name'], _ => ({ add: 3 })),
  defaultProps<InputProps & WithProps, DefaultProps>({
    defaultMessage: 'something 2'
  }),
  withState<
    InputProps & Required<DefaultProps> & WithProps,
    string,
    'message',
    'setMessage'
  >('message', 'setMessage', ''),
  withHandlers<
    InputProps & StateProps & Required<DefaultProps> & WithProps,
    HandlerProps
  >({
    handleClick: props => _ => {
      props.setMessage(props.message ? '' : 'click')
    }
  }),
  branch<Props>(
    props => props.message === 'click',
    renderNothing as InferableComponentEnhancerWithProps<{}, Props>
  ),
  // onlyUpdateForKeys<Props>(['message']),
  lifecycle<Props, {}>({
    componentDidMount() {
      console.log(`mounted ${this.props.defaultMessage}`)
    }
  }),
  pure as InferableComponentEnhancerWithProps<{}, Props>
)(Component)
