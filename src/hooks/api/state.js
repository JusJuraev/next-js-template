export const PENDING = 'PENDING'
export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'

export const initialState = {
  data: null,
  error: null,
  isSuccess: false,
  isFail: false,
  isLoading: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case PENDING: return {
      ...state,
      isLoading: true
    }
    case SUCCESS: return {
      data: action.payload,
      error: null,
      isSuccess: true,
      isFail: false,
      isLoading: false
    }
    case FAIL: return {
      data: null,
      error: action.payload,
      isSuccess: false,
      isFail: true,
      isLoading: false
    }
    default: return state
  }
}
