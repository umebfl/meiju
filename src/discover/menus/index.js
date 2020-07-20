import React from 'react'

import * as R from 'ramda'

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    SectionList,
    Keyboard,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'

import Icon from 'react-native-vector-icons/AntDesign'
import Icon_evilIcons from 'react-native-vector-icons/EvilIcons'
import Icon_feather from 'react-native-vector-icons/Feather'
import Theme from '#/src/theme'
import LabelText from '#/src/component/labelText'

import ListData from './listData'

const DefaultsImg = require('../../../asset/defaultImage.jpg')

const Device_Width = Dimensions.get('window').width

// 搜索栏
const SearchBar = payload => {
    const [value, onChangeText] = React.useState('');
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
             marginLeft: 15,
             marginRight: 40,
         }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 20,
                backgroundColor: '#F6F5F6',
                borderRadius: 5
            }}>
                <Icon_evilIcons style={{marginLeft: 4}} name='search' color='black' size={20}/>
                <TextInput
                    style={{ flex: 1,height: 40, borderColor: 'red' }}
                    onChangeText={text => onChangeText(text)}
                    maxLength={20}
                    placeholder={'搜索'}
                    value={value}
                />
                <Icon_evilIcons style={{marginRight: 4}} name='camera' color='black' size={25}/>
            </View>
            <Icon_feather name='user' color='black' size={20}/>
        </View>
    )
}

// 菜谱列表
const FoodMenuList = payload => {
    return (
        <View style={{flex:1, height: 100}}>
            <ScrollView
                pagingEnabled={true}
                horizontal={true}
                contentContainerStyle={styles.contentContainer}
            >
                {
                    R.addIndex(R.map)(
                        (v, k) => (

                        <Text style={{width: Device_Width - 60, backgroundColor: 'red', paddingRight: 5, marginLeft: 4}}> wdqw </Text>

                        )
                    )(payload.section.data)
                }
            </ScrollView>
        </View>
    )
}

// 菜单栏
class Menus extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isSelect: false
        }
    }

    selectMenu(v, k) {
        console.log('----select>',v, k)
    }
    render () {
        console.log('----daat>',this.props)
        const { section } = this.props

        return (
            <WingBlank>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white'}}>
                {
                    R.addIndex(R.map)(
                        (v, k) => (
                            <TouchableOpacity onPress={(v , k) => this.selectMenu()}>
                                <View style={{
                                    backgroundColor:'#F6F5F6',
                                    borderRadius: 18,
                                    marginVertical: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    paddingVertical: 6,
                                    paddingHorizontal: 10
                                }}>
                                    <Text key={k} style={{color: '#8F8F94', marginVertical: 3, fontSize: 13}}> {v.title} </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    )(section.data)
                }
            </View>
            </WingBlank>
        )
    }
}

// 主题菜谱item，只显示4个菜谱
const FoodTheme = payload => {
    return (
        <WingBlank>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                    <Text style={{fontSize: 18}}> 轻松享瘦餐 </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 13, color: Theme['text-subtitel']}}> 查看全部 </Text>
                        <Icon_feather
                            name='chevron-right'
                            color={Theme['text-subtitel']}
                            size={15}/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'space-between', marginVertical: 10}} >
                    {
                        R.addIndex(R.map)(
                            (v, k) => (
                                <View style={{ width: (Device_Width - 40) / 2, marginVertical: 10 }}>
                                    <ImageBackground style={{
                                        flexDirection: 'row',
                                        backgroundColor: 'blue',
                                        height: 120,
                                        borderRadius: 8,
                                        justifyContent: 'flex-end',
                                    }}>
                                        <View style={{marginTop: 10, marginRight: 8}}>
                                            <LabelText
                                                text={'微波炉'}
                                                fontSize={12}
                                                paddingVertical= {2}
                                                paddingHorizontal={8}
                                            />
                                        </View>
                                    </ImageBackground>
                                    <Text style={{marginTop: 15, fontSize: 13}}> 紫菜干蒸烧卖 </Text>
                                    <Text style={{marginTop: 5, fontSize: 9, color: Theme['text-subtitel']}}> 5分钟 | 困难 | 400千卡 </Text>
                                </View>
                            )
                        )([1,2,3,4])
                    }
                </View>
            </View>
        </WingBlank>
    )
}

export default class Connect extends React.Component {
    render() {
        // console.log('-->',ListData.data)
        return (
            <View style={styles.view}>
                <SectionList
                    sections={ListData.data}
                    ListHeaderComponent={() =>
                        <SearchBar/>
                    }
                    renderItem={({ item, index, section }) =>
                        <WingBlank>
                        <Text> ss </Text>
                        </WingBlank>
                    }
                    renderSectionHeader={({section}) =>
                        // <Menus section={section}/>
                        // <FoodMenuList section={section}/>
                        <FoodTheme/>
                    }
                    keyExtractor={(item, index) => item + index}
                    showsVerticalScrollIndicator={false}
                    keyboardDismissMode={'on-drag'}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        paddingVertical: 20,
        paddingHorizontal:30
    },
})
