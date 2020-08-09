export const CURRENT_USER = 'CURRENT_USER'

export const currentuser = (id,name,email,phone,photo,confirmation) => {
    return (dispatch) => {
        user = {
            id: id,
            name: name,
            email: email,
            phone: phone,
            photo: photo,
            confirmation: confirmation
        }
        return dispatch({type:CURRENT_USER,payload:user})
        //return {dispatch({type: CURRENT_USER, payload: user})}
    }
}