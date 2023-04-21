import { Text, StyleSheet, SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class Index extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <ScrollView>
            <View style={[styles.avatar]}>
                <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{width:80, height:80, marginVertical:10, borderRadius:40}}></Image>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('About')}>
                <View style={[styles.listItem]}>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name={'information-circle-outline'} size={20} coluor={'#bbb'}></Ionicons>
                        <Text style={{marginLeft:10, fontSize:15}}>关于</Text>
                    </View>
                    <Ionicons name={'chevron-forward-outline'} size={20} coluor={'#bbb'}></Ionicons>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert('aaa')}>
                <View style={[styles.listItem]}>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name={'settings-outline'} size={20} coluor={'#bbb'}></Ionicons>
                        <Text style={{marginLeft:10, fontSize:15}}>设置</Text>
                    </View>
                    <Ionicons name={'chevron-forward-outline'} size={20} coluor={'#bbb'}></Ionicons>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                <View style={[styles.listItem]}>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name={'settings-outline'} size={20} coluor={'#bbb'}></Ionicons>
                        <Text style={{marginLeft:10, fontSize:15}}>登录</Text>
                    </View>
                    <Ionicons name={'chevron-forward-outline'} size={20} coluor={'#bbb'}></Ionicons>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert('aaa')}>
                <View style={[styles.listItem]}>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name={'settings-outline'} size={20} coluor={'#bbb'}></Ionicons>
                        <Text style={{marginLeft:10, fontSize:15}}>退出</Text>
                    </View>
                    <Ionicons name={'chevron-forward-outline'} size={20} coluor={'#bbb'}></Ionicons>
                </View>
            </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start'
    },
    avatar:{
        flexDirection:'row',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },
    listItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        height:50,
        padding:5,
    }
})