import * as React from 'react'
import compose from 'recompact/compose'
import withState from 'recompact/withState'
import withHandlers from 'recompact/withHandlers'
import lifecycle from 'recompact/lifecycle'
import getContext from 'recompact/getContext'
import { InjectedIntl } from 'react-intl'

type OutterProps = {
  name: string
}

type StateProps = {
  message: string
  setMessage: (message: string) => string
}

type HandlerProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type Props = StateProps & HandlerProps & OutterProps & Context

export const Component = (props: Props) => {
  return (
    <div>
      {props.name} But hrm doesn't work because of using recompact
      <br />
      <div>
        <button onClick={props.handleClick}>Click me !</button>
      </div>
      <div>{props.message}</div>
    </div>
  )
}

export const RecompactExample = compose<
  OutterProps,
  OutterProps & StateProps,
  OutterProps & StateProps & Context,
  Props,
  Props
>(
  withState<OutterProps, string, 'message', 'setMessage'>(
    'message',
    'setMessage',
    ''
  ),
  getContext<OutterProps & StateProps, Context>({
    intl: () => null
  }),
  withHandlers<OutterProps & StateProps & Context, HandlerProps>({
    handleClick: props => _ => {
      props.setMessage(props.message ? '' : "You've clicked me!")
    }
  }),
  lifecycle<Props, {}>({
    componentDidMount() {
      console.log(`mounted ${this.props.name}`)
    }
  })
)(Component)
