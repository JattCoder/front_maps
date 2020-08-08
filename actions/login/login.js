export const LOGIN = 'LOGIN'

export const login = (email,pass, method) => {
    return async (dispatch) => {
        var url = new URL("http://localhost:3000/login"),
            params = {em: email, ps: pass, method}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return await fetch(url)
        .then(res => {return res.json()})
        .then(data => {dispatch({type: LOGIN, payload: data})})
        .catch(err => console.log(err))
    }
}