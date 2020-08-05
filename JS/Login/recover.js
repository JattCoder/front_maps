import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'

const Recover = (props) => {

    const[startRecovery,setstartRecovery] = useState(false)
    const[forgot,setforgot] = useState(false)

    attemptRecovery = () => {
        setstartRecovery(true)
    }

    forgotPIN = () => {
        setforgot(true)
    }

    return(
        <View style={Styles.Page}>
            <Text style={{color:'white',fontSize:25}}>Account Recovery</Text>
            <TouchableOpacity style={Styles.NameBox}>
                <Text style={{color:'white'}}>Name</Text>
                <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                <TextInput style={Styles.NameInput} onChangeText={()=>setemail()}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.EmailBox}>
                <Text style={{color:'white'}}>Email</Text>
                <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                <TextInput style={Styles.EmailInput} onChangeText={()=>setemail()}/>
            </TouchableOpacity>
            <Text style={Styles.PinCode}>Recovery PIN Code: It was set during Registration</Text>
            <TouchableOpacity style={Styles.PinBox}>
                <Text style={{color:'white'}}>PIN   </Text>
                <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                <TextInput style={Styles.EmailInput} onChangeText={()=>setemail()}/>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Recover} onPress={()=>attemptRecovery()}>
                {startRecovery == false ? <Text style={Styles.RecoverText}>Recover</Text> : <ActivityIndicator size='small' color='#5810d8'/>}
            </TouchableOpacity>
            <TouchableOpacity style={Styles.Forgot} onPress={()=>forgotPIN()}>
                {forgot == false ? <Text style={Styles.ForgotText}>Forgot PIN</Text> : <ActivityIndicator size='small' color='#5810d8'/>}
            </TouchableOpacity>
        </View>
    )
}

export default Recover

const Styles = StyleSheet.create({
    Page:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5810d8'
    },
    NameBox:{
        marginTop:80,
        borderRadius:25,
        borderColor:'black',
        borderWidth:0.8,
        width:280,
        height:45,
        flexDirection:'row',
        padding:13
    },
    NameInput:{
        paddingLeft:1,
        paddingRight:1,
        width:190,
        height:20,
        marginLeft:10,
        color:'white'
    },
    EmailBox:{
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
    PinCode:{
        marginTop:20,
        color:'white'
    },
    PinBox:{
        marginTop:10,
        borderRadius:25,
        borderColor:'black',
        borderWidth:0.8,
        width:280,
        height:45,
        flexDirection:'row',
        padding:13
    },
    Recover:{
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
    RecoverText:{
        padding:12,
        color:'black'
    },
    Forgot:{
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
    ForgotText:{
        padding:12,
        color:'black'
    }
})