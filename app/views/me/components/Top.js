/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"

export default class Top extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.topWrap}>
                <View style={styles.InfoWrap}>
                    <View style={styles.imgWrap}>
                        <FontAwesome name="user-circle-o" size={40} color="#fff"/>
                    </View>
                    <View style={styles.personInfoWrap}>
                        <View>
                            <Text style={styles.name}>cy饕餮</Text>
                        </View>
                        <View style={styles.learnWrap}>
                            <Text style={styles.learnText}>学习时长</Text>
                            <Text style={styles.learnText}>233小时</Text>
                            <Text style={{marginRight:10,color:"#999"}}>|</Text>
                            <Text style={styles.learnText}>经验</Text>
                            <Text style={styles.learnText}>2913</Text>
                        </View>
                    </View>
                    <View style={styles.envelopeWrap}>
                        <FontAwesome name="envelope-o" size={20} color="#fff"/>
                    </View>
                </View>
                <View style={styles.optionWrap}>
                    <View style={[styles.attentionWrap,styles.borderRight]}>
                        <Text style={styles.optionText}>关注</Text>
                        <Text style={styles.optionNum}>15</Text>
                    </View>
                    <View style={[styles.attentionWrap,styles.borderRight]}>
                        <Text style={styles.optionText}>粉丝</Text>
                        <Text style={styles.optionNum}>45</Text>
                    </View>
                    <View style={[styles.attentionWrap,styles.borderRight2]}>
                        <Text style={styles.optionText}>积分</Text>
                        <Text style={styles.optionNum}>100</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topWrap:{
        backgroundColor:"#14191e",
        height:150,
        padding:10,
    },
    InfoWrap:{
        flexDirection:"row",
    },
    imgWrap:{
        width:(Screen.width-20)/5,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
    },
    personInfoWrap:{
        flex:1,
    },
    name:{
        fontSize:16,
        color:"#fff",
        marginTop:4,
    },
    learnWrap:{
        flexDirection:"row",
        marginTop:7,
    },
    learnText:{
        fontSize:12,
        color:"#999",
        marginRight:10,
    },
    envelopeWrap:{
        width:30,
    },
    optionWrap:{
        flex:1,
        flexDirection:"row",
        height:14,
        marginTop:60,
    },
    attentionWrap:{
        width:(Screen.width-23)/3,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    borderRight:{
        borderRightWidth:Screen.onePixel,
        borderRightColor:"#999",
        height:14,
    },
    borderRight2:{
        borderRightWidth:Screen.onePixel,
        borderRightColor:"#14191e",
        height:14,
    },
    optionText:{
        fontSize:12,
        color:"#999",
        marginRight:8,
    },
    optionNum:{
        fontSize:12,
        color:"#fff",
    }


})