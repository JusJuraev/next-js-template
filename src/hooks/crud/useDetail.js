import { path } from 'ramda'
import useGetApi from '../api/useGetApi'
import useDeepCompareEffect from '../useDeepCompareEffect'

export function toDetail (state) {
  const detail = path(['data', 'result'], state) || {}
  const isLoading = state.isLoading
  const getDetail = state.getDetail

  return { detail, isLoading, getDetail }
}

export default function useDetail (api, params, autoSend = true) {
  const { get, ...state } = useGetApi(api, { params })
  const getDetail = get

  useDeepCompareEffect(() => {
    if (autoSend) {
      getDetail(params)
    }
  }, [params, autoSend])

  return toDetail({ ...state, getDetail })
}
