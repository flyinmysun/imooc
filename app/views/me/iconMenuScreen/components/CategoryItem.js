/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ScrollView,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../../utils/screen"

export default class CategoryItem extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <ScrollView>
                <View style={styles.itemWrap}>
                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>webpack深入与浅出</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.imgWrap}>
                            <TouchableOpacity>
                                <Image style={styles.img} source={require("../../../../imgs/combat.png")}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.commonWrap,styles.rightLine]}>
                            <TouchableOpacity>
                                <Text style={{fontSize:12}}>笔记</Text>
                                <Text style={{alignSelf:"center",fontSize:12}}>0</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.commonWrap,styles.rightLine]}>
                            <TouchableOpacity>
                                <Text style={{fontSize:12}}>问答</Text>
                                <Text style={{alignSelf:"center",fontSize:12}}>0</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.commonWrap}>
                            <TouchableOpacity>
                                <Text style={{color:"#14b4ff",fontSize:12}}>继续学习</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    itemWrap:{
        flex:1,
        paddingHorizontal:10,
        paddingTop:10,
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:"#ccc",

    },
    titleWrap:{
        flex:1,
    },
    title:{
        fontSize:14,
        color:"#000",
    },
    container:{
        flex:1,
        flexDirection:"row",
        paddingVertical:10
    },
    imgWrap:{
        width:100,
    },
    img:{
        flex:1,
    },
    commonWrap:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    rightLine:{
        borderRightWidth:Screen.onePixel,
        borderRightColor:"#ccc",
        height:70,
    }



})