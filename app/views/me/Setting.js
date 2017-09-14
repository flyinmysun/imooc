import React from 'react'
import {StyleSheet,View,Text,Switch,TouchableOpacity,Navigation,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../utils/screen"
import ListItem2 from "./components/ListItem2"

export default class Setting extends React.Component{
    constructor(props){
        super(props);
        this.state={
             settingPageData:[
                 {id:1,name:"cy饕餮",IconName:"user-circle-o",color:"pink"},
                 {id:2,name:"推送设置",subName:""},
                 {id:3,name:"清除缓存",subName:"112KB"},
                 {id:4,name:"给我评分",subName:""},
                 {id:5,name:"意见反馈",subName:""},
             ],
            onOff:false,
            onOff2:true,
        }
    }
    static navigationOptions = {
        headerTitle: "设置",
        headerTitleStyle:{color:"#fff",alignSelf:"center"},
        headerTintColor:"#fff",
        headerStyle: { backgroundColor:'#3C3C3C',elevation:0},//顶部栏背景颜色,去掉底边阴影
    }
    componentDidMount(){

    }

    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity
                    style={{flexDirection:"row",padding:10,backgroundColor:"#fff",alignItems:"center",marginTop:10}}
                    onPress={()=>{
                        this.props.navigation.navigate("PersonInfo")
                    }}
                >
                    <FontAwesome name="user-circle-o" color="pink" size={30}/>
                    <Text style={{marginLeft:10}}>cy饕餮</Text>
                    <View style={{flex:1}}></View>
                    <FontAwesome name="angle-right" color="#999" size={14}/>
                </TouchableOpacity>
                <View style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="推送设置"/>
                </View>
                <View style={{marginTop:10,backgroundColor:"#fff"}}>
                    <ListItem2 title="清除缓存" extra="123KB" showBorderBottom={true}/>
                    <ListItem2 title="允许非WiFi网络播放" showBorderBottom={true}
                               extra={<Switch onTintColor="#14b4ff" thumbTintColor="#f2f2f2" tintColor="#d9d9d9"
                                              value={this.state.onOff} onValueChange={(value)=>{
                                   this.setState({...this.state,onOff:value})

                               }}/>}/>
                    <ListItem2 title="视频自动播放"
                               extra={<Switch onTintColor="#14b4ff" thumbTintColor="#f2f2f2" tintColor="#d9d9d9"
                                              value={this.state.onOff2} onValueChange={(value)=>{
                                   this.setState({...this.state,onOff2:value})

                               }}/>}/>
                </View>
                <View style={{marginTop:10,backgroundColor:"#fff"}}>
                    <ListItem2 title="给我评分" showBorderBottom={true}/>
                    <ListItem2 title="意见反馈" showBorderBottom={true}/>
                    <ListItem2 title="关于慕课网"/>
                </View>
                <View style={styles.btnWrap}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{
                        this.props.navigation.navigate("me")
                        global.isLogin = false;
                    }}>
                        <Text style={styles.btnText} onPress={()=>{
                            this.props.navigation.state.params.updateOk("aaa");
                        }}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    btnWrap:{
        flex:1,
        paddingHorizontal:10,
        marginTop:20,
    },
    btn:{
        width:Screen.width-20,
      justifyContent:"center" ,
      alignItems:"center",
        backgroundColor:"#fff",
        borderWidth:Screen.onePixel,
        borderColor:"#CCC",
        paddingVertical:10,
    },
    btnText:{
        color:"red",
        fontSize:12,
    }
})