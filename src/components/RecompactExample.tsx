import * as React from 'react'
import compose from 'recompact/compose'
import withState from 'recompact/withState'
import withHandlers from 'recompact/withHandlers'
import lifecycle from 'recompact/lifecycle'
import getContext from 'recompact/getContext'
import withProps from 'recompact/withProps'
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

type Props = StateProps & HandlerProps & OutterProps & Context & WithProps

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

type Context = {
  intl: InjectedIntl
}

type WithProps = {
  defaultMessage: string
}

export const RecompactExample = compose<
  OutterProps,
  OutterProps & WithProps,
  OutterProps & StateProps & WithProps,
  OutterProps & StateProps & Context & WithProps,
  Props,
  Props
>(
  withProps<OutterProps, WithProps>({
    defaultMessage: 'something'
  }),
  withState<OutterProps & WithProps, string, 'message', 'setMessage'>(
    'message',
    'setMessage',
    ''
  ),
  getContext<OutterProps & StateProps & WithProps, Context>({
    intl: () => null
  }),
  withHandlers<OutterProps & StateProps & Context & WithProps, HandlerProps>({
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
