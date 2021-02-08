export const getDataFromSuccess = response => {
  if (response && response.data) {
    return response.data
  }
}

export const getDataFromError = error => {
  const response = error.response

  if (response.data) {
    return response.data
  }
}
