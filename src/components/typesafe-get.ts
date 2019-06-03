// original https://github.com/pimterry/typesafe-get
// babel cannot compile it, maybe because target for this lib is umd

// Given an object T - returns a type with undefined/null removed from
// the types of any fields.
export type Defined<T> = Exclude<Exclude<T, null>, undefined>
// The value of T[S], if it's not null/undefined
export type Prop<T, S extends keyof T> = Defined<T[S]>

export function get<
  T,
  S1 extends keyof Defined<T>,
  S2 extends keyof Prop<Defined<T>, S1>,
  S3 extends keyof Prop<Prop<Defined<T>, S1>, S2>,
  S4 extends keyof Prop<Prop<Prop<Defined<T>, S1>, S2>, S3>
>(
  obj: T,
  prop1: S1,
  prop2: S2,
  prop3: S3,
  prop4: S4
): Prop<Prop<Prop<Defined<T>, S1>, S2>, S3>[S4] | undefined

export function get<
  T,
  S1 extends keyof Defined<T>,
  S2 extends keyof Prop<Defined<T>, S1>,
  S3 extends keyof Prop<Prop<Defined<T>, S1>, S2>
>(
  obj: T,
  prop1: S1,
  prop2: S2,
  prop3: S3
): Prop<Prop<Defined<T>, S1>, S2>[S3] | undefined

export function get<
  T,
  S1 extends keyof Defined<T>,
  S2 extends keyof Prop<Defined<T>, S1>
>(obj: T, prop1: S1, prop2: S2): Prop<Defined<T>, S1>[S2] | undefined

export function get<T, S1 extends keyof Defined<T>>(
  obj: T,
  prop1: S1
): Defined<T>[S1] | undefined

// tslint:disable-next-line:no-any
export function get<T>(obj: T, ...props: string[]): any | undefined {
  // tslint:disable-next-line:no-any
  let value: any = obj

  while (props.length > 0) {
    if (value == null) return undefined

    // tslint:disable-next-line:no-any
    let nextProp = props.shift() as any
    value = value[nextProp]
  }

  return value
}
