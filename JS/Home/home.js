import React from 'react'
import { View, Text } from 'react-native'

const Home = (props) => {
    return(
        <View>
            <Text>Hello {props.route.params.name}</Text>
        </View>
    )
}

export default Home