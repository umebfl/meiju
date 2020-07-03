import React from 'react'

import {
    View,
    StyleSheet,
    Text,
} from 'react-native'


export default class Connect extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Text> service </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
