/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var {width,height} = Dimensions.get('window');

export default class CombatList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.listWrap}>
                {
                    this.props.data.map((item,index)=>{
                        return(
                            <View style={styles.listItemWrap} key={index}>
                                <View style={styles.imgWrap}>
                                    <Image style={styles.img}
                                           resizeMode={Image.resizeMode.contain}
                                           source={require("../../../imgs/combat.png")}/>
                                </View>
                                <View style={styles.textWrap}>
                                    <Text style={styles.textTitle}>让你的页面速度飞起来-web前端性能优化</Text>
                                    <View style={styles.textOptionWrap}>
                                        <Text style={styles.textPrice}>￥188</Text>
                                        <Text style={styles.textPeople}>101人学习</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

var styles = StyleSheet.create({
    listWrap:{
        flex:1,
        backgroundColor:"#fff",
    },
    listItemWrap:{
        flexDirection:"row",
        flex:1,
        padding:10,
        borderBottomWidth:1,
        borderColor:"#ccc",
    },
    imgWrap:{
        width:(width-20)/3,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"cyan"
    },
    textWrap:{
        flex:1,
        marginLeft:10,
    },
    textTitle:{
        fontSize:10
    },
    textOptionWrap:{
        flexDirection:"row",
        marginTop:20,
    },
    textPrice:{
        fontSize:10,
        color:"red",
        paddingRight:10,
    },
    textPeople:{
        fontSize:10,
        color:"#ccc"
    }
})