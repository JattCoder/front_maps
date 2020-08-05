import { combineReducers } from 'redux'
import login from './login'
import recovery from './recover'

const rootreducers =  combineReducers({
  login,recovery
})

export default rootreducers