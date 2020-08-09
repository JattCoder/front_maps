import React,{ useState, useEffect } from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { currentuser } from '../../actions/currentuser/currentuser'
import DeviceInfo from 'react-native-device-info';

// or ES6+ destructured imports

//import { getUniqueId, getManufacturer } from 'react-native-device-info';

const Login = (props) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        DeviceInfo.getMacAddress().then(mac => {
            alert(mac)
        });
    })

    
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