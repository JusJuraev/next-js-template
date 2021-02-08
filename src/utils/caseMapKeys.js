import { curry, keys, map, values, zipObj } from 'ramda'

export default curry((fn, obj) => zipObj(map(fn, keys(obj)), values(obj)))
