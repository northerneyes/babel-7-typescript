declare module 'recompact' {
  import {
    stateProps,
    ComponentEnhancer,
    InferableComponentEnhancerWithProps,
    ReactLifeCycleFunctions,
    mapper,
    HandleCreators,
    HandleCreatorsFactory,
    predicateDiff,
    predicate
  } from 'recompose'
  import { ComponentType as Component, ValidationMap } from 'react'

  export function compose<OProps, I1, I2>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>
  ): ComponentEnhancer<I2 & I1 & OProps, OProps>

  export function compose<OProps, I1, I2, I3>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>,
    f3: InferableComponentEnhancerWithProps<I3, I2 & I1 & OProps>
  ): ComponentEnhancer<I3 & I2 & I1 & OProps, OProps>

  export function compose<OProps, I1, I2, I3, I4>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>,
    f3: InferableComponentEnhancerWithProps<I3, I2 & I1 & OProps>,
    f4: InferableComponentEnhancerWithProps<I4, I3 & I2 & I1 & OProps>
  ): ComponentEnhancer<I4 & I3 & I2 & I1 & OProps, OProps>

  export function compose<OProps, I1, I2, I3, I4, I5>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>,
    f3: InferableComponentEnhancerWithProps<I3, I2 & I1 & OProps>,
    f4: InferableComponentEnhancerWithProps<I4, I3 & I2 & I1 & OProps>,
    f5: InferableComponentEnhancerWithProps<I5, I4 & I3 & I2 & I1 & OProps>
  ): ComponentEnhancer<I5 & I4 & I3 & I2 & I1 & OProps, OProps>

  export function compose<OProps, I1, I2, I3, I4, I5, I6>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>,
    f3: InferableComponentEnhancerWithProps<I3, I2 & I1 & OProps>,
    f4: InferableComponentEnhancerWithProps<I4, I3 & I2 & I1 & OProps>,
    f5: InferableComponentEnhancerWithProps<I5, I4 & I3 & I2 & I1 & OProps>,
    f6: InferableComponentEnhancerWithProps<I6, I5 & I4 & I3 & I2 & I1 & OProps>
  ): ComponentEnhancer<I6 & I5 & I4 & I3 & I2 & I1 & OProps, OProps>

  export function compose<OProps, I1, I2, I3, I4, I5, I6, I7>(
    f1: InferableComponentEnhancerWithProps<I1, OProps>,
    f2: InferableComponentEnhancerWithProps<I2, I1 & OProps>,
    f3: InferableComponentEnhancerWithProps<I3, I2 & I1 & OProps>,
    f4: InferableComponentEnhancerWithProps<I4, I3 & I2 & I1 & OProps>,
    f5: InferableComponentEnhancerWithProps<I5, I4 & I3 & I2 & I1 & OProps>,
    f6: InferableComponentEnhancerWithProps<
      I6,
      I5 & I4 & I3 & I2 & I1 & OProps
    >,
    f7: InferableComponentEnhancerWithProps<
      I7,
      I6 & I5 & I4 & I3 & I2 & I1 & OProps
    >
  ): ComponentEnhancer<I7 & I6 & I5 & I4 & I3 & I2 & I1 & OProps, OProps>

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

  export function withPropsOnChange<TOutter, TProps>(
    shouldMapOrKeys: Array<keyof TOutter> | predicateDiff<TOutter>,
    createProps: mapper<TOutter, TProps>
  ): InferableComponentEnhancerWithProps<TProps, TOutter>

  export function setDisplayName<T>(
    displayName: string
  ): InferableComponentEnhancerWithProps<{}, T>

  export function debug<T>(): InferableComponentEnhancerWithProps<{}, T>

  export function branch<TOutter>(
    test: predicate<TOutter>,
    trueEnhancer: InferableComponentEnhancerWithProps<{}, TOutter>,
    falseEnhancer?: ComponentEnhancer<any, any> | InferableComponentEnhancer<{}>
  ): InferableComponentEnhancerWithProps<{}, TOutter>

  export function renderNothing<TProps>(
    component: Component<TProps>
  ): Component<TProps>
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

declare module 'recompact/withPropsOnChange' {
  import { withPropsOnChange } from 'recompact'
  export default withPropsOnChange
}

declare module 'recompact/setDisplayName' {
  import { setDisplayName } from 'recompact'
  export default setDisplayName
}

declare module 'recompact/debug' {
  import { debug } from 'recompact'
  export default debug
}

declare module 'recompact/renderNothing' {
  import { renderNothing } from 'recompact'
  export default renderNothing
}

declare module 'recompact/branch' {
  import { branch } from 'recompact'
  export default branch
}

declare module 'recompact/InferableComponentEnhancerWithProps' {
  import { InferableComponentEnhancerWithProps } from 'recompose'
  export default InferableComponentEnhancerWithProps
}
