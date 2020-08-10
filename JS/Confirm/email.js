import React,{ useState, useEffect } from 'react'
import { View, StyleSheet,Text,TouchableOpacity,Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { currentuser } from '../../actions/currentuser/currentuser'
import DeviceInfo from 'react-native-device-info';

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
             {confirmbox == true ? <Dialog.Container visible={true}>
                <Dialog.Title>Email Not Confirmed!</Dialog.Title>
                <Dialog.Description>Please look for code in your email to confirm your email</Dialog.Description>
                <Dialog.Input onChangeText={e=>setemailconfirm(e)}/>
                <Dialog.Button label='Cancel' onPress={()=>alert('dont want to cofirm, lets head back to login')}/>
                <Dialog.Button label='Confirm' onPress={()=>alert('Confirm my email')}/>
            </Dialog.Container> : <Text/>}
            <TouchableOpacity>
                {props.route.params.user.photo == '' ? <Text>Build Image</Text> : <Image />}
                <TouchableOpacity>
                <Text>{props.route.params.user.name}</Text>
                <Text>{props.route.params.user.email}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity>
                {}
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
    }
})