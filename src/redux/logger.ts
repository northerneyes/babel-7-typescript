import { createLogger } from 'redux-logger'

const level = 'info'

const logger: {
  // tslint:disable-next-line:no-any
  [method: string]: any
} = {}

// we are not using for-of yet
for (const method in console) {
  // tslint:disable-next-line:no-any
  const consoleMethod: any = (console as any)[method]
  // tslint:disable-next-line:no-any
  if (typeof consoleMethod === 'function') {
    logger[method] = consoleMethod.bind(console)
  }
}

// tslint:disable-next-line:no-any
logger[level] = function levelFn(...args: any[]) {
  const lastArg = args[args.length - 1]
  const argsWithoutLastArg = args.slice(0, args.length - 1)

  if (Array.isArray(lastArg)) {
    return lastArg.forEach(item => {
      console[level](...argsWithoutLastArg, item)
    })
  }

  console[level](...args) // eslint-disable-line prefer-spread
}

// tslint:disable-next-line:no-any
const predicate = (_: any, action: any) =>
  action.type.indexOf('@@router') === -1 &&
  action.type.indexOf('redux-form') === -1

export default createLogger({
  collapsed: true,
  level,
  predicate,
  colors: {
    title: () => '#B0E0E6',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F2040'
  },
  logger
})
