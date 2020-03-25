export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE'

export const getData = () => {
    return { type: FETCHING_DATA }
}
export const getDataSuccess = (data) => {
    return { type: FETCHING_DATA_SUCCESS, data }
}
export const getDataFailure = () => {
    return { type: FETCHING_DATA_FAILURE }
}
export const fetchData = (url) => {
    return (dispatch) => {
        dispatch(getData())
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                dispatch(getDataSuccess(data))
            }).catch((err) => {
                dispatch(getDataFailure());
                console.log('err: ', err)
            }
            )
    }
}