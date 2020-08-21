import React,{ useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import MapView from 'react-native-maps';

const Home = (props) => {
    const [user,setuser] = useState({})
    const [region,setregion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    useEffect(()=>{
        setuser(props.route.params.user)
    })
    return(
        <View style={Styles.Page}>
            <MapView style={{height:'100%',width:'100%',alignItems:'center',zIndex:10}}
                initialRegion={region}>
                <View style={{height:'100%',width:'100%',alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={Styles.SearchBox} activeOpacity={1}>
                            <Text style={{color:'white'}}>Search</Text>
                            <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                            <TextInput style={Styles.SearchInput} autoCapitalize = 'none'/>
                        </TouchableOpacity>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </View>
                </View>
            </MapView>
        </View>
    )
}

export default Home

const Styles = StyleSheet.create({
    Page:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5810d8'
    },
    SearchBox:{
        marginTop:'15%',
        borderRadius:25,
        borderColor:'black',
        borderWidth:0.8,
        width:280,
        height:45,
        flexDirection:'row',
        padding:13,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    SearchInput:{
        paddingLeft:1,
        paddingRight:1,
        width:190,
        height:20,
        marginLeft:10,
        color:'white'
    },
    ImageBox:{
        width:10,
        height:10,
        borderRadius:25,
        borderColor:'black',
        borderWidth:1
    }
})