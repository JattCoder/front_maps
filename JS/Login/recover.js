import React from 'react'
import { View } from 'react-native'

const Recover = () => {
    return(
        <View>
            <Dialog.Container visible={visible}>
                <Dialog.Title>Account delete</Dialog.Title>
                <Dialog.Description>
                    Do you want to delete this account? You cannot undo this action.
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                <Dialog.Button label="Delete" onPress={this.handleDelete} />
            </Dialog.Container>
        </View>
    )
}

export default Recover