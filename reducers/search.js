import { SEARCH } from '../actions/search/search'

let initialState = {
    code: '',
    message: '',
    result: false
}

const src = (search = initialState, action) => {
    switch(action.type){
        case SEARCH:
            return { ...search, ...action.response }
        default:
            return search
    }
}

export default src