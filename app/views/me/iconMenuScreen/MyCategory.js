import React from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity,Navigation} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import CategoryItem from "./components/CategoryItem"

export default class MyCategory extends React.Component{
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
        headerTitle: "我的课程",
        headerTitleStyle:{color:"#fff",alignSelf:"center"},
        headerTintColor:"#fff",
        headerStyle: { backgroundColor:'#3C3C3C',elevation:0},//顶部栏背景颜色,去掉底边阴影
    }
    componentDidMount(){

    }

    render(){
        return(
            <ScrollableTabView
                style={{backgroundColor:"#fff"}}//页面的背景
                tabBarBackgroundColor='#fff' //头部标题栏背景
                tabBarActiveTextColor='red' //选中文字颜色
                tabBarInactiveTextColor='#555555' //未选中文字颜色
                tabBarTextStyle={{marginTop:10}} //文字样式
                tabBarUnderlineStyle={{backgroundColor:'red'}}
                // renderTabBar={() => <DefaultTabBar style={styles.tabBar}/>}
            >
                <View tabLabel="最近学习" style={{}}>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                </View>
                <View tabLabel="我的收藏">
                    <CategoryItem/>
                    <CategoryItem/>
                </View>

            </ScrollableTabView>
        )
    }
}

const styles=StyleSheet.create({

})