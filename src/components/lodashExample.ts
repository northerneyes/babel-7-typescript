import map from 'lodash/map'
import filter from 'lodash/filter'
import pickBy from 'lodash/pickBy'
import pick from 'lodash/pick'
import includes from 'lodash/includes'
import { get } from '@get'

type Item = {
  id: number
  name: string
  category?: {
    name: number
  }
}

const items: Array<Item> = [
  {
    id: 3,
    name: 'there',
    category: {
      name: 342
    }
  },
  { id: 1, name: 'one' }
]

const car: Item = {
  id: 4,
  name: 'there',
  category: {
    name: 342
  }
}

const notNull = <T>(p: T) => p as NonNullable<T>

const mapped = map(
  filter(items, item => Boolean(item.category)),
  item => item.category
)
// you need to define condition specificaly as boolean, otherwise it doesn't work
const filtered = filter(map(items, item => item.category), p => Boolean(p))

const category = get(items, 0, 'category', 'name')

const pickedBy: Partial<Item> = pickBy(car, value => value === 3)
const picked = pick(car, 'id', 'name')

const stringArray = ['1', '2', '3']
const allOne = includes(stringArray, '1')

console.log('map category: ', mapped)
console.log('map and filter by category: ', filtered)
console.log('get category: ', category)
console.log('pickBy: ', pickedBy)
