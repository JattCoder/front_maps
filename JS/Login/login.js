import React,{ useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import Dialog from "react-native-dialog";
import Recover from './recover'

const Login = (props) => {
    const[tries,settries] = useState(0)
    const[email,setemail] = useState('')
    const[pass,setpass] = useState('')
    const[show,setshow] = useState(false)
    const[forgot,setforgot] = useState(true)

    LoginAttempt = (e) => {
        settries(tries+1)
      
        //props.navigation.navigate('LoginAttempt',{email:email})
        //alert(`Email: ${email}\nPassword: ${pass}\nAttempts: ${tries}`)
    }
    if(tries >= 4) alert('Password Reset?')
    return(
        <View style={Styles.Page}>
            <Text style={Styles.Heading}>Welcome to New App</Text>
            <Image source={{uri:'https://images.app.goo.gl/REU5wKvQuZMF4YGL6'}}/>
            <TextInput placeholder='Email' style={Styles.EmailInput} onChangeText={e=>setemail(e)}/>
            <TextInput placeholder='Password' style={Styles.PassInput} onChangeText={p=>setpass(p)} secureTextEntry={true}/>
            <TouchableOpacity style={Styles.Login} onPress={(e)=>LoginAttempt(e)}>
                <Text style={Styles.LoginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Google} onPress={()=>{props.navigation.navigate('Home',{name:'Harry Potter'})}}>
                <Text style={Styles.GoogleText}>Login with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const Styles = StyleSheet.create({
    Page:{
        margin:50
    },
    Heading:{
        fontSize:25,
        color:'black',
        marginTop:150,
        marginLeft:45
    },
    Google:{
        marginTop:20,
        borderRadius:25,
        backgroundColor:'black',
        height:40,
        bottom:0,
    },
    GoogleText:{
        padding:12,
        color:'white',
        marginLeft:90
    },
    Login:{
        marginTop:60,
        borderRadius:25,
        backgroundColor:'black',
        height:40,
        bottom:0,
    },
    LoginText:{
        padding:12,
        color:'white',
        marginLeft:130
    },
    EmailInput:{
        padding:10,
        marginLeft:25,
        marginTop:330
    },
    PassInput:{
        padding:10,
        marginLeft:25,
        marginTop:10
    }
})
