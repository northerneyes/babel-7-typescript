///<reference types="recompose" />

declare module 'recompact' {
  import {
    stateProps,
    ComponentEnhancer,
    InferableComponentEnhancerWithProps,
    ReactLifeCycleFunctions,
    mapper
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

  export function compose<OProps, I1, I2, IProps>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1>,
    f4: InferableComponentEnhancerWithProps<IProps, I2>
  ): ComponentEnhancer<IProps, OProps>

  export function compose<OProps, I1, I2, I3, IProps>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1>,
    f3: InferableComponentEnhancerWithProps<I3, I2>,
    f4: InferableComponentEnhancerWithProps<IProps, I3>
  ): ComponentEnhancer<IProps, OProps>

  export function compose<OProps, I1, I2, I3, I4, IProps>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1>,
    f3: InferableComponentEnhancerWithProps<I3, I2>,
    f3: InferableComponentEnhancerWithProps<I4, I3>,
    f4: InferableComponentEnhancerWithProps<IProps, I4>
  ): ComponentEnhancer<IProps, OProps>

  export function getContext<TOutter, TContext>(
    contextTypes: ValidationMap<TContext>
  ): InferableComponentEnhancerWithProps<TOutter & TContext, TOutter>

  export function defaultProps<TOutter, TDefaultProps>(
    contextTypes: ValidationMap<TDefaultProps>
  ): InferableComponentEnhancerWithProps<TOutter & TDefaultProps, TOutter>

  export function withProps<TOutter, TInner>(
    createProps: TInner | mapper<TOutter, TInner>
  ): InferableComponentEnhancerWithProps<TInner & TOutter, TOutter>
}

declare module 'recompact/withState' {
  import { withState } from 'recompact'
  export default withState
}

declare module 'recompact/withHandlers' {
  import { withHandlers } from 'recompose'
  export default withHandlers
}

declare module 'recompact/lifecycle' {
  import { lifecycle } from 'recompact'
  export default lifecycle
}

declare module 'recompact/compose' {
  import { compose } from 'recompact'
  export default compose
}

declare module 'recompact/getContext' {
  import { getContext } from 'recompact'
  export default getContext
}

declare module 'recompact/defaultProps' {
  import { defaultProps } from 'recompact'
  export default defaultProps
}

declare module 'recompact/withProps' {
  import { withProps } from 'recompact'
  export default withProps
}
