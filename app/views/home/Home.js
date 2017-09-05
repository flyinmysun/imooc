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

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ViewPager from 'react-native-viewpager';
var {width,height} = Dimensions.get('window');

var IMGS = [
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',

];

export default class Home extends React.Component{
    constructor(props) {
        super(props);

        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
            dataSource: dataSource.cloneWithPages(IMGS),
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
            <View>
                <FlatList
                    data={[{id:1,name:"zww"},{id:2,name:"cy"}]}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={this._headerComponent}
                    extraData={this.state}
                />
            </View>
        )
    }

    /**list 头部**/
    _headerComponent=()=>{

        return(
            <View>
                <ViewPager
                    style={{flex:1}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}
                />
                <View style={styles.iconNaWrap}>
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

    /**广告**/
    _renderPage = (data, pageID) => {
        return (
            <Image source={{uri: data}} style={styles.adImg} />
        );
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
    adImg: {
        width: width,
        height:150,
        resizeMode: 'stretch'
    },
    iconNaWrap:{
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