/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './views/home/Home'
import Me from './views/me/Me'
import Login from './views/login/Login'
import Category from "./views/category/Category";
import Combat from "./views/combat/Combat"
import Remember from "./views/remember/Remember";
import Discover from "./views/discover/Discover"
import YuanWen from "./views/yuanwen/index/index";
import Answer from "./views/yuanwen/answer/answer";
import DownLoad from "./views/download/DownLoad";
import Setting from "./views/me/Setting";
import History from "./views/me/History";
import MyCategory from  "./views/me/iconMenuScreen/MyCategory"
import CategoryDetail from "./views/category/CategoryDetail";
import PersonInfo from "./views/me/PersonInfo";
import CareerChoice from "./views/me/subScreen/CareerChoice";
import EditorName from  "./views/me/subScreen/EditorName";
import NickName from "./views/me/subScreen/NickName"

export default class App extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            active:'',
            inactive:''
            /*home:{active:true},
            category:{active:false},
            download:{active:false},
            me:{active:false}*/
        }

        global.app = this;
    }

    // gets the current screen from navigation state
    getCurrentRouteName(navigationState) {
        if (!navigationState) {
            return null;
        }
        const route = navigationState.routes[navigationState.index];
        // dive into nested navigators
        if (route.routes) {
            return this.getCurrentRouteName(route);
        }
        return route.routeName;
    }

    render(){
        return(
            <Navs screenProps={{active:this.state.active,inactive:this.state.inactive}}
                  onNavigationStateChange={(prevState, currentState) => {
                const currentScreen = this.getCurrentRouteName(currentState);
                const prevScreen = this.getCurrentRouteName(prevState);
                //this.setState({...this.state,active:currentScreen,inactive:prevScreen})
            }}/>
        )
    }
}

// 注册TabNav  据说只能用const声明，根据先后顺序，必须写在stackNavigator的前面
const TabNav = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内,这里的会覆盖页面内的
            tabBarLabel:"首页",
            tabBarIcon:({tintColor})=>{
                return(
                    <FontAwesome name="home" size={30} color={tintColor} />
                )
            }
        }
    },
    category: {
        screen: Category,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内,这里的会覆盖页面内的
            tabBarLabel:"课程",
            tabBarIcon:({tintColor})=>{
                return(
                    <FontAwesome name="map-o" size={23} color={tintColor} />
                )
            }
        }
    },
    download: {
        screen: DownLoad,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内,这里的会覆盖页面内的
            tabBarLabel:"下载",
            tabBarIcon:({tintColor})=>{
                return( //<Image source={require('./imgs/test.png')} style={[{tintColor: tintColor}]}/>
                    <FontAwesome name="download" size={23} color={tintColor} />
                )
            }
        }
    },
    me: {
        screen: Me,
        navigationOptions: {
            tabBarLabel:"我的",
            tabBarIcon:({tintColor})=>{
                return(
                    <FontAwesome name="user" size={23} color={tintColor} />
                )
            }
        }
    }
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    lazy:true,
    tabBarOptions: {
        activeTintColor: 'red', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    },
});

// 注册导航
const Navs = StackNavigator({
    TabNav: { screen: TabNav },
    Login: {
        screen: Login,
        navigationOptions: {
            header:null,
        } //覆盖组件内的`static navigationOptions`设置
    },
    Combat: {
        screen: Combat,
    },
    YuanWen: {
        screen: YuanWen,
    },
    YuanWen_answer: {
        screen: Answer,
    },
    Remember:{
        screen:Remember,
    },
    Discover:{
        screen:Discover,
    },
    History:{
      screen:History,
    },
    Setting:{
        screen:Setting,
    },
    MyCategory:{
        screen:MyCategory,
    },
    CategoryDetail:{
        screen:CategoryDetail,
    },
    PersonInfo:{
        screen:PersonInfo,
    },
    CareerChoice:{
        screen:CareerChoice,
    },
    EditorName:{
        screen:EditorName,
    },
    NickName:{
        screen:NickName,
    }



}, {
    initialRouteName: 'TabNav', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        //header: null,//把title关闭，子页面就不能有头部栏了
        //headerTitle:"呵呵"
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});

/*const defaultGetStateForAction = Navs.router.getStateForAction; //可以重写，可以调用
const defaultGetComponentForRouteName = TabNav.router.getComponentForRouteName;
TabNav.router.getComponentForRouteName = (routeName) =>{

    console.log(routeName)
    return defaultGetComponentForRouteName(routeName);
}

Navs.router.getStateForAction = (action, state) => {

    console.log(state);
    //state 当前状态 state.routes
    if(state && state.index == 1){
        return {
            ...state,
            routes:[...state.routes],
            index: 0
        };
        //return null;  //阻止返回
    }
    if (
        state &&state.routes[state.index]&&
        state.routes[state.index].params
    ) {
        // Returning null from getStateForAction means that the action
        // has been handled/blocked, but there is not a new state
        return null;
    }

    return defaultGetStateForAction(action, state);
};*/

