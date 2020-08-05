import { ACCOUNT } from '../actions/recover/account'
import { PIN } from '../actions/recover/pin'

let initialState = {
    code: '',
    message: '',
    result: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ACCOUNT:
            return { ...state, recovery: action.response }
        case PIN:
            return { ...state, recovery: action.response }
        default:
            return state
    }
}

export default reducer