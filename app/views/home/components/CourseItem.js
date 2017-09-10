/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,Image} from 'react-native'

var {width,height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class CourseItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.itemWrap}>
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
    }
}

const styles = StyleSheet.create({
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
        fontSize:12,
        marginTop:5,
        height:28
    }
})