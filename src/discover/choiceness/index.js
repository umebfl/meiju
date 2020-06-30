import React from 'react'
import * as R from 'ramda'

import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'

import AutoResponisve from 'autoresponsive-react-native'

const Advertisement_4 = require('../../../asset/img/4.jpg')
const Advertisement_5 = require('../../../asset/img/5.jpg')
const Advertisement_6 = require('../../../asset/img/6.jpg')
const Advertisement_7 = require('../../../asset/img/7.jpg')
const Advertisement_8 = require('../../../asset/img/8.jpg')
const Advertisement_9 = require('../../../asset/img/9.jpg')
const Advertisement_10 = require('../../../asset/img/10.jpg')
const Advertisement_11 = require('../../../asset/img/11.jpg')
const Advertisement_12 = require('../../../asset/img/12.jpg')
const Advertisement_13 = require('../../../asset/img/13.jpg')
const Advertisement_14 = require('../../../asset/img/14.jpg')
const Advertisement_15 = require('../../../asset/img/15.jpg')
const Advertisement_16 = require('../../../asset/img/16.jpg')
const Advertisement_17 = require('../../../asset/img/17.jpg')
const Advertisement_18 = require('../../../asset/img/18.jpg')
const Advertisement_19 = require('../../../asset/img/19.jpg')
const Advertisement_20 = require('../../../asset/img/20.jpg')
const Advertisement_21 = require('../../../asset/img/21.jpg')

const ImageArray = [
    Advertisement_4,
    Advertisement_5,
    Advertisement_6,
    Advertisement_7,
    Advertisement_8,
    Advertisement_9,
    Advertisement_10,
    Advertisement_11,
    Advertisement_12,
    Advertisement_13,
    Advertisement_21,
    Advertisement_18,
    Advertisement_17,
    Advertisement_16,
    Advertisement_21
]

const SCREEN_WIDTH = Dimensions.get('window').width

export default class Connect extends React.Component {

    getItemStyle() {
        return {
            width: (SCREEN_WIDTH - 18) / 2,
            height: parseInt(Math.random() * 20 + 12) * 10,
            backgroundColor: 'rgb(92, 67, 155)',
            paddingTop: 20,
            borderRadius: 8,
        };
    }

    getAutoResponsiveProps() {
        return {
          itemMargin: 8,

        };
     }

    render() {
        return (
            <ScrollView>
                <WingBlank>
                    <AutoResponisve {...this.getAutoResponsiveProps()}>
                        {
                            R.addIndex(R.map)(
                                (v, k) => (
                                    <Image
                                        style={this.getItemStyle()}
                                        source={v}
                                        key={k}
                                    />
                                )
                            )(ImageArray)
                        }
                    </AutoResponisve>
                </WingBlank>
            </ScrollView>
        )
    }
}
