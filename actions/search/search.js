export const SEARCH = 'SEARCH'

export const search = (id,input,lat,lng) => {
    return async (dispatch) => {
        var url = new URL(`http://localhost:3000/account/${id}/search/${input}`),
            params = {lat,lng}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return await fetch(url)
        .then(res => {return res.json()})
        .then(data => {
            //dispatch({type: SEARCH, payload: data})
            console.log(data)
        })
        .catch(err => {
            let error = {
                code: 'Error: Network',
                message: 'Network Request Failed',
                result: false
            }
            dispatch({type: SEARCH, payload: error})})
    }
}