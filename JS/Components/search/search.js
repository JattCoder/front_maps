import React,{ useState } from 'react'
import { View, TextInput, StyleSheet, Text, ActivityIndicator, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Displaycard from './displaycard'

export default Search = () => {
    const [input,setinput] = useState('')
    const [oldinput,setoldinput] = useState('')
    const [places,setplaces] = useState([])
    const [searching,setsearching] = useState(false)
    if(input != '' && input != oldinput){
        setTimeout(()=>{
            var url = new URL("http://localhost:3000/account/search"),
                params = {input}
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            fetch(url)
            .then(res => {return res.json()})
            .then(places => {
                setplaces(places)
                setoldinput(input)
            })
            .catch(err => {console.log(err)})
        },700)
    }else if(input == ''){
        if(places.length > 0)setplaces([])
    }
    return(
        <View style={Styles.Page}>
            <View style={{flexDirection:'row'}}>
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
            </View>
            <View style={{alignItems:'center'}}>
                {input != '' ?
                    places.length > 0 ? 
                    <ScrollView showsHorizontalScrollIndicator={false} style={Styles.List}>
                        {places.map((item)=>{
                            return <Displaycard item={item} />
                        })}
                    </ScrollView> : <ActivityIndicator size='small' color='black' style={{marginTop:'10%'}}/> : null}
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Page:{
        height:'100%',
        width:'100%',
        alignItems:'center',
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
        width:300,
        borderRadius:10,
        borderWidth:1,
        marginTop:'6%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        position:'absolute',
        maxHeight:400,
        minHeight:110
    }
})