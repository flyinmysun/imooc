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

export default class YuanWen extends React.Component{

    static navigationOptions = {
        headerTitle: (
            <View style={{width:300,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text style={{color:'#fff',alignSelf:'center'}}>详情</Text>
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
           <View>
               <Text>{this.props.navigation.state.params.question.name}</Text>
           </View>
        )
    }
}

var styles = StyleSheet.create({

});