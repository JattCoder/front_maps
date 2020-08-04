export const LOGIN = 'LOGIN'

export const login = (email,pass,method) => {
    return async (dispatch) => {
        var url = new URL("https://localhost:3000/account"),
            params = {em: email, ps: pass, md: method}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return await fetch(url)
        .then(res => {return res.json()})
        .then(data => {dispatch({type: LOGIN, response: data})})
    }
}