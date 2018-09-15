import map from 'lodash/map'
import filter from 'lodash/filter'
import { get } from './typesafe-get'

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

const mapped = map(items, item => item.category)
// you need to define condition specificaly as boolean, otherwise it doesn't work
const filtered = filter(map(items, item => item.category), p => Boolean(p))

const category = get(items, 0, 'category', 'name')

console.log('map category: ', mapped)
console.log('map and filter by category: ', filtered)
console.log('get category: ', category)
