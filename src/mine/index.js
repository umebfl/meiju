import React from 'react'
import * as R from 'ramda'

import {
    View,
    StyleSheet,
    SectionList,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
    Badge,
    Carousel
} from '@ant-design/react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/AntDesign'
import Icon_material from 'react-native-vector-icons/MaterialCommunityIcons'

import DefItem from '#/src/component/defItem'

import ConstantData from './list.json'
import Icon_list from '#/asset/icon'

import THEME from '#/src/theme'

import {
    bindActionCreators,
} from 'redux'

import {
    connect,
} from 'react-redux'

import {
    action,
} from './reducer'

const Stack = createStackNavigator()

const AdvImageArray = [
    require('../../asset/img/1.jpg'),
    require('../../asset/img/2.jpg'),
    require('../../asset/img/1.jpg'),
    require('../../asset/img/3.jpg'),
]

// 消息栏
const MessageView = payload => {
    return (
        <View style={{marginTop: 10}}>
            <WingBlank>
                <View style={{ height: 45, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Badge text={109} dot>
                        <Icon name='calendar' color={'black'} size={24}/>
                    </Badge>
                    <Icon style={{marginLeft: 20}} name='mail' color={'black'} size={24}/>
                </View>
            </WingBlank>
        </View>
    )
}

// 用户信息栏
const UserDefView = payload => {
        return (
            <View style={{ marginTop: 12}}>
                <WingBlank>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                               style={{width: 64,height: 64, borderRadius: 32, backgroundColor: 'black'}}
                            />
                            <View style={{marginLeft: 10, justifyContent: 'space-around', height: 50}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 18, marginRight: 6}}>UserName</Text>
                                    <View style={{backgroundColor: '#4E81CA',  borderRadius: 2, padding: 2}}>
                                        <Text style={{fontSize: 9, color: 'white'}}>普通会员</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: '#696E77', width: 74,borderRadius: 10, flexDirection: 'row', padding: 4, alignItems: 'center', justifyContent: 'space-around',}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', }}>
                                        <Icon_material name='hexagon-slice-2' color={'white'} size={12} style={{marginRight: 3}}/>
                                        <Text style={{fontSize: 10, color: 'white',marginRight: 6}}>2 勋章</Text>
                                    </View>
                                    <Icon name='right' color={'white'} size={10}/>
                                </View>
                            </View>
                        </View>
                        <Icon name='right' color={THEME['icon-color-basic']} size={15}/>
                    </View>
                </WingBlank>
            </View>
        )
}

// 广告栏
const AdvertisementbarView = playload => {
    return (
        <View style={{marginTop: 10}}>
            <WingBlank>
                <Carousel
                    style={{height: 90}}
                    selectedIndex={2}
                    autoplay
                    infinite
                    afterChange={this.onHorizontalSelectedIndexChange}
                >
                    {
                        R.addIndex(R.map)(
                            (v, k) => (
                                <Image
                                    style={{height: 90, width: '100%', height: '100%', borderRadius: 10,}}
                                    source={v}
                                    key={k}
                                />
                            )
                        )(AdvImageArray)
                    }
                </Carousel>
            </WingBlank>
        </View>
    )
}

class Connect extends React.Component {

    render() {
        const {
            navigation,
            mine,
        } = this.props
        console.log('===> ',mine.isLogin)
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    renderItem={({ item, index, section }) =>
                        <DefItem
                            data={item}
                            icon={
                                <Image
                                    style={{width:20,height:20, marginLeft: 12}}
                                    source={Icon_list[item.icon]}/>
                            }
                            onPress={() => (navigation.navigate(item.path))}
                        />
                    }
                    ListHeaderComponent={() => (
                        <View>
                            <MessageView/>
                            <UserDefView/>
                            <AdvertisementbarView/>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.header}></View>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{height: 0.5, backgroundColor: '#EEE'}}/>
                    )}
                    sections={ConstantData.mineList}
                    keyExtractor={(item, index) => item + index}
                />
            </SafeAreaView>
        )
    }
}

export default connect(
    state => ({
        mine: state.mine
    }),
    dispatch => ({
        action: bindActionCreators({
            ...action,
        }, dispatch),
    }),
)(Connect)


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    view: {
        flex:1,
    },
    header: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        height: 5,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        height: 52
    },
})
