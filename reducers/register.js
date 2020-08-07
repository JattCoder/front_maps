import { REGISTER } from '../actions/register/register'

let initialState = {
    code: '',
    message: '',
    result: false
}

const register = (state = {}, action) => {
    switch(action.type){
        case REGISTER:
            return { ...state, register: action.response }
        default:
            return state
    }
}

export default register