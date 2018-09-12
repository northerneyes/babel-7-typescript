///<reference types="recompose" />

declare module 'recompose' {
  import {
    stateProps,
    ComponentEnhancer,
    InferableComponentEnhancerWithProps,
    ReactLifeCycleFunctions
  } from 'recompose'
  import { ValidationMap } from 'react'

  export function withState<
    TOutter,
    TState,
    TStateName extends string,
    TStateUpdaterName extends string
  >(
    stateName: TStateName,
    stateUpdaterName: TStateUpdaterName,
    initialState: TState | mapper<TOutter, TState>
  ): InferableComponentEnhancerWithProps<
    TOutter & stateProps<TState, TStateName, TStateUpdaterName>,
    TOutter
  >

  export function lifecycle<TProps, TState, TInstance = {}>(
    spec: ReactLifeCycleFunctions<TProps, TState, TInstance> & TInstance
  ): InferableComponentEnhancerWithProps<TProps, TProps>

  export function compose<OProps, I1, I2, I3, IProps>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1>,
    f3: InferableComponentEnhancerWithProps<I3, I2>,
    f4: InferableComponentEnhancerWithProps<IProps, I3>
  ): ComponentEnhancer<IProps, OProps>

  export function getContext<TOutter, TContext>(
    contextTypes: ValidationMap<TContext>
  ): InferableComponentEnhancerWithProps<TOutter & TContext, TOutter>
}

declare module 'recompact/withState' {
  import { withState } from 'recompose'
  export default withState
}

declare module 'recompact/withHandlers' {
  import { withHandlers } from 'recompose'
  export default withHandlers
}

declare module 'recompact/lifecycle' {
  import { lifecycle } from 'recompose'
  export default lifecycle
}

declare module 'recompact/compose' {
  import { compose } from 'recompose'
  export default compose
}

declare module 'recompact/getContext' {
  import { getContext } from 'recompose'
  export default getContext
}
