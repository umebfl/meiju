import React from 'react'
import * as R from 'ramda'

import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    Text,
    RefreshControl,
    TouchableOpacity
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'

import Video from 'react-native-video'


import Theme from '#/src/theme'

import Waterfall from 'react-native-waterfall'
import Icon_feather from 'react-native-vector-icons/Feather'

const GetURL = 'http://localhost:3000/'

const Device_Height = Dimensions.get('window').height

const DefaultsImg = require('../../../asset/defaultImage.jpg')

class VideoPlayer extends React.Component {

    state = {
        isPaused: true,  //是否暂停
    }

    changePaused() {
        this.setState ({
            isPaused: this.state.isPaused ? false : true
        })
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.changePaused()}>
                <Video
                    source={require('../../../asset/demo.mp4')}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    style={{width: '100%', height: 120,borderRadius: 5}}
                    allowsExternalPlayback={false} // 不允许导出 或 其他播放器播放
                    paused = {this.state.isPaused} // 控制视频是否暂停
                    resizeMode='cover' // 视频拉伸,平台:Android ExoPlayer, Android MediaPlayer, iOS, Windows UWP
                    posterResizeMode='contain' // 拉伸 平台: 全平台
                    volume={0} // 音量
                    repeat={true} // 循环
                />
            </TouchableOpacity>

        )
    }
}

const WaterfallItem = payload => {
    height = payload.data.height * payload.itemWidth / payload.data.width
    return (
        <View>
            {
                payload.data.VideoURL ?
                    <View>
                        <VideoPlayer/>
                    </View>
                    :
                    <Image
                        style={{width: '100%', height:  height > 180 ? 180 : height, borderRadius: 5}}
                        source={{uri: payload.data.imageURL}}
                        defaultSource={DefaultsImg}
                        resizeMode={'cover'}
                    />
            }
            <WhiteSpace/>
            <Text numberOfLines={2} style={{fontSize: 13}}>{payload.data.userContent}</Text>
            <WhiteSpace/>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        style={{width: 20, height: 20, borderRadius: 10, backgroundColor: 'black'}}
                    />
                    <Text style={{fontSize: 13, color:Theme['text-basic']}}> {payload.data.userName} </Text>
                </View>
                <Icon_feather name='thumbs-up' color={Theme['text-basic']} size={13}/>
            </View>
        </View>
    )
}

class WaterfallView extends React.Component {

    state = {
        isRefreshing: false,
        isLoadingMore: false,
    }

    componentDidMount() {
       this.data = []
       this.loadMore()
     }

    getDatas() {
        // 需要逐个push，否则会出现延迟渲染问题, 加载更多时this.data的引用不能改变
        fetch(GetURL)
            .then((res) => res.json())
            .then(data => {
                for(var i=0; i < data.discover.length - 1; ++i) {
                    this.data.push(
                        data.discover[i]
                    )
                }
                // this.data = [...this.data, ...data.discover]
                // this.data = this.data.push(...data.discover)
                this.setState({isLoadingMore: false})
                console.log('----> datas: ', this.data);
            })
            .catch(error => {
                alert('数据请求失败: ' + error.message)
                this.setState({isLoadingMore: false})
            })
    }

    loadMore = () => {
        // debugger
        if(this.state.isRefreshing || this.state.isLoadingMore) {
            return;
        }

        this.setState({isLoadingMore: true})
        this.getDatas();
    }

    // 刷新时改变props.data的引用
    refresh = () => {
        if(this.state.isRefreshing || this.state.isLoadingMore) {
            return;
        }

        this.setState({isRefreshing: true})
        setTimeout(()=>{
            this.data = [];
            this.getDatas();
        },500)
    }

    renderItem = (itemData, itemIdx, itemContainer) => {
        return (
            <WaterfallItem data={itemData} itemWidth={itemContainer.width}/>
        )
    }

    render() {
        const {
            data,
        } = this.props

        return (
            <View style={styles.container}>
                <Waterfall
                    style={styles.waterfall}
                    data={this.data}
                    gap={20}
                    numberOfColumns={2}
                    expansionOfScope={1000}
                    onEndReachedThreshold={-0.5}
                    onEndReached={this.loadMore}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing = {this.state.isRefreshing}
                            onRefresh = {this.refresh}
                        />}
                />
            </View>
        )
    }
}

export default class Connect extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <WaterfallView/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    waterfall:{
        flex:1,
    }
});
