import { combineReducers } from 'redux'
import login from './login'
import register from './register'
import recovery from './recover'

const rootreducers =  combineReducers({
  login,recovery,register
})

export default rootreducers