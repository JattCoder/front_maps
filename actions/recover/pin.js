export const PIN = 'PIN'

export const recoverpin = (name,email) => {
    return async (dispatch) => {
        var url = new URL("http://localhost:3000/recover/pin"),
            params = {name,email}
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return await fetch('http://localhost:3000/recover/pin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email})
        })
        .then(res => {return res.json()})
        .then(data => {dispatch({type: PIN, response: data})})
        .catch(err => console.log(err))
    }
}