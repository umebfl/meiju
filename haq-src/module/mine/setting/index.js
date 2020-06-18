import React, { Component } from 'react'

import {
    View,
    Text,
    ScrollView,
} from 'react-native'

import Theme from '#/haq-src/theme'

export default class Module extends Component {
    render() {
        return (
            <ScrollView style={{
                backgroundColor: Theme['base-color'],
            }}>

            </ScrollView>
        )
    }
}
