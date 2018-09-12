import { createSelector } from 'reselect'

interface State {
  message: string
}

interface ExpectedProps {
  name: string
}

interface Props {
  name: string
  count: number
}

// the right way to use selectors using State trigger type argument inference
export const messageSelector = createSelector(
  (state: State) => state.message,
  message => {
    return message
  }
)

// if we want to link some selectors with UI infromation via props
// better way to create a generic builder and extend T with expected props
// from UI. Selectors should not know about UI and should be common for every UI component
export const createMessageSelectorWithProps = <T extends ExpectedProps>() =>
  createSelector(
    (state: State) => state.message,
    (_: State, props: T) => props,
    (message, props) => {
      return message + props.name
    }
  )

// This code we should perform on the component side
export const messageSelectorWithProps = createMessageSelectorWithProps<Props>()
