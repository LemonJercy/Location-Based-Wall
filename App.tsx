import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
//import Index from './src_01_StyleSheet'
//import Index from './src_02_Flexbox/FlexDirection'
//import Index from './src_03_Dimension'
//import Index from './src_04_Alert_Button'
//import Index from './src_05_Switch_StatusBar'
//import Index from './src_06_ActivityIndicator'
//import Index from './src_07_Image'
//import Index from './src_08_TextInput'
//import Index from './src_09_Touchable'
//import Index from './src_10_ScrollView'
//import Index from './src_11_SectionList'
//import Index from './src_12_FlatList'
//import Index from './src_13_Animated'
//import Index from './src23'
import Index from './project/routes'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Index/>
      </NavigationContainer>
    )
  }
}