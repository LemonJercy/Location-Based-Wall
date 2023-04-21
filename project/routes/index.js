import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './home'
import MySpaceScreen from './myspace'
import UserScreen from './user'


const Tab = createBottomTabNavigator()
export default class Index extends Component {
  render() {
    return (
      <Tab.Navigator
       screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName
            if(route.name === 'Home'){
                iconName = "首页"
            }else if(route.name === "MySpace")
            {
                iconName = "我的空间"
            }else if(route.name === "User")
            {
                iconName = "用户设置"
            }
            return <Button title={iconName} size={size} color={color}></Button>}
       })}
       >
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="MySpace" component={MySpaceScreen}></Tab.Screen>
        <Tab.Screen name="User" component={UserScreen}></Tab.Screen>
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:50,
    }
})