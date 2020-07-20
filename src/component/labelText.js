/*
    圆角文字标签
*/

import React from 'react'

import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

// 高度计算为fontSize的两倍, 圆角值计算与fontSize相等
// 默认 fontSize为15, 文本水平边距10, 垂直边距6
// 问题：无法单独设置圆角值、高度、布局样式
const LabelText = payload => (
    <View style={{
        backgroundColor: payload.backgroundColor ? backgroundColor : '#2B2B3399',
        borderRadius: payload.fontSize ? payload.fontSize : 15,
        justifyContent: 'center',
        height: payload.fontSize ? payload.fontSize * 2 : 30
    }}>
        <Text style={{
            color: payload.color ? payload.color : 'white',
            fontSize: payload.fontSize ? payload.fontSize : 15,
            paddingVertical: payload.paddingVertical ? payload.paddingVertical : 6,
            paddingHorizontal: payload.paddingHorizontal ? payload.paddingHorizontal : 10
        }}>
            {payload.text}
        </Text>
    </View>
)

export default LabelText
