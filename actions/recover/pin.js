export const PIN = 'PIN'

export const recover = (name,email) => {
    return async (dispatch) => {
        var url = new URL("https://localhost:3000/account/recover/pin"),
            params = {nm: name, em: email}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return await fetch(url)
        .then(res => {return res.json()})
        .then(data => {dispatch({type: PIN, response: data})})
    }
}