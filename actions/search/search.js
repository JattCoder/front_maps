export const SEARCH = 'SEARCH'

export const search = (id,input,region) => {
    return async (dispatch) => {
        return await fetch(`http://localhost:3000/account/${id}/search/${input}/lat=/${region.lat}/lng=/${region.lng}`)
        .then(res => {return res.json()})
        .then(data => {dispatch({type: SEARCH, payload: data})})
        .catch(err => {
            let error = {
                code: 'Error: Network',
                message: 'Network Request Failed',
                result: false
            }
            dispatch({type: SEARCH, payload: error})})
    }
}