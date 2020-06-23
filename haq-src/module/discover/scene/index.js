import React, { Component } from 'react'

import {
    View,
    Text,
    SafeAreaView,
} from 'react-native'

import Theme from '#/haq-src/theme'

export default class Module extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: Theme['base-color'],
            }}>
                <Text>Login</Text>
            </SafeAreaView>
        )
    }
}
