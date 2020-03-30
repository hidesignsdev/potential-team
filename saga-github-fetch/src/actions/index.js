export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE'

export const getData = (url) => {
    return { type: FETCHING_DATA, payload: url }
}
export const getDataSuccess = (data) => {
    return { type: FETCHING_DATA_SUCCESS, payload: data }
}
export const getDataFailure = () => {
    return { type: FETCHING_DATA_FAILURE }
}

