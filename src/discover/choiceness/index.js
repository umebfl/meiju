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

import Theme from '#/src/theme'

import Waterfall from 'react-native-waterfall'
import Icon_feather from 'react-native-vector-icons/Feather'

const GetURL = 'http://localhost:3000/'

const Device_Height = Dimensions.get('window').height

const DefaultsImg = require('../../../asset/defaultImage.jpg')

const WaterfallItem = payload => {
    height = payload.data.height * payload.itemWidth / payload.data.width
    return (
        <View>

            <Image
                style={{width: '100%', height:  height > 180 ? 180 : height, borderRadius: 5}}
                source={{uri: payload.data.imageURL}}
                defaultSource={DefaultsImg}
                resizeMode={'cover'}
            />
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

    constructor(props) {
        super(props)

    }

    state = {
        dataSource: [],
        isRefreshing: false,
        isLoadingMore: false,
    }

    componentDidMount(){
       this.data = []
       this.loadMore()
     }


    // getData() {
    //     fetch(GetURL)
    //         .then((res) => res.json())
    //         .then(data => {
    //             // console.log('---> data: ', data);
    //             console.log('-----> 原数据长度: ', this.state.dataSource.length)
    //             this.setState({
    //                 dataSource: [...this.state.dataSource, ...data.discover]
    //             })
    //             console.log('-----> 拼接数据长度: ', this.state.dataSource.length)
    //             // console.log('---> now data: ', this.state.dataSource);
    //         }
    //     )
    // }
    //
    // renderItem(itemData, itemIdx, itemContainer) {
    //     return (
    //         <WaterfallItem data={itemData} itemWidth={itemContainer.width}/>
    //     )
    // }

    // refresh() {
    //     if(this.state.isRefreshing || this.state.isLoadingMore) {
    //         return
    //     }
    //     this.setState({isRefreshing: true})
    //     setTimeout(() => {
    //         console.log('--> refreshing')
    //         this.setState({
    //             dataSource: []
    //         })
    //         this.getData()
    //         this.setState({isRefreshing: false})
    //     },500)
    // }

    addMoreDatas(){
        // for(var i=0;i<5;++i){
        //     this.data.push({
        //            "userName": "A10",
        //            "userIconUrl": null,
        //            "userContent": "'A1:iqijdojqwodjqowjdojqw'",
        //            "discover": "discover11aaasdas",
        //            "imageURL": "http://img02.tooopen.com/images/20160604/tooopen_sy_164226033798.jpg",
        //            "width": 1080,
        //            "height": 1660
        //     })
        // }
        fetch(GetURL)
            .then((res) => res.json())
            .then(data => {
                for(var i=0;i < data.discover.length - 1; ++i){
                    this.data.push(
                        data.discover[i]
                    )
                }
                // this.data = [...this.data, ...data.discover]
                // this.data = this.data.concat(data.discover)
                this.setState({isLoadingMore: false})
            }
        )
        console.log(this.data);
    }

    loadMore = () => {
        // debugger
        if(this.state.isRefreshing || this.state.isLoadingMore){
            return;
        }
        this.setState({isLoadingMore: true})
        this.addMoreDatas();
    }


    refresh = ()=>{
        if(this.state.isRefreshing || this.state.isLoadingMore){
            return;
        }
        this.setState({isRefreshing: true})
        setTimeout(()=>{
            this.data = [];
            this.addMoreDatas();
            this.setState({isRefreshing: false})
        },500)
    }
    renderItem = (itemData,itemIdx,itemContainer)=>{
        return (
          <WaterfallItem data={itemData} itemWidth={itemContainer.width}/>
        )
      }

    // loadMore() {
    //     if(this.state.isRefreshing || this.state.isLoadingMore) {
    //         return
    //     }
    //     this.setState({isLoadingMore: true})
    //     // setTimeout(() => {
    //     //     console.log('--> loadMore')
    //     //     this.getData()
    //     //     this.setState({isLoadingMore: false})
    //     // },500)
    //     this.setState({
    //         dataSource: [...this.state.dataSource, ...this.state.dataSource],
    //         isLoadingMore: false
    //     })
    // }

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

    // constructor(props) {
    //     super(props)
    //     this.getData()
    // }
    //
    // state = {
    //     dataSource: []
    // }
    //
    // getData() {
    //     fetch(GetURL)
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data.discover)
    //             this.setState({
    //                 dataSource: data.discover
    //             })
    //         }
    //     )
    // }

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
