import React,{ useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { currentuser } from '../../actions/currentuser/currentuser'

const Login = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        
    })

    return(
        <View style={Styles.Page}>
            <Text style={{color:'white'}}>Lets Config your account and and get all data and save it to state</Text>
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