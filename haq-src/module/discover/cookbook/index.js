import * as R from 'ramda'
import React, { Component } from 'react'

import {
    View,
    Text,
    SafeAreaView,
    Image,
    ImageBackground,
    ScrollView,
    Input,
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
    Carousel,
    Badge,
    SearchBar,
} from '@ant-design/react-native'

import Icon_material from 'react-native-vector-icons/MaterialCommunityIcons'

import Theme from '#/haq-src/theme'

const Advertisement_4 = require('../../../../asset/img/4.jpg')
const Advertisement_5 = require('../../../../asset/img/5.jpg')
const Advertisement_6 = require('../../../../asset/img/6.jpg')
const Advertisement_7 = require('../../../../asset/img/7.jpg')
const Advertisement_8 = require('../../../../asset/img/8.jpg')
const Advertisement_9 = require('../../../../asset/img/9.jpg')
const Advertisement_10 = require('../../../../asset/img/10.jpg')
const Advertisement_11 = require('../../../../asset/img/11.jpg')
const Advertisement_12 = require('../../../../asset/img/12.jpg')
const Advertisement_13 = require('../../../../asset/img/13.jpg')
const Advertisement_14 = require('../../../../asset/img/14.jpg')
const Advertisement_15 = require('../../../../asset/img/15.jpg')
const Advertisement_16 = require('../../../../asset/img/16.jpg')
const Advertisement_17 = require('../../../../asset/img/17.jpg')
const Advertisement_18 = require('../../../../asset/img/18.jpg')
const Advertisement_19 = require('../../../../asset/img/19.jpg')
const Advertisement_20 = require('../../../../asset/img/20.jpg')
const Advertisement_21 = require('../../../../asset/img/21.jpg')


const style = {
    title_container: {
        marginTop: 36,
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
}

// 查询
const Search = payload => (
    <WingBlank>
        <View style={{
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>

            <View style={{
                flex: 1,
                marginRight: 16,
            }}>
                <SearchBar
                    style={{
                        borderRadius: 10,
                    }}
                    placeholder='搜索菜谱'>

                </SearchBar>
            </View>

            <Icon_material name={'account-heart-outline'} color={Theme['text-active']} size={28} style={{}}/>
        </View>
    </WingBlank>
)

// 菜单列表
const Menu = payload => (
    <WingBlank>
        <View style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            {
                R.addIndex(R.map)(
                    (v, k) => (
                        <View key={k} style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 50,
                                height: 50,
                                backgroundColor: v.color,
                                borderRadius: 25,
                            }}>
                                <Icon_material name={v.icon} color={'white'} size={25}/>
                            </View>
                            <Text style={{marginTop: 10, fontSize: 12}}>{v.name}</Text>
                        </View>
                    )
                )([
                    {
                        name: '菜系',
                        path: '',
                        icon: 'hexagon-slice-2',
                        color: '#7C91FE',
                    },
                    {
                        name: '口味',
                        path: '',
                        icon: 'cake',
                        color: '#FEC976',
                    },
                    {
                        name: '功效',
                        path: '',
                        icon: 'fan',
                        color: '#68DBC7',
                    },
                    {
                        name: '人群',
                        path: '',
                        icon: 'face-recognition',
                        color: '#6CA9FB',
                    },
                    {
                        name: '全部',
                        path: '',
                        icon: 'graphql',
                        color: '#FEC976',
                    },
                ])
            }
        </View>
    </WingBlank>
)

// 今日推荐
const Recommend = class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
        }
    }

    handleChange(index) {
        this.setState({
            index: index,
        })
    }

    render() {
        return (
            <WingBlank>
                <View style={[style.title_container, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <Text style={style.title}>今日推荐</Text>

                    <Text style={{fontSize: 14, color: Theme['text-unactive']}}>
                        <Text style={{fontSize: 18, color: Theme['text-active']}}>{this.state.index + 1}</Text>/3
                    </Text>
                </View>
                <Carousel
                    dots={true}
                    afterChange={(index) => this.handleChange(index)}
                    style={{height: 190}}>

                    <Image
                        style={{width: '100%', height: 226, borderRadius: 6,}}
                        source={Advertisement_4}/>

                    <Image
                        style={{width: '100%', height: 226, borderRadius: 6,}}
                        source={Advertisement_5}/>

                    <Image
                        style={{width: '100%', height: 226, borderRadius: 6,}}
                        source={Advertisement_6}/>

                </Carousel>
            </WingBlank>
        )
    }
}

// 潮流菜系
const Cuisine = payload => (
    <WingBlank>
        <View style={style.title_container}>
            <Text style={style.title}>潮流菜系</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 118,
        }}>
            {
                R.addIndex(R.map)(
                    (v, k) => (
                        <ImageBackground key={k} source={v.source} style={{
                            flex: 1,
                            marginHorizontal: 4,
                            borderRadius: 10,
                            overflow: 'hidden',
                        }}>
                            <View style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0, 0.20)',
                                // paddingHorizontal: 20,
                                paddingVertical: 8,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 18,
                                    marginBottom: 6,
                                }}>
                                    {v.title}
                                </Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 14,
                                }}>
                                    {v.desc}
                                </Text>
                            </View>
                        </ImageBackground>
                    )
                )([
                    {
                        title: '轻松一餐',
                        desc: 'Easy Delicious Recipes',
                        source: Advertisement_10,
                    },
                    {
                        title: '网红菜',
                        desc: 'Star\'s Recipes',
                        source: Advertisement_11,
                    },
                ])
            }
        </View>
    </WingBlank>
)

// 营养配餐
const Diet = payload => (
    <WingBlank>
        <View style={style.title_container}>
            <Text style={style.title}>营养配餐</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 280,
        }}>
            <ImageBackground source={Advertisement_13} style={{
                flex: 1,
                marginHorizontal: 4,
                borderRadius: 8,
                overflow: 'hidden',
            }}>
                <WingBlank>
                    <Text style={{
                        color: Theme['tex-active'],
                        fontSize: 20,
                        marginBottom: 6,
                        marginTop: 32,
                    }}>
                        开启专属营养师服务
                    </Text>
                    <Text style={{
                        color: Theme['tex-active'],
                        fontSize: 20,
                        marginBottom: 2,
                    }}>
                        吃得更健康
                    </Text>
                    <View style={{
                        width: 114,
                        borderRadius: 20,
                        borderWidth: Theme['border-width'],
                        borderColor: Theme['text-active'],
                        paddingVertical: 10,
                        marginTop: 120,
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: Theme['tex-active'],
                            fontSize: 18,
                        }}>
                            开始设置
                        </Text>
                    </View>
                </WingBlank>
            </ImageBackground>
        </View>
    </WingBlank>
)

export default class Module extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: Theme['base-color'],
            }}>
                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >
                    <Search/>
                    <Menu/>
                    <Recommend/>
                    <Cuisine/>
                    <Diet/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
