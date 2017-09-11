/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground,TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../utils/screen"

export default class Login extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    componentDidMount(){

    }

    componentDidUpdate(){

    }

    render(){
        return(
            <View style={styles.loginWrap}>
                <ImageBackground source={require("../../imgs/logoBg.png")}
                                style={{flex:1}} >
                    <View style={styles.titleWrap}>
                        <Text style={{fontSize:20,color:"#fff"}}>欢迎登录长河</Text>
                    </View>
                    <View style={styles.loginInfoWrap}>
                        <View style={styles.userInfoWrap}>
                            <TextInput placeholder ="手机号/邮箱" underlineColorAndroid="transparent"
                                       style={styles.userInput}
                                       placeholderTextColor="#ccc"
                            />
                            <View style={styles.iconWrap}>
                                <FontAwesome name="angle-down" size={14} style={styles.icon}/>
                            </View>
                        </View>
                        <View style={styles.userInfoWrap}>
                            <TextInput placeholder ="密码"
                                       style={styles.userInput}
                                       placeholderTextColor="#ccc"
                                       underlineColorAndroid="transparent"/>
                            <View style={styles.iconWrap}>
                                <FontAwesome name="eye" size={14} style={styles.icon}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.loginBtnWrap}>
                        <TouchableOpacity style={styles.loginBtn} onPress={()=>{
                            global.isLogin = true;
                        }}>
                            <Text style={styles.loginBtnText}>登录</Text>
                        </TouchableOpacity>
                        <Text style={styles.commonText}>忘记密码</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.commonText}>注册</Text>
                        <Text style={{fontSize:10,color:"#828282",marginTop:30}}>社交账号登录</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    loginWrap:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    titleWrap:{
        width:Screen.width,
        marginTop:100,
        alignItems:"center",
    },
    loginInfoWrap:{
        marginTop:30,
        width:Screen.width,
    },
    userInfoWrap:{
        flexDirection:"row",
        padding:0,
        backgroundColor:"#686d79",
        opacity:0.68,
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:"#222222",
        justifyContent:"center",
    },
    userInput:{
        flex:1,
        paddingLeft:10,
        fontSize:12,
    },
    iconWrap:{
        width:20,
        marginRight:10,
        justifyContent:"center"
    },
    icon:{
        color:"#ccc",
    },
    loginBtnWrap:{
        width:Screen.width,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
    },
    loginBtn:{
        width:Screen.width-40,
        backgroundColor:"#14b4ff",
        justifyContent:"center",
        alignItems:"center",
        height:30,
        marginBottom:20,

    },
    loginBtnText:{
        color:"#fff",
        fontSize:12,
    },
    commonText:{
        fontSize:12,
        color:"#828282",
    },
    footer:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:120,
    },
})

