import React from 'react'

import {
    View,
    StyleSheet,
    SectionList,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'

import Theme from '#/src/theme'
import Icon_list from '#/asset/icon'

import Icon from 'react-native-vector-icons/AntDesign'

const DefItem = payload => (

    <TouchableOpacity style={styles.item} onPress={() => payload.onPress()}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    {
                        payload.data.icon
                        ? (
                            <View>
                                {payload.icon}
                            </View>
                        )
                        : null
                    }
                    <WingBlank>
                        <Text style={{fontSize: 15}}>
                           {payload.data.title}
                        </Text>
                    </WingBlank>
                </View>
                <Text style={{fontSize: 12,marginLeft:5, marginLeft: 'auto', color: Theme['text-subtitel']}}>
                   {payload.data.subtitel}
                </Text>
            </View>

            <WingBlank>
                <Icon name='right' color={Theme['icon-color-basic']} size={15}/>
            </WingBlank>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        height: 52
    },
})


export default DefItem
