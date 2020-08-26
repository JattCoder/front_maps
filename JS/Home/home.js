import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Uimage from './uimage'
import MapView, { Marker } from 'react-native-maps';
import { search } from '../../actions/search/search'
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { Myposition } from '../Components/location/myposition'

const Home = (props) => {
    const [user, setuser] = useState({})
    const [src, setsearch] = useState('')
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
    const dispatch = useDispatch()
    // let nextposition = Myposition(position)
    // if(nextposition.latitude != position.latitude || nextposition.longitude != position.longitude){
    //     setposition(Myposition(position))
    // }
    useSelector((state) => {
        console.log('Data for search...: ', state.src)
    })

    useEffect(() => {
        setuser(props.route.params.user)
    })
    selectedRegion = (pos) => {
        //i will be making calls to backend to get the data of autocomplete,
        //if 2 to 0 autocomplete, then look for places, to show it to user
    }
    searchIt = (e) => {
        setsearch(e)
        dispatch(search(user.id, e, position.latitude, position.longitude))
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
                                <TextInput style={Styles.SearchInput}
                                value={inputValue}
                                onChangeText={handleTextChange}
                                placeholder="Search..."
                                />
                                {locationResults.map((el, i) => (
                                    <Text key={i} style={{fontSize:15,marginTop:8, height:20, width:300}}>{el.place_id}</Text>
                                ))}
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
        width: 190,
        height: 20,
        marginLeft: 10,
        color: 'white'
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