export const REMOVE_USER = 'CURRENT_USER'

let initialState = {
    id: '',
    name: '',
    email: '',
    phone: '',
    photo: '',
    confirmation: ''
}

export const removeuser = () => {
    return async (dispatch) => {
        return await {dispatch({type: REMOVE_USER, payload: initialState})}
    }
}