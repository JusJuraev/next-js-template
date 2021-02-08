import usePutApi from '../api/usePutApi'

export default function useUpdate (api) {
  const { put, ...state } = usePutApi(api)
  const update = put

  return { ...state, update }
}
