import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput, Image, Text } from 'react-native'
import Uimage from './uimage'
import MapView, { Marker } from 'react-native-maps';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import Searchlist from '../Components/location/searchlist'
import { Myposition } from '../Components/location/myposition'

const Home = (props) => {
    const [user, setuser] = useState({})
    const [position, setposition] = useState({
        latitude: 41.392502,
        longitude: -81.534447,
        speed: 0,
        heading: 0,
        altitude: 0,
        altitudeAccuracy: 0,
        accuracy: 0,
        received: true
    })

    useEffect(() => {
        setuser(props.route.params.user)
    })

    selectedRegion = (pos) => {
        console.log('Region changed to...: ',pos)
    }

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <View style={Styles.Page}>
                <MapView showsBuildings ref={ref => { map = ref }} onRegionChange={(pos) => selectedRegion(pos)} style={{ height: '100%', width: '100%', alignItems: 'center' }}
                    initialRegion={{
                        latitude: position.latitude,
                        longitude: position.longitude,
                        latitudeDelta: 1 / 300,
                        longitudeDelta: 2 / 300,
                    }}
                    onLayout={() => {
                        map.animateToBearing(245);
                        map.animateToViewingAngle(45);
                    }}>
                    {position.received == true ? <Marker coordinate={{ latitude: position.latitude, longitude: position.longitude }} /> : null}
                </MapView>
            </View>
            <View style={{ width: '100%', height:'10%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity style={Styles.ContactBox}></TouchableOpacity>
                <View style={Styles.SearchBox}>
                    <GoogleAutoComplete apiKey='AIzaSyDMCLs_nBIfA8Bw9l50nSRwLOUByiDel9U' debounce={300}>
                        {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
                            <React.Fragment>
                                <View style={{width:'100%',flexDirection:'row'}}>
                                    <TextInput style={Styles.SearchInput} value={inputValue} onChangeText={handleTextChange} placeholder="Search..."/>
                                    {inputValue != '' ? 
                                    <View onPress={()=>alert('Pressed')} style={{zIndex:20,height:20,width:20,borderRadius:25,backgroundColor:'darkgrey',marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text>X</Text>
                                    </View> : null}
                                </View>
                                {inputValue.length >= 1 ? 
                                    <View style={{borderWidth:1,marginTop:15,marginLeft:-13,width:280,borderRadius:10,backgroundColor: 'rgba(0,0,0,0.2)'}}>
                                    {locationResults.map((el, i) => (
                                        <TouchableOpacity onPress={()=>alert('Pressed.. '+el.structured_formatting.secondary_text)}>
                                            <Searchlist uid={user.id} name={el.structured_formatting.secondary_text} description={el.description} placeid={el.place_id} lat={position.latitude} lng={position.longitude}/>
                                            <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                                                <TouchableOpacity style={{width:230, borderWidth:0.5}}/>
                                            </View>
                                        </TouchableOpacity>
                                        //<Text key={i} style={{fontSize:15,marginTop:8, height:20, width:300}}>{el.description}</Text>
                                    ))}
                                    </View>
                                : null}
                            </React.Fragment>
                        )}
                    </GoogleAutoComplete>
                </View>
                <TouchableOpacity style={Styles.ImageBox}>
                    {user.photo != '' ? <Image source={{ uri: user.image }} /> : <Uimage name={user.name} />}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const Styles = StyleSheet.create({
    Page: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5810d8',
        position: 'absolute'
    },
    SearchBox: {
        marginTop: '20%',
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 0.8,
        width: 280,
        height: 45,
        padding: 13,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    SearchInput: {
        paddingLeft: 1,
        paddingRight: 1,
        width: 210,
        height: 20,
        marginLeft: 10,
        color: 'black'
    },
    ImageBox: {
        marginTop: '20%',
        width: 45,
        height: 45,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: '3%',
        marginRight: '3%'
    },
    ContactBox: {
        marginTop: '20%',
        width: 45,
        height: 45,
        borderRadius: 25,
        borderColor: 'black',
        marginLeft: '1%',
        marginRight: '3%'
    },
    SearchResults: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 14,
        width: 250,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center'
    }
})