///<reference types="recompose" />

declare module 'recompact' {
  import {
    stateProps,
    ComponentEnhancer,
    InferableComponentEnhancerWithProps,
    ReactLifeCycleFunctions,
    mapper,
    HandleCreators,
    HandleCreatorsFactory
  } from 'recompose'
  import { ValidationMap } from 'react'

  export function compose<OProps, I1, I2, IProps>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>,
    f4: InferableComponentEnhancerWithProps<IProps, I2 & I1 & OProps>
  ): ComponentEnhancer<IProps & I2 & I1 & OProps, OProps>

  export function compose<OProps, I1, I2, I3, IProps>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>,
    f3: InferableComponentEnhancerWithProps<I3, I2 & I1 & OProps>,
    f4: InferableComponentEnhancerWithProps<IProps, I3 & I2 & I1 & OProps>
  ): ComponentEnhancer<IProps & I3 & I2 & I1 & OProps, OProps>

  export function compose<OProps, I1, I2, I3, I4, IProps>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>,
    f3: InferableComponentEnhancerWithProps<I3, I2 & I1 & OProps>,
    f3: InferableComponentEnhancerWithProps<I4, I3 & I2 & I1 & OProps>,
    f4: InferableComponentEnhancerWithProps<IProps, I4 & I3 & I2 & I1 & OProps>
  ): ComponentEnhancer<IProps & I4 & I3 & I2 & I1 & OProps, OProps>

  export function lifecycle<TProps, TState, TInstance = {}>(
    spec: ReactLifeCycleFunctions<TProps, TState, TInstance> & TInstance
  ): InferableComponentEnhancerWithProps<{}, TProps>

  export function getContext<TOutter, TContext>(
    contextTypes: ValidationMap<TContext>
  ): InferableComponentEnhancerWithProps<TContext, TOutter>

  export function defaultProps<TOutter, TDefault = {}>(
    props: TDefault
  ): InferableComponentEnhancerWithProps<Required<TDefault>, TOutter>

  export function withProps<TOutter, TProps>(
    createProps: TProps | mapper<TOutter, TProps>
  ): InferableComponentEnhancerWithProps<TProps, TOutter>

  export function onlyUpdateForKeys<T>(
    propKeys: Array<keyof T>
  ): InferableComponentEnhancerWithProps<{}, T>

  export function withHandlers<TOutter, THandlers>(
    handlerCreators:
      | HandleCreators<TOutter, THandlers>
      | HandleCreatorsFactory<TOutter, THandlers>
  ): InferableComponentEnhancerWithProps<THandlers, TOutter>
}

declare module 'recompact/withState' {
  import { withState } from 'recompose'
  export default withState
}

declare module 'recompact/withHandlers' {
  import { withHandlers } from 'recompact'
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

declare module 'recompact/onlyUpdateForKeys' {
  import { onlyUpdateForKeys } from 'recompact'
  export default onlyUpdateForKeys
}

declare module 'recompact/pure' {
  import { pure } from 'recompose'
  export default pure
}
