import React from 'react'
import {StyleSheet,View,Text,Switch,TouchableOpacity,Navigation,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../utils/screen"
import ListItem2 from "./components/ListItem2"

export default class PersonInfo extends React.Component{
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

        }
    }
    static navigationOptions = {
        headerTitle: "个人资料",
        headerTitleStyle:{color:"#fff",alignSelf:"center"},
        headerTintColor:"#fff",
        headerStyle: { backgroundColor:'#3C3C3C',elevation:0},//顶部栏背景颜色,去掉底边阴影
    }
    componentDidMount(){

    }

    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity style={{flexDirection:"row",padding:10,backgroundColor:"#fff",alignItems:"center",marginTop:10}}>

                    <Text style={{fontSize:12}}>头像</Text>
                    <View style={{flex:1}}></View>
                    <FontAwesome name="user-circle-o" color="pink" size={30} />
                    <FontAwesome name="angle-right" color="#999" size={14} style={{marginLeft:10}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="职业" subName="web前端工程师" showBorderBottom={true} />
                    <ListItem2 title="签名" subName="执子之手与子偕老"  />
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="昵称" subName="cy饕餮" showBorderBottom={true} />
                    <ListItem2 title="性别" subName="女" showBorderBottom={true}  />
                    <ListItem2 title="地区" subName="上海市"  />
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="绑定手机" subName="未绑定" showBorderBottom={true} />
                    <ListItem2 title="邮箱" subName="597282386@qq.com" showBorderBottom={true}  />
                    <ListItem2 title="实名认证" subName="未认证" showBorderBottom={true} />
                    <ListItem2 title="学籍认证" subName="未认证"  />
                </TouchableOpacity>


            </View>
        )
    }
}

const styles=StyleSheet.create({

})