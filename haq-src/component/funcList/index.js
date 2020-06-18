import * as R from 'ramda'
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/AntDesign'

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'

import Theme from '#/haq-src/theme'

export default payload => (
    <View>
        <View style={{height: 8, backgroundColor: '#F8F8F8'}}></View>
        {
            R.addIndex(R.map)(
                (v, k) => (
                    <FuncItem key={k} last={k === payload.data.length - 1} onPress={v.onPress} icon={v.icon} title={v.title}/>
                )
            )(payload.data)
        }
    </View>
)


export const FuncItem = payload => (
    <TouchableOpacity onPress={payload.onPress}>
        <WingBlank style={{paddingRight: 0, marginRight: 0}}>
            <View style={{flexDirection: 'row', height: 54, alignItems: 'center'}}>
                {
                    payload.icon
                        ? (
                            <View style={{marginRight: 10}}>
                                {payload.icon}
                            </View>
                        )
                        : null
                }

                <View style={{
                    flex: 1,
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottomWidth: payload.last ? 0 : Theme['border-width'],
                    borderBottomColor: Theme['border-color']}}>

                    <View>
                        <Text style={{fontSize: 18, color: Theme['text-active'],}}>{payload.title}</Text>
                    </View>

                    <WingBlank>
                        <Icon name='right' color={ Theme['text-unactive']} size={12}/>
                    </WingBlank>
                </View>
            </View>
        </WingBlank>
    </TouchableOpacity>
)
