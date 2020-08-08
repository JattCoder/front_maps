import { CURRENT_USER } from '../actions/currentuser/currentuser'
import { REMOVE_USER } from '../actions/currentuser/removeuser'

let initialState = {
    id: '',
    name: '',
    email: '',
    phone: '',
    photo: '',
    confirmation: ''
}

const reducer = (currentuser = initialState, action) => {
    switch(action.type){
        case CURRENT_USER:
            return { ...currentuser, ...action.payload }
        case REMOVE_USER:
            return { ...currentuser, ...action.payload }
        default:
            return currentuser
    }
}

export default reducer