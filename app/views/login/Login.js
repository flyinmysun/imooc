/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity,
    ImageBackground,TextInput,DeviceEventEmitter } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../utils/screen"
import Service from "../../service/Service"
//import ShowPanel from "./components/ShowPanel";
import {toastShort} from "../../utils/toast"

export default class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            num:0
        }
    }

    _login=()=>{
        let param={
            mobile:"13517317885",
            password:"123456"
        }
        /*const url="http://115.159.6.189:4000/api/v1/user/login"
        fetch(url,{
            method: "POST",
            mode: "cors",  //允许跨域
            credentials: "include",//允许传cookies
            headers: {"content-type" : 'application/json'},
            body: JSON.stringify(param)
        }).then((response)=> {
            if (response.ok) {
                response.json().then((data)=>{
                    //alert(JSON.stringify(data));
                    if(data && data.status==0){
                        let res = data.result;
                        global.userInfo = res;
                        global.isLogin = true;
                        //alert(global.isLogin)
                        this.props.navigation.goBack();
                        DeviceEventEmitter.emit('loginSuccess'); //发送时间，告知登录成功
                    }else{
                        alert(data.errorMsg)
                    }
                });
            } else {
                alert('请求失败，状态码为', response.status);
            }
        });*/


        Service.login(param,this._loginSuccessFn)


    }
    _loginSuccessFn=(res)=>{
        global.userInfo = res;
        global.isLogin = true;
        //alert(global.isLogin)
        toastShort("登录成功")
        this.props.navigation.goBack();

        DeviceEventEmitter.emit('loginSuccess'); //发送事件，
    }


    render(){
        return(
            <View style={styles.loginWrap}>
                <ImageBackground source={require("../../imgs/logoBg.png")}
                                style={{flex:1}} >
                    <View style={{marginLeft:10,marginTop:20}}>
                        <TouchableOpacity style={styles.closeBtn} onPress={()=>{
                            this.props.navigation.goBack();
                        }}>
                            <FontAwesome name="times" color="#fff" size={20}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleWrap}>
                        <Text style={{fontSize:20,color:"#fff",backgroundColor:'transparent'}}>欢迎登录长河</Text>
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
                            this._login()
                            //alert(1)
                            //this.props.navigation.navigate("me")
                            //global.isLogin = true;
                            //alert(global.isLogin)
                        }}>
                            <Text style={styles.loginBtnText}>登录</Text>
                        </TouchableOpacity>
                        <Text style={styles.commonText}>忘记密码</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.commonText}>注册</Text>
                        <Text style={{fontSize:10,color:"#fff",marginTop:20,backgroundColor:'transparent'}}>社交账号登录</Text>
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
    closeBtn:{
        padding:4
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
        paddingVertical:15,
        paddingHorizontal:10,
        fontSize:12,
        color:"#fff"
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
        backgroundColor:'transparent'
    },
    footer:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:130,
    },
})

