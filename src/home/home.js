import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
} from 'react-native'

import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'
import { action, } from './reducer'

import LoginScene from '#/src/login'

class Connect extends React.Component {

    render() {
        const {
            home,
            action,
        } = this.props
        return (
            <View style={styles.view}>
                <TouchableOpacity
                    onPress={() =>
                        action.loginSceneModal()
                }>
                    <Text> home: {home.loginSceneVisible===true? 'true' : 'false'} </Text>
                </TouchableOpacity>
                <Modal
                   animationType="slide"
                   transparent={true}
                   visible={home.loginSceneVisible}
                   onRequestClose={() => {
                     Alert.alert("Modal has been closed.");
                   }}>
                    <LoginScene/>
                </Modal>
            </View>
        )
    }
}

/*
onRequestClose回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。
请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
*/

export default connect(
    state => ({
        home: state.home
    }),
    dispatch => ({
        action: bindActionCreators({
            ...action,
        }, dispatch),
    }),
)(Connect)

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
