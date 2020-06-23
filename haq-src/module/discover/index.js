import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Animated from 'react-native-reanimated'

import Theme from '#/haq-src/theme'

import Selected from '#/haq-src/module/discover/selected'
import Cookbook from '#/haq-src/module/discover/cookbook'
import Scene from '#/haq-src/module/discover/scene'
import Service from '#/haq-src/module/discover/service'

const Tab = createMaterialTopTabNavigator()

export default class Module extends Component {
    render() {
        return (
            <Tab.Navigator
                // 懒加载
                lazy={false}
                style={{
                    backgroundColor: 'white',
                }}
                tabBarOptions={{
                    style: {
                        marginTop: -9,
                        // 阴影移除
                        elevation: 0,
                        marginLeft: '12%',
                    },
                    tabStyle: {
                        width: 74,
                    },
                    labelStyle: {
                        fontSize: 20,
                        fontWeight: 'bold',
                    },
                    indicatorStyle: {
                        backgroundColor: Theme['text-active'],
                        height: 3.6,
                        borderRadius: 4,
                        marginBottom: 6,
                        width: 40,
                        marginLeft: 18,
                    },
                }}
                initialRouteName='Cookbook'>
                <Tab.Screen name='Selected' options={{tabBarLabel: '精选'}} component={Selected} />
                <Tab.Screen name='Scene' options={{tabBarLabel: '场景'}} component={Scene} />
                <Tab.Screen name='Cookbook' options={{tabBarLabel: '食谱'}} component={Cookbook} />
                <Tab.Screen name='Service' options={{tabBarLabel: '服务'}} component={Service} />
            </Tab.Navigator>
        )
    }
}







// import React, { Component } from 'react'
//
// import {
//     View,
//     Text,
// } from 'react-native'
//
//

//
// export default class Module extends Component {
//     render() {
//
//         const {
//             navigation,
//         } = this.props
//
//         return (
//             <View>
//                 <ScrollableTabView
//                     style={{
//                         backgroundColor: 'white',
//                     }}
//                     scrollWithoutAnimation={true}
//                     // renderTabBar={() => <Tab_header/>}
//                     // ref={(tabView) => {this.tabView = tabView}}
//                     tabBarBackgroundColor='white'>
//
//                     <Selected navigation={navigation}/>
//                     <Scene navigation={navigation}/>
//                     <Cookbook navigation={navigation}/>
//                     <Service navigation={navigation}/>
//
//                 </ScrollableTabView>
//             </View>
//         )
//     }
// }
