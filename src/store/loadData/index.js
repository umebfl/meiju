import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

import AsyncStorage from '#/RNAsyncStorage'

let storage = AsyncStorage.storage

export default class Connect extends React.Component {

    loadData() {

        storage.load({
            key: 'loginState',
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            // 你只能在then这个方法内继续处理ret数据
            // 而不能在then以外处理
            // 也没有办法“变成”同步返回
            // 你也可以使用“看似”同步的async/await语法
            console.log('-->',ret)
        }) .catch(err => {
            // 如果没有找到数据且没有sync方法，
            // 或者有其他异常，则在catch中返回
            console.warn(err.message);
            switch (err.name) {
                case 'NotFoundError':
                // TODO;
                break;
                case 'ExpiredError':
                // TODO
                break;
            }
        });
    }


    render() {
        return (
            <View style={styles.view}>
                <TouchableOpacity onPress={() => this.loadData()}>
                    <Text> load Data </Text>
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
