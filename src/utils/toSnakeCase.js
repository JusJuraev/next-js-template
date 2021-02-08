import { compose, is, map } from 'ramda'
import caseMapKeys from './caseMapKeys'

const toSnake = str => str
  .replace(/\./g, '__')
  .replace(/([A-Z])/g, $1 => '_' + $1.toLowerCase())

export default function toSnakeCase (data) {
  if (is(Array, data)) {
    return map(toSnakeCase, data)
  }

  if (is(Object, data)) {
    return compose(
      map(toSnakeCase),
      caseMapKeys(toSnake)
    )(data)
  }

  return data
}
