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
    const[code,setcode] = useState('')
    const[submit,setsubmit] = useState(false)
    const dispatch = useDispatch()

    submit = () => {
        if(submit != true){
            setsubmit(true)
            dispatch()
        }
    }
    
    return(
        <View style={Styles.Page}>
            <Text style={{color:'white',fontSize:30}}>Welcome</Text>
            <Text style={{color:'white',fontSize:20,marginTop:10}}>{props.route.params.user.email}</Text>
            <Text style={{color:'white',fontSize:20,marginTop:10}}>Lets Confirm your Email</Text>
            <Text style={{color:'white',fontSize:20,marginTop:10}}>Just emailed you new Temporary Confirmation Code</Text>
            <TouchableOpacity style={Styles.CodeBox}>
                <Text style={{color:'white'}}>Pass </Text>
                <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                <TextInput style={Styles.CodeInput} onChangeText={(e)=>setcode(e)}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Submit} onPress={()=>submit()}>
                {submit == false ? <Text style={Styles.GoogleText}>Confirm</Text> : <ActivityIndicator size='small' color='#5810d8'/>}
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Cancel} onPress={()=>{props.navigation.navigate('Login')}}>
                <Text style={Styles.GoogleText}>Cancel</Text>
            </TouchableOpacity>
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
    },
    CodeBox:{
        marginTop:20,
        borderRadius:25,
        borderColor:'black',
        borderWidth:0.8,
        width:280,
        height:45,
        flexDirection:'row',
        padding:13
    },
    CodeInput:{
        paddingLeft:1,
        paddingRight:1,
        width:190,
        height:20,
        marginLeft:10,
        color:'white'
    },
    Submit:{
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
    Cancel:{
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
})