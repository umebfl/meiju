import React from 'react'

import {
    View,
    StyleSheet
} from 'react-native'

import Choiceness from '#/src/discover/choiceness'

export default class Connect extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Choiceness/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: 'black'
    }
})
