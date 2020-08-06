import { LOGIN } from '../actions/login/login'
import { LOGIN_RES } from '../actions/login/reslogin'
import { REGISTER } from '../actions/register/register'
import { PASSCHANGE } from '../actions/recover/passchange'

let initialState = {
    code: '',
    message: '',
    result: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return { ...state, login: action.response }
        case LOGIN_RES:
            return { ...state, login: action.response }
        case PASSCHANGE:
            return { ...state, login: action.response }
        case REGISTER:
            return { ...state, login: action.response }
        default:
            return state
    }
}

export default reducer