import { LOGIN } from '../actions/login/login'
import { LOGIN_RES } from '../actions/login/reslogin'
import { PASSCHANGE } from '../actions/recover/passchange'

let initialState = {
    code: '',
    message: '',
    result: false
}

const reducer = (state = {}, action) => {
    switch(action.type){
        case LOGIN:
            return { ...state, login: action.response }
        case LOGIN_RES:
            return { ...state, login: action.response }
        case PASSCHANGE:
            return { ...state, login: action.response }
        default:
            return state
    }
}

export default reducer