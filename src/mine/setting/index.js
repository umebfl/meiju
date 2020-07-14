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
// 列表数据
import ConstantData from './constantData'

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
                <View style={styles.header}>
                    <WingBlank>
                        <Text style={styles.headerTitle}> {title} </Text>
                    </WingBlank>
                </View>
            )}
            ItemSeparatorComponent={() => (
                <View style={{height: 0.5, backgroundColor: '#EEE'}}/>
            )}
            sections={ConstantData.data}
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
