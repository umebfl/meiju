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

const ConstantData = [
        {
            title: "数据持久化",
            data:
            [
                {
                    title: '保存数据',
                    subtitel: '',
                    icon: '',
                    path: '/store/saveData',
                },
                {
                    title: '读取数据',
                    subtitel: '',
                    icon: '',
                    path: '/store/loadData',
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
                    onPress={() => (item.path ? payload.navigation.navigate(item.path) : alert(''))}
                />
            }
            renderSectionHeader={({ section: { title } }) => (
                <View style={styles.header}>
                    <Text style={{paddingVertical: 15}}> { title } </Text>
                </View>
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
                    title = '商城'
                    style = {{backgroundColor:'red'}}
                />
                <SettingList navigation = {navigation}/>
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

    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        height: 52
    },
})
