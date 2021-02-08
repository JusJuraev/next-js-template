import { path } from 'ramda'
import locales from 'constants/locales'

export default function translate (key, locale) {
  return path([key, locale], locales)
}
