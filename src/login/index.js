import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Button,
    TextInput,
    Image,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'

import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'
import { action, } from './reducer'
import { action as home_action } from '#/src/home/reducer'


import NavigatorView from '#/src/component/navigatorView'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon_fontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Theme from '#/src/theme'

const SceneBackground = require('../../asset/login/loginBackground.jpg')
const LogoImg = require('../../asset/github.png')

class MessageLogin extends React.Component {

    render() {
        const {
            home,
            action,
        } = this.props
        console.log('===MessageLogin===> ', home, action);
        return (

            <View>
                <Text> MessageLogin </Text>
            </View>

        )
    }

}

class Login extends React.Component {
    render() {
        const {
            home,
            action,
        } = this.props

        console.log('======> ', home, action)



        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.view}>
                <StatusBar
                       barStyle={'light-content'}
                   />
                <ImageBackground
                    source= {SceneBackground}
                    resizeMode= {'cover'}
                    style={{
                        height: '100%',
                        width: '100%',
                }}>
                    <View style={{flex: 1, backgroundColor: '#000000CD'}}>
                        <View style={{marginTop: 35}}>
                            <NavigatorView
                                leftBottom = {
                                    <Icon
                                        name='left'
                                        color='white'
                                        onPress={() => action.loginSceneModal()}
                                        size={18}/>
                                }
                                rightBottom={
                                    <Button
                                        title='密码登录'
                                        color='white'
                                        style={{fontSize: 12}}
                                    />
                                }
                            />
                        </View>
                        <Image
                            source= {LogoImg}
                            resizeMode= {'contain'}
                            style={{
                                height: 150,
                                width: '100%',
                                marginTop: 20
                            }}
                        />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'grey',
                            borderRadius: 20,
                            marginTop: 100,
                            marginHorizontal: 40,
                        }}>
                            <Icon_fontAwesome5 style={{marginLeft: 30, marginVertical: 10}} name='user' color='white' size={20}/>
                            <TextInput
                                style={{ flex: 1,height: 40, marginHorizontal: 15, marginVertical: 2, backgroundColor: 'grey', color: 'white' }}
                                maxLength={20}
                                placeholder='输入手机号'
                                placeholderTextColor='white'
                                keyboardType='number-pad'
                                clearButtonMode='while-editing'
                            />
                        </View>
                    </View>
                </ImageBackground>
                <MessageLogin home={home} action={action}/>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default connect(
    state => ({
        home: state.home
    }),
    dispatch => ({
        action: bindActionCreators({
            ...action,
            ...home_action
        }, dispatch),
    }),
)(Login)

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
