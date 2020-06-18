import React, { Component } from 'react'

import {
    View,
    Text,
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Theme from '#/haq-src/theme'

import Home from '#/haq-src/module/home'
import Mine from '#/haq-src/module/mine'
import Store from '#/haq-src/module/store'
import Discover from '#/haq-src/module/discover'

const Tab = createBottomTabNavigator()

export default class Index extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName='Mine'
                tabBarOptions={{
                    activeTintColor: Theme['text-active'],
                }}>

                <Tab.Screen name='Home' component={Home}
                    options={{
                        tabBarLabel: '首页',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='home' color={color} size={size}/>
                        ),
                    }}/>

                <Tab.Screen name='Store' component={Store}
                    options={{
                        tabBarLabel: '商城',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='shopping' color={color} size={size}/>
                        ),
                    }}/>

                <Tab.Screen name='Discover' component={Discover}
                    options={{
                        tabBarLabel: '发现',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='hexagon' color={color} size={size}/>
                        ),
                    }}/>

                <Tab.Screen name='Mine' component={Mine}
                    options={{
                        tabBarLabel: '我的',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='account' color={color} size={size}/>
                        ),
                    }}/>

            </Tab.Navigator>
        )
    }
}
