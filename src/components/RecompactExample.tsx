import React from 'react'
import compose from 'recompact/compose'
import withState from 'recompact/withState'
import withHandlers from 'recompact/withHandlers'
import lifecycle from 'recompact/lifecycle'

type OutterProps = {
  name: string
}

type StateProps = {
  message: string
  setMessage: (message: string) => void
}

type HandlerProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type Props = StateProps & HandlerProps & OutterProps

export const Component = (props: Props) => (
  <div>
    {props.name} But hrm doesn't work because of using recompact
    <br />
    <div>
      <button onClick={props.handleClick}>Click me</button>
    </div>
    <div>{props.message}</div>
  </div>
)

export const RecompactExample = compose<Props, OutterProps>(
  withState<
    OutterProps,
    StateProps['message'],
    keyof StateProps,
    keyof StateProps
  >('message', 'setMessage', ''),
  withHandlers<OutterProps & StateProps, HandlerProps>({
    handleClick: props => _ => {
      props.setMessage(props.message ? '' : "You've clicked me!")
    }
  }),
  lifecycle<OutterProps & StateProps & HandlerProps, {}>({
    componentDidMount() {
      console.log(`mounted ${this.props.name}`)
    }
  })
)(Component)
