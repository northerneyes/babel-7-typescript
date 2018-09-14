export function update<T extends object, K extends keyof T>(
  obj: T,
  updateSpec: Pick<T, K>
): T {
  const result = {} as T
  type Tkeys = keyof T
  ;(Object.keys(obj) as Tkeys[]).forEach(key => (result[key] = obj[key]))
  ;(Object.keys(updateSpec) as K[]).forEach(
    (key: K) => (result[key] = updateSpec[key])
  )
  return result
}

export type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }

export function assertNever<T>(_: never, state: T): T {
  return state
}
