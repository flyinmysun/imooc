/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,Image} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
                        <View style={styles.itemWrap} key={index}>
                            <Image style={styles.img} source={require('../../../imgs/home/course_img.jpg')}
                                   resizeMode={Image.resizeMode.cover}/>
                            <Text style={styles.text}>
                                中国人的中国人的中国人的中国人的中国人的中国人的中国
                            </Text>
                            <Text style={{fontSize:10,color:'#888'}}>
                                4777人学习
                            </Text>
                        </View>
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
    itemWrap:{
        width:(width-30)/2, //减掉左中右间隙/2
        //paddingRight:10,
        paddingBottom:10,
    },
    img:{
        width:(width-30)/2, //减掉左中右间隙/2就是图片的宽度
        height:80,
    },
    text:{
        fontSize:10,
        marginTop:5,
        height:25
    }
})