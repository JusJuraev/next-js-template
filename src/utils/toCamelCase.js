import { equals, is, map, pipe } from 'ramda'
import caseMapKeys from './caseMapKeys'

const toCamel = str => {
  return str
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/(?:^\w|[A-Z]|_|\b\w)/g, (letter, index) =>
      equals(index, 0) ? letter.toLowerCase() : letter.toUpperCase())
    .replace(/\s+/g, '')
}

export default function toCamelCase (data) {
  if (is(Array, data)) {
    return map(toCamelCase, data)
  }

  if (is(Object, data)) {
    return pipe(
      caseMapKeys(toCamel),
      map(toCamelCase)
    )(data)
  }

  return data
}
