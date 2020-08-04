import React,{ useState } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import loginAction from '../../actions/login'
import resetAction from '../../actions/reslogin'
import Dialog from "react-native-dialog";
import Recover from './recover'

const Login = (props) => {
    const[loginLoad,setloginLoad] = useState(false)
    const[googleLoad,setgoogleLoad] = useState(false)
    const[tries,settries] = useState(0)
    const[recovery,setrecovery] = useState(false)
    const[email,setemail] = useState('')
    const[pass,setpass] = useState('')
    const[forgot,setforgot] = useState(true)
    const dispatch = useDispatch()

    LoginAttempt = () => {
        if(email == '' || pass == ''){
            if(email == '') alert('Email field is empty')
            else if(pass == '') alert('Password field is empty')
        }else{
            settries(tries+1)
            setloginLoad(true)
            dispatch(loginAction(email,pass,'App'))
        }
    }

    GoogleAttempt = () => {
        setgoogleLoad(true)
        dispatch(loginAction(email,pass,'Google'))
    }

    cancelRecovery = () => {
        alert('Do not want to recover my account')
    }

    acceptRecovery = () => {
        alert('Want to recover my account')
    }

    useSelector((state)=>{
        //setloginLoad(false)
        //setgoogleLoad(false)
        console.log(state.login.result)
    })

    if(tries >= 4) setrecovery(true)

    return(
        <View style={Styles.Page}>
            <Dialog.Container visible={recovery}>
                <Dialog.Title>Account Recovery?</Dialog.Title>
                <Dialog.Description>Detected Multiple Attempts, Would you like to recover your account?</Dialog.Description>
                <Dialog.Button label='Cancel' onPress={()=>cancelRecovery()}/>
                <Dialog.Button label='Recover' onPress={()=>acceptRecovery()}/>
            </Dialog.Container>
            <Text style={Styles.Heading}>Welcome to New App</Text>
            <Image source={{uri:'https://images.app.goo.gl/REU5wKvQuZMF4YGL6'}}/>
            <TouchableOpacity style={Styles.EmailBox}>
                <Text style={{color:'white'}}>Email</Text>
                <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                <TextInput style={Styles.EmailInput} onChangeText={()=>setemail()}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.PassBox}>
                <Text style={{color:'white'}}>Pass </Text>
                <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                <TextInput style={Styles.PassInput} secureTextEntry={true} onChangeText={()=>setpass()}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Login} onPress={()=>LoginAttempt()}>
                {loginLoad == false ? <Text style={Styles.LoginText}>Login</Text> : <ActivityIndicator size='small' color='#5810d8'/>}
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Google} onPress={()=>{GoogleAttempt()}}>
                {googleLoad == false ? <Text style={Styles.GoogleText}>Login with Google</Text> : <ActivityIndicator size='small' color='#5810d8'/>}
            </TouchableOpacity>
        </View>
    )
}

export default Login

const Styles = StyleSheet.create({
    Page:{
        height:'100%',
        width:'100%',
        backgroundColor:'#5810d8',
        justifyContent:'center',
        alignItems:'center'
    },
    Heading:{
        fontSize:25,
        color:'white',
        marginTop:150,
    },
    Google:{
        marginTop:20,
        borderRadius:25,
        backgroundColor:'white',
        height:45,
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
        width:250,
        flexDirection:'row'
    },
    GoogleText:{
        padding:12,
        color:'black'
    },
    Login:{
        marginTop:60,
        borderRadius:25,
        backgroundColor:'white',
        height:45,
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
        width:250,
        flexDirection:'row'
    },
    LoginText:{
        padding:12,
        color:'black',
    },
    EmailBox:{
        marginTop:330,
        borderRadius:25,
        borderColor:'black',
        borderWidth:0.8,
        width:280,
        height:45,
        flexDirection:'row',
        padding:13
    },
    PassBox:{
        marginTop:20,
        borderRadius:25,
        borderColor:'black',
        borderWidth:0.8,
        width:280,
        height:45,
        flexDirection:'row',
        padding:13
    },
    EmailInput:{
        paddingLeft:1,
        paddingRight:1,
        width:190,
        height:20,
        marginLeft:10,
        color:'white'
    },
    PassInput:{
        paddingLeft:1,
        paddingRight:1,
        width:190,
        height:20,
        marginLeft:10,
        color:'white'
    }
})
