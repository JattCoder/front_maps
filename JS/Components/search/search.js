import React,{ useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Getplaces from '../../Components/search/getplaces'

export default Search = () => {
    const [input,setinput] = useState('')
    const [places,setplaces] = useState([])
    if(input != ''){
        let result = Getplaces(input)
        console.log('Results...',result)
    }
    return(
        <View style={Styles.Page}>
            {input == '' ? 
            <View style={{marginLeft:35, flexDirection:'row'}}>
                <Text style={{marginLeft:20}}>Search</Text>
                <TouchableOpacity activeOpacity={1} style={{height:18,borderWidth:0.8,marginLeft:10}}/>
            </View> : null}
            <TextInput onChangeText={(e)=>setinput(e)} value={input} style={Styles.Input}/>
            {input != '' ? 
            <TouchableOpacity style={Styles.Clear} onPress={()=>setinput('')}>
                <Text>X</Text>
            </TouchableOpacity> : null}
            {places.length != 0 ?
            <View style={Styles.List}>
                <Text>Searching</Text>
            </View> : null}
        </View>
    )
}

const Styles = StyleSheet.create({
    Page:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    Clear:{
        borderRadius:25,
        height:20,
        width:20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
    },
    Input:{
        paddingHorizontal:15,
        width:'100%'
    },
    List:{
        height: 200
    }
})