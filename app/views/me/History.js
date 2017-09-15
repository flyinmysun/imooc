import React from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity,Navigation} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../utils/screen"
import HistoryItem from "./components/HistoryItem"

export default class History extends React.Component{
    constructor(props){
        super(props);
        this.state={
             historyPageData:[
                 {id:1,name:"ReactNative基础与入门",subName:"1-1初识ReactNative",time:"09月10日"},
                 {id:2,name:"webpack深入与实践",subName:"2-1建立项目的webpack 配置文件初识",time:"08月13日"},
                 {id:3,name:"ReactNative基础与入门",subName:"1-1初识ReactNative",time:"09月10日"},
                 {id:4,name:"ReactNative基础与入门",subName:"1-1初识ReactNative",time:"09月10日"},
                 {id:5,name:"ReactNative基础与入门",subName:"1-1初识ReactNative",time:"09月10日"},
             ]
        }
    }
    static navigationOptions = {
        headerTitle: "历史记录",
        headerTitleStyle:{color:"#fff",alignSelf:"center"},
        headerTintColor:"#fff",
        headerStyle: { backgroundColor:'#3C3C3C',elevation:0},//顶部栏背景颜色,去掉底边阴影
    }
    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.historyWrap}>
                <HistoryItem data={this.state.historyPageData}/>
                <View style={styles.leftLine}>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    historyWrap:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#fff",
        paddingHorizontal:20,
    },
    leftLine:{
        borderLeftWidth:1,
        borderColor:"#ccc",
        height:Screen.height,
        position:"absolute",
        top:0,
        left:16,
    }
})