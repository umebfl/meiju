import React from 'react'

import {
    View,
    StyleSheet,
    SectionList,
    Text,
    Image,
    SafeAreaView,
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
    Badge,
    Carousel
} from '@ant-design/react-native'

import Icon from 'react-native-vector-icons/AntDesign'

import DefItem from '#/src/component/defItem'
import NavigatorView from '#/src/component/navigatorView'

import Theme from '#/src/theme'

// import ConstantData from '#/src/setting/constantData'

const ConstantData = [
        {
            title: "账号",
            data:
            [
                {
                    title: '账号与安全',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
            ]
        },
        {
            title: "设备",
            data:
            [
                {
                    title: '设备管理',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
                {
                    title: '家庭管理',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
                {
                    title: 'WiFi列表管理',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
                {
                    title: '设备消息管理',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
                {
                    title: '固件升级',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
            ]
        },
        {
            title: "实验室功能",
            data:
            [
                {
                    title: 'App语音助手',
                    subtitel: '关闭',
                    icon: '',
                    path: '',
                },
                {
                    title: '食材识别',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
                {
                    title: 'NFC',
                    subtitel: '关闭',
                    icon: '',
                    path: '',
                },
                {
                    title: '小组件Widget',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
            ]
         },
        {
            title: "其他",
            data:
            [
                {
                    title: '隐私安全保护',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
                {
                    title: '清除缓存',
                    subtitel: '0.2M',
                    icon: '',
                    path: '',
                },
                {
                    title: '分享美的美居',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
                {
                    title: '关于美的美居',
                    subtitel: '',
                    icon: '',
                    path: '',
                },
            ]
        },
]

const SettingList = payload => {
    return (
        <SectionList
            renderItem={({ item, index, section }) =>
                <DefItem
                    data={item}
                    onPress={() => (item.path ? navigation.navigate(item.path) : alert(''))}
                />
            }
            renderSectionHeader={({ section: { title } }) => (
                <View style={styles.header}></View>
            )}
            ItemSeparatorComponent={() => (
                <View style={{height: 0.5, backgroundColor: '#EEE'}}/>
            )}
            sections={ConstantData}
            keyExtractor={(item, index) => item + index}
        />
    )
}

export default class Setting extends React.Component {

    render() {

        const {
            navigation,
        } = this.props

        return (
            <SafeAreaView style={styles.container}>
                <NavigatorView
                    title = '设置'
                    leftBottom = {
                        <Icon
                            name='left'
                            color={Theme['icon-color-theme']}
                            onPress={() => navigation.goBack()}
                            size={18}/>
                    }
                />
                <SettingList/>
            </SafeAreaView>
        )
    }

}

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
