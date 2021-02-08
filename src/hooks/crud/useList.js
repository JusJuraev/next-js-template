import { path } from 'ramda'
import useGetApi from '../api/useGetApi'
import useDeepCompareEffect from '../useDeepCompareEffect'

export function toList (state) {
  const results = path(['data', 'results'], state) || []
  const count = path(['data', 'count'], state) || results.length
  const isLoading = state.isLoading
  const getList = state.getList

  return { count, results, isLoading, getList }
}

export default function useList (api, searchParams, autoSend = true) {
  const { get, ...state } = useGetApi(api)
  const getList = get

  useDeepCompareEffect(() => {
    if (autoSend) {
      getList(searchParams)
    }
  }, [autoSend, getList, searchParams])

  return toList({ ...state, getList })
}
