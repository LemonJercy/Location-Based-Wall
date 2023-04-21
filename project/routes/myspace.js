import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import MySpace from '../screen/myspace'
const Stack = createStackNavigator()
export default class Index extends Component {
  render() {
    return (
      <Stack.Navigator 
        //initialRouteName='News' 
        headerMode={'none'}
        >
        <Stack.Screen name='MySpaceSc' component={MySpace}
                      options={{title:"我的空间", 
                      //headerStyle:{backgroundColor:'tomato'}, 
                      headerRight: () =>(<TouchableOpacity onPress={() => alert("Hello")}><Text>Hello</Text></TouchableOpacity>)
                    }} 
                      />
      </Stack.Navigator>
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