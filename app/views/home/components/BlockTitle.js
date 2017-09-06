/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class BlockTitle extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.wrap}>
                <FontAwesome name={this.props.iconName} size={14} color={this.props.iconColor}/>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap:{
        backgroundColor:'#fff',
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        marginLeft:5
    }
})