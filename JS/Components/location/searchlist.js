import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { search } from '../../../actions/search/search'

export default searchlist = (props) => {
    const dispatch = useDispatch()
    let info = {}
    useEffect(()=>{
        //dispatch(search(props.uid,props.placeid,props.lat,props.lng))
    })
    useSelector((state)=>{

    })
    return(
        <TouchableOpacity style={Styles.Page}>
            <View style={{padding:5}}>
                <Text style={{fontSize:20,marginTop:5}}>{props.name}</Text>
                <Text style={{fontSize:10,marginTop:5}}>{props.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    Page:{
        marginTop:8,
        height:70,
        width:280
    }
})