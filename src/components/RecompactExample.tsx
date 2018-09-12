import * as React from 'react'
import compose from 'recompact/compose'
import withState from 'recompact/withState'
import withHandlers from 'recompact/withHandlers'
import lifecycle from 'recompact/lifecycle'
import defaultProps from 'recompact/defaultProps'

type OutterProps = {
  name: string
}

type DefaultProps = {
  defaultMessage?: string
}

type StateProps = {
  message: string
  setMessage: (message: string) => string
}

type HandlerProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type Props = StateProps & HandlerProps & OutterProps & Required<DefaultProps>

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

export const RecompactExample = compose<
  OutterProps & DefaultProps,
  OutterProps & Required<DefaultProps>,
  OutterProps & StateProps & Required<DefaultProps>,
  Props,
  Props
>(
  defaultProps<OutterProps, DefaultProps>({
    defaultMessage: 'something 2'
  }),
  withState<
    OutterProps & Required<DefaultProps>,
    string,
    'message',
    'setMessage'
  >('message', 'setMessage', ''),
  withHandlers<OutterProps & StateProps & Required<DefaultProps>, HandlerProps>(
    {
      handleClick: props => _ => {
        props.setMessage(props.message ? '' : "You've clicked me!")
      }
    }
  ),
  lifecycle<Props, {}>({
    componentDidMount() {
      console.log(`mounted ${this.props.defaultMessage}`)
    }
  })
)(Component)
