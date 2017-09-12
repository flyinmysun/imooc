/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Top from "./components/Top"
import IconMenu from "./components/IconMenu"
import ListItem from "./components/ListItem"

export default class Me extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            iconMenuDatas:[
                {type:1,color:'#14b4ff',IconName:"bookmark",label:'我的课程'},
                {type:2,color:'#ffa01e',IconName:"rebel",label:'我的实战'},
                {type:3,color:'#20cc85',IconName:"quora",label:'我的猿问'},
                {type:4,color:'#14b4ff',IconName:"medium",label:'我的手记'}
                ],
            listItemDatas:[
                {type:1,color:'#14b4ff',IconName:"history",label:'历史记录'},
                {type:2,color:'#ffa01e',IconName:"calendar-check-o",label:'我的路径'},
                {type:3,color:'#14b4ff',IconName:"life-ring",label:'我的课表'},
                {type:4,color:'#20cc85',IconName:"gg",label:'我的订单'},
                {type:5,color:'#ffa01e',IconName:"gratipay",label:'优惠券'},
                {type:6,color:'#20cc85',IconName:"cog",label:'设置'},
            ]
        }
    }

    static navigationOptions = {
        headerTitle:"我的",
        header:null,
    }

    componentDidMount(){
        //alert(global.isLogin);
    }

    shouldComponentUpdate(nextProps, nextState){
        //alert(global.isLogin);
    }

    componentDidUpdate(){

    }

    render(){

        return(
            <ScrollView>
                <Top itemClick={()=>{this.props.navigation.navigate("Login")}}/>
                <IconMenu data={this.state.iconMenuDatas}/>
                <ListItem data={this.state.listItemDatas}
                          subScreen={(item)=>{//不能用if来进行判断
                              item.type==1&&this.props.navigation.navigate("History")
                              item.type==6&&this.props.navigation.navigate("Setting")

                          }}/>
            </ScrollView>
        )
    }
}