/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,Image} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CourseItem from "./CourseItem";
var {width,height} = Dimensions.get('window');

export default class BlockTitle extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.wrap}>
                {this.props.data.map((item,index)=>{
                    return(
                        <CourseItem key={index}/>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:10,
        paddingRight:10,
        justifyContent:'space-between',
        //1.space-between用两边对齐，中间间距的方式，这种左右设置间距，然后内容留出10像素间距
        //第二种：左边10边距，然后每个item,paddingRight:10,再去计算
    },
})