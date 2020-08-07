export const PASSCHANGE = 'PASSCHANGE'

export const passchange = (email,password) => {
    return async (dispatch) => {
        return await fetch(`https://localhost:3000/account/passupdate`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        .then(res => {return res.json()})
        .then(data => {dispatch({type: PASSCHANGE, response: data})})
    }
}