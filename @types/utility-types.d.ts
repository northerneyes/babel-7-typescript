declare module 'utility-types' {
  export * from 'utility-types/dist/mapped-types'
  // implementation of DeepReadonly from https://github.com/piotrwitek/utility-types/blob/master/src/mapped-types.ts#L121
  // with a fix regarding _DeepReadonlyObject using Pick and keyof in _DeepReadonlyObject
  // or simply https://github.com/piotrwitek/utility-types/pull/28
  /**
   * DeepReadonly
   * @desc Readonly that works for deeply nested structure
   */
  // tslint:disable-next-line:no-any
  export type DeepReadonly<T> = T extends any[]
    ? _DeepReadonlyArray<T[number]>
    : T extends object ? _DeepReadonlyObject<T> : T

  /**
   * DeepReadonlyArray
   * @desc Nested array condition handler
   * @private
   */
  // tslint:disable-next-line:class-name
  interface _DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

  /**
   * NonFunctionKeys
   * @desc get union type of keys that are non-functions in object type `T`
   */
  type NonFunctionObject<T> = Pick<
    T,
    keyof T extends Function ? never : keyof T
  >

  /**
   * DeepReadonlyObject
   * @desc Nested object condition handler
   * @private
   */
  export type _DeepReadonlyObject<T> = {
    readonly [P in keyof NonFunctionObject<T>]: DeepReadonly<T[P]>
  }
}
