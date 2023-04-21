import { Text, StyleSheet, View, ImageBackground, SafeAreaView, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
            validateUsername:false,
            isValidUser:true,
            secureTextEntry: true,
            validatePassword:false,
            isValidPassword:true
        }
    }
    validateUsername = (val) => {
        if(val.trim().length >= 2)
        {
            this.setState({
                username:val,
                validateUsername:true,
                isValidUser:true
            })
        }
        else
        {
            this.setState({
                username:val,
                validateUsername:false,
                isValidUser:false
            })

        }
    }
    handleValidUser =  (val) => {
        if(val.trim().length >= 2)
        {
            this.setState({
                isValidUser:true
            })
        }
        else
        {
            this.setState({
                isValidUser:false
            })

        }
    }
    validatePassword = (val) => {
        if(val.trim().length >= 8)
        {
            this.setState({
                password:val,
                validatePassword:true,
                isValidPassword:true,
            })
        }
        else
        {
            this.setState({
                password:val,
                validatePassword:false,
                isValidPassword:false,
            })
        }
    }
    handleValidPassword =  (val) => {
        if(val.trim().length >= 8)
        {
            this.setState({
                isValidPassword:true,
            })
        }
        else
        {
            this.setState({
                isValidPassword:false,
            })

        }
    }

    updateSecureTextEntry = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
        })
    }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../../images/viewbest.jpg')} style={styles.bgImage}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome!</Text>
            </View>
            <Animatable.View animation={"fadeInUpBig"}
                            style={[styles.footer]}>
                <ScrollView>
                <View style={[styles.action]}>
                <Ionicons name={'person-outline'} size={20}/>
                <TextInput style={styles.input}
                    placeholder='请输入用户名'
                    value={this.state.username}
                    onChangeText={(val) => this.validateUsername(val)}
                    onEndEditing={(e) => this.handleValidUser(e.nativeEvent.text)}   > 
                    </TextInput>
                    
                    {
                        this.state.validateUsername?
                        <Animatable.View animation={'bounceIn'}>
                            <Ionicons name="checkmark-circle-outline" size={20}></Ionicons>
                        </Animatable.View>
                        : null
                    }
                </View>
                {
                        this.state.isValidUser?
                        null
                        : <Animatable.View animation={'fadeInLeft'} duration={500}>
                            <Text style={styles.errorMsg}>用户名最短2位</Text>
                        </Animatable.View>
                }
                <View style={styles.action}>
                <Ionicons name={'lock-closed-outline'} size={20}/>
                    <TextInput style={styles.input}
                    placeholder='请输入密码'
                    value={this.state.password}
                    secureTextEntry={this.state.secureTextEntry ? true:false}
                    onChangeText={(val) => this.validatePassword(val)}
                    onEndEditing={(e) => this.handleValidPassword(e.nativeEvent.text)} ></TextInput>
                    <TouchableOpacity onPress={this.updateSecureTextEntry}>
                        {
                            this.state.secureTextEntry?
                            <Ionicons name={'eye-off-outline'} size={20}></Ionicons>
                            :
                            <Ionicons name={'eye-outline'} size={20}></Ionicons>
                        }
                    </TouchableOpacity>
                </View>
                {
                        this.state.isValidPassword?
                        null
                        : <Animatable.View animation={'fadeInLeft'} duration={500}>
                            <Text style={styles.errorMsg}>密码最短8位</Text>
                        </Animatable.View>
                }
                
                </ScrollView>

            </Animatable.View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    bgImage:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center'
    },
    container:{
        flex:1
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:Platform.OS === 'ios' ? 150 : 100
    },
    headerText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center'
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        paddingHorizontal:20,
        paddingVertical:30
    },
    input:{
        flex:1,
        marginTop:Platform.OS == 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    action:{
        flexDirection:'row',
        marginTop:5,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    errorMsg:{
        color:'red',
        fontSize:14
    }
    
})