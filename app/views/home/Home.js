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
    Alert
} from 'react-native';
import Slider from './components/Slider'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

var {width,height} = Dimensions.get('window');

const advImgs = [
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',
];

export default class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            iconNavDatas:[{id:1,color:'#FFBA5B',label:'实战'},
                {id:2,color:'#3DDB9A',label:'猿问'},
                {id:3,color:'#45C3FF',label:'手记'},
                {id:4,color:'#FF778E',label:'发现'}]
        }
    }

    static navigationOptions = {
        headerTitle: (
        <View style={{width:300}}>
            <Text style={{color:'#fff',alignSelf:'center'}}>长河科技</Text>
        </View>
        ),
        headerRight: (
            <FontAwesome name="envelope" size={20} color="#fff" style={{margin:8}}/>
        ),
        headerLeft: (
            <FontAwesome name="search" size={20} color="#fff" style={{margin:8}}/>
            //<Text style={{color:'#fff',margin:8}}>搜索</Text>
        ),
        headerStyle: { backgroundColor:'#3C3C3C'},//顶部栏背景颜色
    }

    componentDidMount(){
    }

    render(){
        return(
            <FlatList
                data={[{id:1,name:"zww"},{id:2,name:"cy"}]}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ListHeaderComponent={this._headerComponent}
                extraData={this.state}
            />
        )
    }

    /**list 头部**/
    _headerComponent=()=>{
        return(
            <View>
                <Slider sources={advImgs}/>
                <View style={styles.iconNavWrap}>
                    {this.state.iconNavDatas.map((item,index)=>{
                        return(
                            <View key={index} style={styles.iconNavItemWrap}>
                                <View style={[styles.iconNavItemIcon,{backgroundColor:item.color}]}>
                                    <FontAwesome name="envelope" size={16} color="#fff"/>
                                </View>
                                <Text style={{marginTop:10,fontSize:10}}>{item.label}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }

    /**list**/
    _renderItem =(Row)=>{
        return(
            <View>
                <Text>{Row.item.name}</Text>
            </View>
        )
    }

    /**唯一key***/
    _keyExtractor = (item, index) => item.id;
}

var styles = StyleSheet.create({
    iconNavWrap:{
        flexDirection:'row',
        width:width,
        backgroundColor:"#fff",
    },
    iconNavItemWrap:{
        alignItems:'center',
        width:width/4,
        padding:10
    },
    iconNavItemIcon:{
        borderRadius:width/4*0.4/2,
        width:width/4*0.4,
        height:width/4*0.4,
        justifyContent:'center',
        alignItems:'center'
    }
});