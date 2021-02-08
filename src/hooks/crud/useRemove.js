import useDeleteApi from '../api/useDeleteApi'

export default function useRemove (api) {
  const state = useDeleteApi(api)

  return { ...state, remove: state.delete }
}
