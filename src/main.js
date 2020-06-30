import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Provider } from '@ant-design/react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Discover from './discover/discover.js'
import Home from './home/home'
import Store from './store/store'
import Mine from './mine/mine'

import MyStore from '#/src/mine/myStore'
import Setting from '#/src/mine/setting'

import Theme from './theme'


const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName='Discover'
                activeColor= {Theme['icon-color-theme']}
                barStyle={{ backgroundColor: '#FFF' }}
                labeled={true}
                shifting={false}
            >
                <Tab.Screen name="首页" component={Home} options={{
                    tabBarIcon: ({ focused, tintColor }) => (<Image
                        source={require('../asset/tab/home.png')}
                        style={[styles.icon, {tintColor: focused ? Theme['icon-color-theme'] : tintColor}]}/>),
                }}/>
                <Tab.Screen name="发现" component={Discover} options={{
                    tabBarIcon: ({ focused, tintColor }) => (<Image
                        source={require('../asset/tab/discover.png')}
                        style={[styles.icon, {tintColor: focused ? Theme['icon-color-theme'] : tintColor}]}/>),
                }}/>
                <Tab.Screen name="商城" component={Store} options={{
                    tabBarIcon: ({ focused, tintColor }) => (
                                <Image
                                source={require('../asset/tab/store.png')}
                                style={[styles.icon, {tintColor: focused ? Theme['icon-color-theme'] : tintColor}]}/>),
                }}/>
                <Tab.Screen name="我的" component={Mine} options={{
                    tabBarIcon: ({ focused, tintColor }) => (<Image
                        source={require('../asset/tab/mine.png')}
                        style={[styles.icon, {tintColor: focused ? Theme['icon-color-theme'] : tintColor}]}/>),
                }}/>
            </Tab.Navigator>
        )
    }
}

export default class Main extends Component {

    render() {
        const Stack = createStackNavigator()
        return (
            <Provider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='/main' options={{title: null, headerStyle: {height: 0}}} component={TabNavigator}/>
                        <Stack.Screen name='/mine/myStore' options={{title: null, headerStyle:{height: 0}}} component={MyStore}/>
                        <Stack.Screen name='/mine/setting' options={{title: null, headerStyle:{height: 0}}} component={Setting}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 18,
        height: 18,
    },
});
