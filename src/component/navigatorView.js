import React from 'react'

import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'


const NavigatorView = payload => (

    <View style={styles.navigationBar} >
        <WingBlank>
            {
                payload.leftBottom
                ? (
                    <View>
                        {payload.leftBottom}
                    </View>
                )
                : null
            }
        </WingBlank>

        <Text> {payload.title} </Text>

        <WingBlank>
            {
                payload.rightBottom
                ? (
                    <View>
                        {payload.rightBottom}
                    </View>
                )
                : null
            }
        </WingBlank>
    </View>
)

const styles = StyleSheet.create({
    navigationBar: {
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default NavigatorView
