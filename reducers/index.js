import { combineReducers } from 'redux'
import login from './login'
import register from './register'
import recovery from './recover'
import recovered from './recovered'
import currentuser from './currentuser'

const rootreducers =  combineReducers({
  login,recovery,register,recovered,currentuser
})

export default rootreducers