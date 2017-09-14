/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Switch
} from 'react-native';
import Top from "./components/Top"
import IconMenu from "./components/IconMenu"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ListItem from "./components/ListItem"
import ListItem2 from "./components/ListItem2"

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
            ],
            isLogin:false,
            onOff:false,
        }
    }

    static navigationOptions = {
        headerTitle:"我的",
        header:null,
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){

    }

    componentDidUpdate(){
        if(this.props.screenProps.active == 'me'){
            if(this.state.isLogin != global.isLogin){
                this.setState({...this.state,isLogin:global.isLogin});
            }
        }

        if(this.props.screenProps.inactive == 'me'){
            //alert("inactive me"+global.isLogin);
        }
    }

    render(){

        return(
            <ScrollView >
                <Top test={this.state.isLogin} itemClick={()=>{this.props.navigation.navigate("Login")}}/>
                <IconMenu data={this.state.iconMenuDatas}
                        goIconMenuScreen={(item)=>{
                            this.props.navigation.navigate("MyCategory")
                        }}/>
                {/*<ListItem data={this.state.listItemDatas} style={{marginTop:10,backgroundColor:'#fff'}}
                          subScreen={(item)=>{//不能用if来进行判断?
                              item.type==1&&this.props.navigation.navigate("History");
                              item.type==6&&this.props.navigation.navigate("Setting")

                          }}/>*/}
                <View style={{marginTop:8,backgroundColor:'#fff'}}>
                    <ListItem2 title="历史记录" showBottomBorder={true}
                        icon={ <FontAwesome size={14} color={'#14b4ff'} name="history"/>}/>
                    <ListItem2 title="我的路径" showBottomBorder={true}
                               icon={ <FontAwesome size={14} color={'#ffa01e'} name="calendar-check-o"/>}/>
                    <ListItem2 title="我的课表" showBottomBorder={true}
                               icon={ <FontAwesome size={14} color={'#14b4ff'} name="life-ring"/>}/>
                    <ListItem2 title="我的订单" showBottomBorder={true}
                               icon={ <FontAwesome size={14} color={'#20cc85'} name="gg"/>}/>
                    <ListItem2 title="优惠券"
                               icon={ <FontAwesome size={14} color={'#ffa01e'} name="gratipay"/>}/>
                </View>

                <View style={{marginTop:8,backgroundColor:'#fff'}}>
                    <ListItem2 title="夜间模式" showBottomBorder={true}
                                icon={<FontAwesome size={14} color="#20cc85" name="moon-o"/>}
                                extra={<Switch onTintColor="#14b4ff" thumbTintColor="#f2f2f2" tintColor="#d9d9d9"
                                               value={this.state.onOff} onValueChange={(value)=>{
                                     this.setState({...this.state,onOff:value})

                                }}/>}/>
                    <ListItem2 title="设置"
                               icon={ <FontAwesome size={14} color={'#14b4ff'} name="cog"/>}
                               callback={()=>{
                                   this.props.navigation.navigate("Setting")}}/>


                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    bgColor:{
        backgroundColor:"#bbbbbb",
    }
})