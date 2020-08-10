import React,{ useState, useEffect } from 'react'
import { View, StyleSheet,Text,TouchableOpacity,Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { currentuser } from '../../actions/currentuser/currentuser'
import DeviceInfo from 'react-native-device-info';
import Dialog from "react-native-dialog";

const Login = (props) => {

    const[confirmbox,setconfirmbox] = useState(false)
    const[profileconfirm,setprofileconfirm] = useState(false)
    const[emailconfirm,setemailconfirm] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        //check if user is confirmed or no
        if(props.route.params.user.confirmed == false){
            //user is not confirmed
            //will make a request to backend to send confirmation email to user
            setTimeout(()=>{
                //after 1 sec, dialog will appear for samplebox
                //with in 1 sec, will play a loading bar 
                setconfirmbox(true)
            },1000)
        }
    })

    deviceInfo = () => {
        DeviceInfo.getMacAddress().then(mac => {
            alert(mac)
        });
    }

    
    return(
        <View style={Styles.Page}>
            <Text style={{color:'white',fontSize:30}}>Welcome</Text>
            <Text style={{color:'white',fontSize:20}}>Hello {props.route.params.user.name}</Text>
            <Text style={{color:'white',fontSize:20}}>This is your first login to FunApp.</Text>
            <Text style={{color:'white',fontSize:20}}>Before we start the fun, lets confirm your email.</Text>
            <Text style={{color:'white',fontSize:20}}>I send you an email with temporary code</Text>
            <Text style={{color:'white',fontSize:20}}>Please enter confirmation code in box below</Text>
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