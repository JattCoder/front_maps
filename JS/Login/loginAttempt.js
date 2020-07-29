import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Dialog from "react-native-dialog";

const LoginAttempt = (props) => {
    const[visible,setVisible] = useState(true)
    return (
        <View style={Styles.Page}>
            {/* <Dialog.Container visible={visible}>
                <Dialog.Title>Account delete</Dialog.Title>
                <Dialog.Description>
                    Do you want to delete this account? You cannot undo this action.
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                <Dialog.Button label="Delete" onPress={this.handleDelete} />
            </Dialog.Container> */}
        </View>
    )
}

export default LoginAttempt

const Styles = StyleSheet.create({
    Page:{
        margin:100,
        backgroundColor: 'transparent'
    }
})