import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './JS/Login/login'
import LoginAttempt from './JS/Login/loginAttempt'
import Recover from './JS/Login/recover'
import Home from './JS/Home/home'

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>{
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='LoginAttempt' component={LoginAttempt} />
        <Stack.Screen name="Recover" component={Recover} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    }</NavigationContainer>
  )
}

export default App