import React,{ useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = (props) => {
    const [user,setuser] = useState({})
    const [loaded,setloaded] = useState(false)
    useEffect(()=>{
        setuser(props.route.params.user)
    })
    return(
        <View style={Styles.Page}>
            <Text>Welcome {user.name}</Text>
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
    }
})