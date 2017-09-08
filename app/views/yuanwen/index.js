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


import FontAwesome from 'react-native-vector-icons/FontAwesome';

var {width,height} = Dimensions.get('window');

export default class YuanWen extends React.Component{

    static navigationOptions = {
        headerTitle: (
            <View style={{width:300}}>
                <Text style={{color:'#fff',alignSelf:'center'}}>猿问</Text>
                <FontAwesome name="filter" size={20} color="#fff" style={{margin:8}}/>
            </View>
        ),
        headerRight: (
            <FontAwesome name="filter" size={20} color="#fff" style={{margin:8}}/>
        ),
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
            <View></View>
        )
    }
}

var styles = StyleSheet.create({

});