import React from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity,Navigation} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"
import ListItem from "./components/ListItem"

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
             ]
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
                <ListItem data={this.state.settingPageData} />
                <View style={styles.btnWrap}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>退出登录</Text>
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