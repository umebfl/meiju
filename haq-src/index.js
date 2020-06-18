import React, { Component } from 'react'

import {
    View,
    Text,
    StatusBar,
} from 'react-native'

import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '#/haq-src/module'

import Mine_setting from '#/haq-src/module/mine/setting'

const Stack = createStackNavigator()

export default class Index extends Component {
    render() {
        return (
            <NavigationContainer>
                <StatusBar barStyle={'light-content'} />

                <Stack.Navigator>
                    <Stack.Screen name='/main' options={{title: null, headerStyle: {height: 0}}} component={Main}/>
                    <Stack.Screen name='/mine/setting' options={{title: '设置', headerTitleStyle: {fontSize: 16, justifyContent: 'center'}}} component={Mine_setting}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
