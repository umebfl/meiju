import React from 'react'

import * as R from 'ramda'

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    SectionList,
    Keyboard,
} from 'react-native'

import {
    WhiteSpace,
    WingBlank,
} from '@ant-design/react-native'

import Icon_evilIcons from 'react-native-vector-icons/EvilIcons'
import Icon_feather from 'react-native-vector-icons/Feather'

import ListData from './listData'

const SearchBar = payload => {
    const [value, onChangeText] = React.useState('');
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
             marginLeft: 15,
             marginRight: 40,
         }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 20,
                backgroundColor: '#F6F5F6',
                borderRadius: 5
            }}>
                <Icon_evilIcons style={{marginLeft: 4}} name='search' color='black' size={20}/>
                <TextInput
                    style={{ flex: 1,height: 40, borderColor: 'red' }}
                    onChangeText={text => onChangeText(text)}
                    maxLength={20}
                    placeholder={'搜索'}
                    value={value}
                />
                <Icon_evilIcons style={{marginRight: 4}} name='camera' color='black' size={25}/>
            </View>
            <Icon_feather name='user' color='black' size={20}/>
        </View>
    )
}

const FoodMenuList = payload => {
    return (
        <View>
            <ImageBackground
                source={{uri: payload.item.imageURL}}
                defaultSource={DefaultsImg}
                style={{
                    flex:1,
                    overflow: 'hidden',
                    borderRadius: 8,
                    marginHorizontal: 4,
                    height: 200,
                    flexDirection: 'column-reverse',}}
            />
        </View>
    )
}

const Menus = payload => {
    console.log('----daat>',payload.section.data)

    return (
        <View style={{flexDirection: 'row'}}>
            {
                R.addIndex(R.map)(
                    (v, k) => (
                        <View style={{backgroundColor:'#F6F5F6' }}>
                            <Text key={k}> {v.title} </Text>
                        </View>
                    )
                )(payload.section.data)
            }
        </View>
    )
}

export default class Connect extends React.Component {
    render() {
        // console.log('-->',ListData.data)
        return (
            <View style={styles.view}>
                <SectionList
                    sections={ListData.data}
                    ListHeaderComponent={() =>
                        <SearchBar/>
                    }
                    renderItem={({ item, index, section }) =>
                        <Text> ss </Text>
                    }
                    renderSectionHeader={({section}) =>
                        <Menus section={section}/>
                    }
                    keyExtractor={(item, index) => item + index}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
    }
})
