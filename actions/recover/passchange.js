export const PASSCHANGE = 'PASSCHANGE'

export const passchange = (email,pass) => {
    return async (dispatch) => {
        return await fetch(`https://localhost:3000/account/pass`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({em: email,ps: pass})
        })
        .then(res => {return res.json()})
        .then(data => {dispatch({type: PASSCHANGE, response: data})})
    }
}