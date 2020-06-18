import React from 'react'

import {
    View,
    StyleSheet,
    SectionList,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ConstantData from './list.json'
import icon_list from '#/asset/icon'

const Stack = createStackNavigator()

class LoginItem extends React.Component {
    render() {
        return (
            <View style={{backgroundColor:'red', height: 70}}>
            </View>
        )
    }
}

class SectionItem extends React.Component {

    handlePress() {
        const data = this.props.data
        const onPress = this.props.onPress
        const navigation = this.props.navigation

        if (onPress) {
            onPress()
        } else {
            // alert(data.title)
            navigation.navigate('Details')
        }
    }

    render() {
        const data = this.props.data
        const onPress = this.props.onPress

        return (
            <TouchableOpacity style={{flex: 1,flexDirection: 'row', alignItems:'center', height: 52}} onPress={() => this.handlePress()}>
                <Image
                   style={{width:20,height:20, marginLeft: 12}}
                   source={icon_list[data.icon]}
                />
                <Text style={{fontSize: 15,marginLeft:5}}>
                   {data.title}
                </Text>
                <Text style={{fontSize: 10,marginLeft:5, marginLeft: 'auto'}}>
                   {data.subtitel}
                </Text>
                <Image
                    style={{width:25, height:25, marginLeft: 'auto'}}
                    source={require('#/asset/arrow_right.png')}
                />
            </TouchableOpacity>
        )
    }
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeScreen ({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.view}>
                <LoginItem/>
                <SectionList
                    renderItem={({ item, index, section }) => <SectionItem data={item} navigation={navigation}/>}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.header}></View>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{height: 0.5, backgroundColor: '#EEE'}}/>
                    )}
                    sections={ConstantData.mineList}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        </SafeAreaView>
    )
}

export default class Connect extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="我的">
                <Stack.Screen name="我的" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    view: {
        flex:1,
    },
    header: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        height: 5,
    },
    item: {


    },
})
