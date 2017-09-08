/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

var {width,height} = Dimensions.get('window');
//<FontAwesome name="search" size={20} color="#fff" style={{alignSelf:'flex-end'}}/>

export default class YuanWen extends React.Component{

    static navigationOptions = {
        headerTitle: (
            <View style={{width:300,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={{color:'#fff',alignSelf:'center'}}>猿问</Text>
                </View>
                <FontAwesome name="search" size={20} color="#fff" style={{alignSelf:'flex-end'}}/>
            </View>
        ),
        headerRight: (
            <FontAwesome name="filter" size={20} color="#fff" style={{margin:8}}/>
        ),
        headerTintColor:"#fff",
        headerStyle: { backgroundColor:'#3C3C3C'},//顶部栏背景颜色
    }

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount(){
    }

    render(){
        return(
            <ScrollableTabView
                style={{}}//页面的背景
                tabBarBackgroundColor='#fff' //头部标题栏背景
                tabBarActiveTextColor='red' //选中文字颜色
                tabBarInactiveTextColor='#555555' //未选中文字颜色
                tabBarTextStyle={{marginTop:10}} //文字样式
                tabBarUnderlineStyle={{backgroundColor:'red'}}
                // renderTabBar={() => <DefaultTabBar style={styles.tabBar}/>}
            >
               <View tabLabel="页面一">
                    <Text>页面一</Text>
               </View>
                <View tabLabel="页面二">
                    <Text>页面二</Text>
                </View>
                <View tabLabel="页面三">
                    <Text>页面三</Text>
                </View>
            </ScrollableTabView>
        )
    }
}

var styles = StyleSheet.create({

});