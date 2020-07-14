import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'

import AsyncStorage from '#/RNAsyncStorage'
let storage = AsyncStorage.storage

export default class Connect extends React.Component {

    saveData() {
        // 使用key来保存数据（key-only）。这些数据一般是全局独有的，需要谨慎单独处理的数据
        // 批量数据请使用key和id来保存(key-id)，具体请往后看
        // 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
        storage.save({
          key: 'loginState', // 注意:请不要在key中使用_下划线符号!
          data: {
            from: 'some other site',
            userid: '666xxx6x6x6',
            token: 'some token',
          },

          // 如果不指定过期时间，则会使用defaultExpires参数
          // 如果设为null，则永不过期
          expires: 1000 * 3600,
        });
    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableOpacity onPress={() => this.saveData()}>
                    <Text> save data </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
