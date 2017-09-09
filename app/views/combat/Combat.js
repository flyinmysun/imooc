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
import Slider from './components/Slider'
import BtnMenu from './components/BtnMenu'
import CombatList from "./components/CombatList"


import FontAwesome from 'react-native-vector-icons/FontAwesome';

var {width,height} = Dimensions.get('window');

const advImgs = [
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',
    'http://bpic.588ku.com/back_pic/03/51/39/7857918cc0c22e6.jpg!ww800',
];

export default class Combat extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            BtnMenuDatas:[
                {type:1,label:'全部'},
                {type:2,label:'前端开发'},
                {type:3,label:'后端开发'},
                {type:4,label:'移动开发'},
                {type:5,label:'数据库'},
                {type:6,label:'云计算&大数据'},
                {type:7,label:'运维&测试'}
            ],
        }
    }

    static navigationOptions = {
        headerTitle: (
            <View style={{width:300}}>
                <Text style={{color:'#fff',alignSelf:'center'}}>实战</Text>
            </View>
        ),
        headerTintColor:"#fff",
        headerStyle: { backgroundColor:'#3C3C3C',elevation:0},//顶部栏背景颜色,去掉底边阴影
    }


    render(){
        return(
            <FlatList
                data={this.state.BtnMenuDatas}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ListHeaderComponent={this._headerComponent}
                //ItemSeparatorComponent={this._separator} //分隔块
                //numColumns="2"  一行分几列显示，如果只有一列，则可以省略
                //columnWrapperStyle如果设置了多列布局（即将numColumns值设为大于1的整数），则可以额外指定此样式作用在每行容器上
            />
        )
    }

    /**List头部**/
    _headerComponent=()=>{
        return(
            <View>
                <Slider sources={advImgs}/>
                <BtnMenu data={this.state.BtnMenuDatas}/>
            </View>
        )
    }

    /**FlatList 属性***/
    /**唯一key***/
    _keyExtractor=(item,index)=>index

    _renderItem=(Row)=>{  //Row.item.name Row.item是当前循环的数据item Row.index是当前数据的下标
        return(
            <CombatList itemData={Row.item}/>
        )
    }


}

var styles = StyleSheet.create({

});