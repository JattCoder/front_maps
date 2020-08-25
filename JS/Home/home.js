import React,{ useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Uimage from './uimage'
import MapView, { Marker } from 'react-native-maps';
import { search } from '../../actions/search/search'
import {Myposition} from '../Components/location/myposition'

const Home = (props) => {
    const [user,setuser] = useState({})
    const [search,setsearch] = useState('')
    const [position,setposition] = useState({
        latitude: 41.392502,
        longitude: -81.534447,
        speed: 0,
        heading: 0,
        altitude: 0,
        altitudeAccuracy: 0,
        accuracy: 0,
        received: true
    })
    const dispatch = useDispatch()
    // let nextposition = Myposition(position)
    // if(nextposition.latitude != position.latitude || nextposition.longitude != position.longitude){
    //     setposition(Myposition(position))
    // }
    useSelector((state)=>{
        console.log('Data for search...: ',state.search)
    })

    useEffect(()=>{
        setuser(props.route.params.user)
    })
    selectedRegion = (pos) => {
        //i will be making calls to backend to get the data of autocomplete,
        //if 2 to 0 autocomplete, then look for places, to show it to user
    }
    searchIt = (e) => {
        setsearch(e)
    }
    return(
        <View style={Styles.Page}>
            <MapView showsBuildings ref={ref => { map = ref }} onRegionChange={(pos)=>selectedRegion(pos)} style={{height:'100%',width:'100%',alignItems:'center',zIndex:10}}
                initialRegion={{
                    latitude: position.latitude,
                    longitude: position.longitude,
                    latitudeDelta: 1/300,
                    longitudeDelta: 2/300,}}
                    onLayout={() => {
                        map.animateToBearing(245);
                        map.animateToViewingAngle(45);
                      }}>
                <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <TouchableOpacity style={Styles.ContactBox}></TouchableOpacity>
                    <View style={Styles.SearchBox}>
                        <TouchableOpacity style={{flexDirection:'row'}} activeOpacity={1}>
                            <Text style={{color:'white'}}>Search</Text>
                            <TouchableOpacity style={{height:25,borderWidth:0.6,marginLeft:7,marginTop:-4,borderColor:'black'}}/>
                            <TextInput style={Styles.SearchInput} onChangeText={(e)=>dispatch(search(user.id,e,{lat:position.latitude,lng:position.longitude}))} onKeyPress={()=> alert('pressed')} autoCapitalize = 'none'/>
                        </TouchableOpacity>
                        {search != '' ? 
                        <View style={Styles.SearchResults}>
                            <View style={{height:35,alignItems:'center'}}>
                                <Text>Harmandeep Mand</Text>
                                <Text>Robinpreet Mand</Text>
                            </View>
                        </View> : null}
                    </View>
                    <TouchableOpacity style={Styles.ImageBox}>
                        {user.photo != '' ? <Image source={{uri: user.image}}/> : <Uimage name={user.name}/>}
                    </TouchableOpacity>
                </View>
                {position.received == true ? <Marker coordinate={{latitude: position.latitude,longitude: position.longitude}} /> : null}
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
        marginTop:'15%',
        width:45,
        height:45,
        borderRadius:25,
        borderColor:'black',
        borderWidth:1,
        marginLeft:'3%',
        marginRight:'3%'
    },
    ContactBox:{
        marginTop:'15%',
        width:45,
        height:45,
        borderRadius:25,
        borderColor:'black',
        marginLeft:'1%',
        marginRight:'3%'
    },
    SearchResults:{
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        marginTop:14,
        width:250,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems:'center'
    }
})