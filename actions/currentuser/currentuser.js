export const CURRENT_USER = 'CURRENT_USER'

export const currentuser = (id,name,email,phone,photo,confirmation) => {
    return async (dispatch) => {
        return await {dispatch({type: CURRENT_USER, payload: {
            id: id,
            name: name,
            email: email,
            phone: phone,
            photo: photo,
            confirmation: confirmation
        }})}
    }
}