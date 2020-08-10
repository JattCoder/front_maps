export const CURRENT_USER = 'CURRENT_USER'

export const currentuser = (user) => {
    return (dispatch) => {
        user = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            photo: user.photo,
            method: user.method,
            confirmed: user.confirmed,
            membertype: user.member

        }
        return dispatch({type:CURRENT_USER,payload:user})
        //return {dispatch({type: CURRENT_USER, payload: user})}
    }
}