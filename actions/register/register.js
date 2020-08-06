export const REGISTER = 'REGISTER'

export const register = (name,email,phone,photo,pass,code,method) => {
    return async (dispatch) => {
        return await fetch('https://localhost:3000/account',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nm: name,em: email,ph: phone,po: photo,ps: pass,cd: code,md: method})
        })
        .then(res => {return res.json()})
        .then(data => {dispatch({type: LOGIN, response: data})})
    }
}