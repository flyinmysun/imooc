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
import IconMenu from './components/IconMenu'
import BlockTitle from './components/BlockTitle'
import CourseList from './components/CourseList'
import CourseItem from "./components/CourseItem";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

var {width,height} = Dimensions.get('window');

const advImgs = [
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',
];

export default class Home extends React.Component{

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
        ),
        headerStyle: { backgroundColor:'#3C3C3C'},//顶部栏背景颜色1
    }

    constructor(props) {
        super(props);

        this.state = {
            iconMenuDatas:[
                {type:1,color:'#FFBA5B',label:'实战'},
                {type:2,color:'#3DDB9A',label:'猿问'},
                {type:3,color:'#45C3FF',label:'手记'},
                {type:4,color:'#FF778E',label:'发现'}],
            refreshing:false,
            listData:[
                {id:1,name:"zww"},
                {id:2,name:"cy"},
                {id:3,name:"aaa"},
                {id:4,name:"bbb"}
            ]
        }
    }

    componentDidMount(){
        this._refreshing();
    }

    render(){
        return(
            <FlatList
                data={this.state.listData}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ListHeaderComponent={this._headerComponent}
                ListFooterComponent={this._footerComponent} //尾部
                //ItemSeparatorComponent={this._separator} //分隔块
                extraData={this.state}
                numColumns="2"
                //columnWrapperStyle如果设置了多列布局（即将numColumns值设为大于1的整数），则可以额外指定此样式作用在每行容器上
                columnWrapperStyle={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    paddingLeft:10,
                    paddingRight:10,
                    justifyContent:'space-between',
                    backgroundColor:'#fff'
                }}
                //onRefresh={this._refreshing}
                //refreshing={this.state.refreshing}
                onEndReachedThreshold={0.2}
                onEndReached={this._onload}
            />
        )
    }

    _refreshing=()=>{
        this.setState({...this.state,refreshing:true});
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            this.setState({...this.state,refreshing:false});
        },3000)
    }

    _onload=()=>{
        let timer =  setTimeout(()=>{
            this.setState({...this.state});
            //clearTimeout(timer)
            //alert('加载成功')
        },1500)
    }

    /**list 头部**/
    _headerComponent=()=>{
        return(
            <View>
                <Slider sources={advImgs}/>
                <IconMenu data={this.state.iconMenuDatas} iconItemClick={(item)=>{
                    if(item.type == 1){this.props.navigation.navigate("Combat")}
                    if(item.type == 2){this.props.navigation.navigate("YuanWen")}
                    if(item.type == 3){this.props.navigation.navigate("Remember")}
                    if(item.type == 4){this.props.navigation.navigate("Discover")}
                }}/>
                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <BlockTitle iconName="envelope" iconColor="#ff00ff" title={'课程推荐'}></BlockTitle>
                    <CourseList data={[1,2,3,4,5,6]}/>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <BlockTitle iconName="glass" iconColor="#ffff00" title={'实战推荐'}></BlockTitle>
                    <CourseList data={[1,2,3,4,5,6]}/>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <BlockTitle iconName="home" iconColor="red" title={'热门推荐'}></BlockTitle>
                    <CourseList data={[1,2,3,4,5,6]}/>
                </View>

                <View style={{marginTop:10,backgroundColor:'#fff'}}>
                    <BlockTitle iconName="home" iconColor="red" title={'猜你喜欢'}></BlockTitle>
                </View>
            </View>
        )
    }

    _footerComponent=()=>{
        return(
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'row'
            }}>
                <ActivityIndicator
                    size="small"
                    style={{width:15,padding:10}}
                />
                <Text style={{fontSize:10,color:'#555',marginLeft:10}}>上拉加载更多...</Text>
            </View>
        )
    }

    /**list**/
    _renderItem =(Row)=>{ //Row.item.name Row.item是当前循环的数据item Row.index是当前数据的下标
        return(
            <CourseItem/>
        )
    }

    /*<View style={{width:(width-30)/2,paddingBottom:10,}}>
     <Text>{Row.item.name}</Text>
     </View*/

    /**唯一key***/
    _keyExtractor = (item, index) => item.id;
}

var styles = StyleSheet.create({

});