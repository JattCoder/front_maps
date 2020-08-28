import { combineReducers } from 'redux'
import login from './login'
import register from './register'
import recovery from './recover'
import recovered from './recovered'
import confirmacc from './confirmacc'
import mylocation from './mylocation'

const rootreducers =  combineReducers({
  login,recovery,register,recovered,confirmacc,mylocation
})

export default rootreducers