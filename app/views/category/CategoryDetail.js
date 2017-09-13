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
    TouchableOpacity
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoryListItem from "./components/CategoryListItem"


var icon = require('../../imgs/category/html.png');

export default class CategoryDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            listData:[
                {num:0,title:"基于websocket的火拼俄罗斯（升级版）",people:3225},
                {num:1,title:"基于websocket的火拼俄罗斯（单机版）",people:5899},
                {num:2,title:"前端性能优化-通用的缓存SDK",people:6466},
                {num:3,title:"Handlebars模板引擎",people:5064},
                {num:4,title:"基于websocket的火拼俄罗斯（基础）",people:3689},
            ]
        }

    }

    static navigationOptions = {
        headerRight: (
            <View style={{flexDirection:"row",marginRight:10,justifyContent:"center",alignItems:"center"}}>
                <FontAwesome name="sort-alpha-asc" size={12} color="#fff" style={{marginRight:4}}/>
                <Text style={{color:"#fff",marginRight:10,fontSize:12}}>最新</Text>
                <Text style={{color:"#d9d9d9",fontSize:12}}>最热</Text>
            </View>

        ),
        headerTintColor:"#fff",

        headerStyle: { backgroundColor:'#14b4ff',elevation:0},//顶部栏背景颜色1
    }

    componentDidMount(){
    }
    _keyExtractor=(item,index)=>index
    _renderItem =(Row)=>{ //Row.item.name Row.item是当前循环的数据item Row.index是当前数据的下标
        return(
            <CategoryListItem itemData={Row.item}/>
        )
    }

    render(){
        const str = '../../imgs/category/html.png'
        const itemData= this.props.navigation.state.params.item
        return(
            <View style={[styles.flex,styles.container]}>
                <View style={{justifyContent:"center",alignItems:"center",height:60}}>
                    <Image source={itemData.url}/>
                    <Text style={{color:"#fff",marginTop:10}}>{itemData.name}</Text>
                </View>
                <ScrollableTabView
                    style={{backgroundColor:"#fff"}}//页面的背景
                    tabBarBackgroundColor='#14b4ff' //头部标题栏背景
                    tabBarActiveTextColor='#FFF' //选中文字颜色
                    tabBarInactiveTextColor='#d9d9d9' //未选中文字颜色
                    tabBarTextStyle={{marginTop:10}} //文字样式
                    tabBarUnderlineStyle={{backgroundColor:'#FFF'}}
                    // renderTabBar={() => <DefaultTabBar style={styles.tabBar}/>}
                >
                    <View tabLabel="全部" style={{}}>
                         <FlatList
                           data={this.state.listData}
                           keyExtractor={this._keyExtractor}
                           renderItem={this._renderItem}
                         />
                    </View>
                    <View tabLabel="基础">

                    </View>
                    <View tabLabel="案例">

                    </View>
                    <View tabLabel="框架">

                    </View>
                </ScrollableTabView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    flex:{flex:1},
    container:{backgroundColor:"#14b4ff",},

});
