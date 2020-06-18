import React, { Component } from 'react'

import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
    Carousel,
    Badge,
} from '@ant-design/react-native'

import Icon from 'react-native-vector-icons/AntDesign'
import Icon_material from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon_feather from 'react-native-vector-icons/Feather'
import Icon_evilIcons from 'react-native-vector-icons/EvilIcons'

import LinearGradient from 'react-native-linear-gradient'

import Theme from '#/haq-src/theme'

import FuncList, {FuncItem} from '#/haq-src/component/funcList'

const User_img = require('../../../asset/img/user.jpg')
const Advertisement_1 = require('../../../asset/img/1.jpg')
const Advertisement_2 = require('../../../asset/img/2.jpg')
const Advertisement_3 = require('../../../asset/img/3.jpg')

// 栏位：消息
const View_msgbar = payload => (
    <View style={{marginTop: 4}}>
        <WingBlank>
            <View style={{
                height: 45,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                <Badge text={109} dot style={{marginRight: 20}}>
                    <Icon name='calendar' color={Theme['text-active']} size={20}/>
                </Badge>

                <Badge text={109} dot>
                    <Icon name='mail' color={Theme['text-active']} size={20}/>
                </Badge>
            </View>
        </WingBlank>
    </View>
)

// 栏位：信息
const View_infobar = payload => (
    <View style={{marginTop: 20}}>
        <WingBlank>
            <View style={{
                height: 45,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        style={{width: 66, height: 66, borderRadius: 33, marginRight: 14}}
                        source={User_img}/>

                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: Theme['text-active'], fontSize: 22, marginRight: 6, fontFamily: 'Tahoma'}}>Ume</Text>
                            <Text style={{backgroundColor: '#4E81CA', fontSize: 9, color: 'white', borderRadius: 4, padding: 2}}>普通会员</Text>
                        </View>
                        <View style={{width: 74, marginTop: 6, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#767881', borderRadius: 12, padding: 2}}>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <Icon_material name='hexagon-slice-2' color={'white'} size={12} style={{marginRight: 3}}/>
                                <Text style={{fontSize: 10, color: 'white', }}>3 勋章</Text>
                            </View>
                            <Icon name='right' color={'white'} size={10}/>
                        </View>
                    </View>
                </View>

                <View>
                    <Icon name='right' color={Theme['text-unactive']} size={14}/>
                </View>
            </View>
        </WingBlank>
    </View>
)

// 栏位：积分
const View_integralbar = payload => (
    <View style={{marginTop: 38}}>
        <WingBlank>
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
            }}>
                <LinearGradient colors={['#416CB5', '#216CB5', '#115CA5']} locations={[0, 0.4, 0.8]} style={{
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    height: 36,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flex: 1,
                    paddingTop: 6,
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 11, color: 'white'}}>成长值134 | 积分120</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 11, color: 'white'}}>更多会员特权</Text>
                        <Icon name='right' color={'white'} size={8}/>
                    </View>
                </LinearGradient>

                <LinearGradient colors={['#777', '#444', '#333']} locations={[0, 0.4, 0.8]} style={{
                    borderTopRightRadius: 14,
                    borderTopLeftRadius: 14,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 120,
                    height: 30,
                    paddingTop: 2,
                }}>
                    <Text style={{color: '#FFEC8B', fontSize: 11}}>开通PRO会员</Text>
                    <Icon name='right' color={'#FFEC8B'} size={8}/>
                </LinearGradient>
            </View>
        </WingBlank>
    </View>
)

// 栏位：广告
const View_advertisementbar = payload => (
    <View style={{marginTop: 10}}>
        <WingBlank>
            <View style={{
                borderRadius: 10,
            }}>
                <Carousel
                    style={{height: 90,}}
                    autoplay
                    infinite>

                    <Image
                        style={{height: 90, width: '100%', height: '100%', borderRadius: 10,}}
                        source={Advertisement_1}/>

                    <Image
                        style={{height: 90, width: '100%', height: '100%', borderRadius: 10,}}
                        source={Advertisement_2}/>

                    <Image
                        style={{height: 90, width: '100%', height: '100%', borderRadius: 10,}}
                        source={Advertisement_3}/>

                </Carousel>
            </View>
        </WingBlank>
    </View>
)

// 栏位：功能
const View_functionbar = payload => (
    <View style={{marginTop: 10}}>
        <FuncList data={[
                {
                    title: '我的商城',
                    onPress: () => alert('123'),
                    icon: <Icon_feather name='shopping-bag' color={Theme['text-active']} size={22}/>,
                },
                {
                    title: '家电定制',
                    onPress: () => alert('123'),
                    icon: <Icon_material name='content-cut' color={Theme['text-active']} size={22}/>,
                },
                {
                    title: '服务卡券',
                    onPress: () => alert('123'),
                    icon: <Icon_feather name='credit-card' color={Theme['text-active']} size={22}/>,
                },
            ]}>
        </FuncList>

        <FuncList data={[
                {
                    title: '社区中心',
                    onPress: () => alert('123'),
                    icon: <Icon_material name='comment-processing-outline' color={Theme['text-active']} size={22}/>,
                },
                {
                    title: '帮助中心',
                    onPress: () => alert('123'),
                    icon: <Icon_material name='face-agent' color={Theme['text-active']} size={22}/>,
                },
                {
                    title: '家庭安全卫士',
                    onPress: () => alert('123'),
                    icon: <Icon_material name='shield-cross-outline' color={Theme['text-active']} size={22}/>,
                },
                {
                    title: '去评分',
                    onPress: () => alert('123'),
                    icon: <Icon name='staro' color={Theme['text-active']} size={22}/>,
                },
            ]}>
        </FuncList>

        <FuncList data={[
                {
                    title: '第三方平台设备',
                    onPress: () => alert('123'),
                    icon: <Icon_material name='flip-to-back' color={Theme['text-active']} size={22}/>,
                },
                {
                    title: '设置',
                    onPress: () => payload.navigation.navigate('/mine/setting'),
                    icon: <Icon name='setting' color={Theme['text-active']} size={22}/>,
                },
            ]}>
        </FuncList>
    </View>
)


export default class Module extends Component {
    render() {

        const {
            navigation,
        } = this.props

        return (
            <ScrollView style={{
                backgroundColor: Theme['base-color'],
            }}>
                <View_msgbar/>
                <View_infobar/>
                <View_integralbar/>
                <View_advertisementbar/>
                <View_functionbar navigation={navigation}/>
            </ScrollView>
        )
    }
}
