import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    SectionList,
    ImageBackground
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'

import Icon_antDesign from 'react-native-vector-icons/AntDesign'
import Icon_ionicons from 'react-native-vector-icons/Ionicons'

const DefaultsImg = require('../../../asset/defaultImage.jpg')

// 场景新玩法列表数据
const Data = [
    {
        title: "自动控制",
        type: 'autoControl',
        isRecommend: false,
        data:['1']
    },
    {
        title: "场景新玩法",
        type: 'sceneGameplay',
        isRecommend: true,
        data:[
            {
                title: '一键洗浴',
                subtitel: '一键打开浴室灯光、热水器',
                imageURL: 'http://www.remodelingart.com/product/E.jpg',
            },
            {
                title: '一键开灯',
                subtitel: '一键打开客厅、卧室、厨房或者阳台灯光',
                imageURL: 'http://img.zcool.cn/community/01847559fd4113a801216a4bc62c51.jpg@2o.jpg',
            },
            {
                title: '定时清扫',
                subtitel: '每天定时清扫',
                imageURL: 'http://n1.itc.cn/img8/wb/recom/2016/09/01/147272743791352333.JPEG',
            },
            {
                title: '定时布防',
                subtitel: '每天定时进入家庭安防模式',
                imageURL: 'http://pic1.to8to.com/case/1312/27/20131227_ee9eaa6864923aba8370f25wy8071jrh.jpg',
            },
        ]
    },
]

// 自动控制的item
const AutoControl = payload => {
    return (
        <WingBlank>
            <View style={{
                paddingVertical:10,
                marginVertical: 15,
                backgroundColor:'#EEF7F6',
            }}>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: 60,
                    marginLeft: 15,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'left',
                    }}>
                        创建自动控制
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: 'grey',
                        textAlign: 'left',
                        paddingTop: 15,
                    }}>
                        点击奢姿自动控制设备
                    </Text>
                </View>
            </View>
        </WingBlank>
    )
}

// 场景新玩法的Item
const SceneGameplayItem = payload => {
    return (
        <View style={{paddingVertical:8}}>
            <WingBlank>
                <ImageBackground
                    source={{uri: payload.item.imageURL}}
                    defaultSource={DefaultsImg}
                    style={{
                        flex:1,
                        overflow: 'hidden',
                        borderRadius: 8,
                        marginHorizontal: 4,
                        height: 200,
                        flexDirection: 'column-reverse',}}
                >
                    <View style={{ marginLeft: 25, paddingBottom: 20 }}>
                        <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: 'white',
                                textAlign: 'left',
                        }}>
                            {payload.item.title}
                        </Text>
                        <Text style={{
                                fontSize: 11,
                                color: 'white',
                                textAlign: 'left',
                                paddingTop: 10,
                        }}>
                            {payload.item.subtitel}
                        </Text>
                    </View>
                </ImageBackground>
            </WingBlank>
        </View>
    )
}

// 渲染对应的Item
const Item = payload => {
    return (
        payload.section.type === 'sceneGameplay' ? <SceneGameplayItem item={payload.item}/> : <AutoControl/>
    )
}

// 组头 自动控制 / 场景新玩法
const HeaderItem = payload => {
    return (
        <WingBlank>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical:10}}> {payload.title} </Text>
                {
                    payload.rightButton ?
                        <View>
                            {payload.rightButton}
                        </View>
                        :
                        null
                }
            </View>
            {
                payload.isRecommend ?
                    <View style={{
                        borderRadius: 18,
                        backgroundColor: 'black',
                        width: 80,
                        marginTop: 12,
                        marginBottom: 10,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingVertical: 6,
                        paddingHorizontal: 10
                    }}>
                        <Icon_antDesign name='staro' color={'white'} size={18}/>
                        <Text style={{color: 'white', fontSize: 16}}> 推荐 </Text>
                    </View>
                    :
                    null
            }
        </WingBlank>
    )
}

export default class Connect extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <SectionList
                    sections={Data}
                    renderItem={({ item, index, section }) =>
                        <Item item={item} section={section}/>
                    }
                    renderSectionHeader={({ section: { title, type, isRecommend } }) => (
                        <HeaderItem
                        title={title}
                        type={type}
                        isRecommend={isRecommend}
                        rightButton={
                            type === 'autoControl' ?
                                <Icon_ionicons name='ios-add' color={'grey'} size={30}/>
                                :
                                null}/>
                    )}
                    keyExtractor={(item, index) => item + index}
                    showsVerticalScrollIndicator={false}
                    stickySectionHeadersEnabled={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        paddingVertical: 14,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        height: 52
    },
    headerTitle: {
        flex: 1,
        fontSize:13,
        color: 'grey'
    }
})
