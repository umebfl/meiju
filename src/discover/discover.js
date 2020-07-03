import React from 'react'

import {
    View,
    StyleSheet,
    SafeAreaView,
    Dimensions
} from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Choiceness from '#/src/discover/choiceness'
import Menus from '#/src/discover/menus'
import Scene from '#/src/discover/scene'
import Service from '#/src/discover/service'
import Theme from '#/src/theme'

const Tab = createMaterialTopTabNavigator()
const Device_Width = Dimensions.get('window').width

const FontSize = 20
const TabBarWidth = Device_Width - 100
const IndicatorMargin = TabBarWidth / 4 / 2 - FontSize

const TabsView = payload => {
    return (
        <Tab.Navigator
            // 懒加载
            lazy={false}
            style={{
                borderWidth: 0,
            }}
            tabBarOptions={{
                style: {
                    marginTop: 0,
                    // 阴影移除
                    elevation: 0,
                    shadowColor: 'white',
                    alignSelf: 'center',
                    width: TabBarWidth,
                },
                tabStyle: {
                    // borderColor: 'grey',
                    // borderWidth: 3,
                },
                labelStyle: {
                    fontSize: FontSize,
                    fontWeight: 'bold',
                    justifyContent: 'center',

                },
                indicatorStyle: {
                    backgroundColor: 'black',
                    height: 3.6,
                    borderRadius: 4,
                    marginBottom: 6,
                    width: FontSize * 2,
                    marginLeft: IndicatorMargin,
                },
            }}
            initialRouteName='Choiceness'>
            <Tab.Screen name='Choiceness' options={{tabBarLabel: '精选'}} component={Choiceness} />
            <Tab.Screen name='Scene' options={{tabBarLabel: '场景'}} component={Scene} />
            <Tab.Screen name='Menus' options={{tabBarLabel: '食谱'}} component={Menus} />
            <Tab.Screen name='Service' options={{tabBarLabel: '服务'}} component={Service} />
        </Tab.Navigator>
    )
}

export default class Connect extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.view}>
                <TabsView/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: 'white',
    }
})
