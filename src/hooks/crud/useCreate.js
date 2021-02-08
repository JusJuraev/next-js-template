import usePostApi from '../api/usePostApi'

export default function useCreate (api) {
  const { post, ...state } = usePostApi(api)

  return { ...state, create: post }
}
