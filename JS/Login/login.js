import React,{ useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import Input from '../components/input'
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
            <TouchableOpacity style={Styles.EmailBox}>
                <Text style={{color:'white'}}>Email</Text>
                <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                <TextInput style={Styles.EmailInput} onChangeText={e=>setemail(e)}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.PassBox}>
                <Text style={{color:'white'}}>Pass </Text>
                <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                <TextInput style={Styles.PassInput} onChangeText={e=>setemail(e)}/>
            </TouchableOpacity>
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
        alignItems:'center',
        width:250
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
        alignItems:'center',
        width:250
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
