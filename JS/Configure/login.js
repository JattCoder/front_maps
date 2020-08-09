import React,{ useState } from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { currentuser } from '../../actions/currentuser/currentuser'

const Login = (props) => {
    const dispatch = useDispatch()

    return(
        <View style={Styles.Page}>
            <Text style={{color:'white'}}>Lets Config your account {props.route.params.user.name}</Text>
        </View>
    )
}

export default Login

const Styles = StyleSheet.create({
    Page:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5810d8'
    }
})