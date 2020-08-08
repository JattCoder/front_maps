import { combineReducers } from 'redux'
import login from './login'
import register from './register'
import recovery from './recover'
import recovered from './recovered'

const rootreducers =  combineReducers({
  login,recovery,register,recovered
})

export default rootreducers