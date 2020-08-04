import React from 'react'
import { View,Text,TouchableOpacity,TextInput, StyleSheet } from 'react-native'

export default CustomInput = (props) => {
    return(
        <View style={Styles.EmailBox}>
            <Text style={{color:'white'}}>Email</Text>
            <TouchableOpacity style={{height:25,borderWidth:0.5,marginLeft:7,marginTop:-4}}/>
            <TextInput style={Styles.EmailInput} onChangeText={e=>setemail(e)}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    EmailBox:{
        marginTop:330,
        borderRadius:25,
        borderColor:'black',
        borderWidth:0.3,
        width:250,
        height:45,
        flexDirection:'row',
        padding:13
    },
    EmailInput:{
        padding:13,
        marginLeft:25
    }
})