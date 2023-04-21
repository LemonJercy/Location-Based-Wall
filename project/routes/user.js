import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import UserScreen from '../screen/user'
import AboutScreen from '../screen/user/about'
import LoginScreen from '../screen/NoAuth/login'

const Stack = createStackNavigator()
export default class Index extends Component {
  render() {
    return (
      <Stack.Navigator 
        //initialRouteName='News' 
        //headerMode={'none'}
        >
        <Stack.Screen name='UserSc' component={UserScreen}
                      options={{title:"用户设置", 
                      //headerStyle:{backgroundColor:'tomato'}, 
                      //headerRight: () =>(<TouchableOpacity onPress={() => alert("Hello")}><Text>Hello</Text></TouchableOpacity>)
                    }} 
                      />
        <Stack.Screen name='About' component={AboutScreen}
                      options={{title:"关于", 
                      //headerStyle:{backgroundColor:'tomato'}, 
                      //headerRight: () =>(<TouchableOpacity onPress={() => alert("Hello")}><Text>Hello</Text></TouchableOpacity>)
                    }} />
        <Stack.Screen name='Login' component={LoginScreen}
                    options={{title:"登入", 
                    //headerStyle:{backgroundColor:'tomato'}, 
                    //headerRight: () =>(<TouchableOpacity onPress={() => alert("Hello")}><Text>Hello</Text></TouchableOpacity>)
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