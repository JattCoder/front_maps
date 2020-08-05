export const ACCOUNT = 'ACCOUNT'

export const recover = (name,email,pin) => {
    return async (dispatch) => {
        var url = new URL("https://localhost:3000/account/recover"),
            params = {nm: name, em: email, pn: pin}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return await fetch(url)
        .then(res => {return res.json()})
        .then(data => {dispatch({type: ACCOUNT, response: data})})
    }
}