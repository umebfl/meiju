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

import Theme from '../theme'


const Tab = createMaterialBottomTabNavigator()

class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName='Discover'
                activeColor= {Theme['icon-color-basic']}
                barStyle={{ backgroundColor: '#FFF' }}
                labeled={true}
                shifting={false}
            >
                <Tab.Screen name="首页" component={Home} options={{
                    tabBarIcon: ({ focused, tintColor }) => (<Image
                        source={require('../asset/home.png')}
                        style={[styles.icon, {tintColor: focused ? Theme['icon-color-basic'] : tintColor}]}/>),
                }}/>
                <Tab.Screen name="发现" component={Discover} options={{
                    tabBarIcon: ({ focused, tintColor }) => (<Image
                        source={require('../asset/discover.png')}
                        style={[styles.icon, {tintColor: focused ? Theme['icon-color-basic'] : tintColor}]}/>),
                }}/>
                <Tab.Screen name="商城" component={Store} options={{
                    tabBarIcon: ({ focused, tintColor }) => (
                                <Image
                                source={require('../asset/store.png')}
                                style={[styles.icon, {tintColor: focused ? Theme['icon-color-basic'] : tintColor}]}/>),
                }}/>
                <Tab.Screen name="我的" component={Mine} options={{
                    tabBarIcon: ({ focused, tintColor }) => (<Image
                        source={require('../asset/mine.png')}
                        style={[styles.icon, {tintColor: focused ? Theme['icon-color-basic'] : tintColor}]}/>),
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
                    <TabNavigator/>
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
