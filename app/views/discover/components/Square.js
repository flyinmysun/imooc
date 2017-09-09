/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"

export default class CombatList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {itemData} = this.props;
        return(
            <View style={{backgroundColor:"#fff"}}>
                <View style={styles.listItemWrap}>
                    <View style={styles.textWrap}>
                        <View style={styles.textTitleWrap}>
                            <Text style={styles.textTitle}>我们都是一条龙，名字叫中国</Text>
                        </View>
                        <View style={styles.textOptionWrap}>
                            <View style={styles.creatorWrap}>
                                <Text style={styles.creator}>原创</Text>
                            </View>
                            <View  style={styles.commonTextWrap}>
                                <Text style={styles.commonText}>1169浏览•</Text>
                                <Text style={styles.commonText}>14推荐•</Text>
                                <Text style={styles.commonText}>2评论</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.imgWrap}>
                        <Image style={styles.img}
                               resizeMode={Image.resizeMode.contain}
                               source={require("../../../imgs/combat.png")}/>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItemWrap:{
        flex:1,
        height:70,
        flexDirection:"row",
        paddingTop:10,
        paddingBottom:10,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:"#ccc",
    },
    imgWrap:{
        justifyContent:"flex-end",
        width:(Screen.width-20)/5,
    },
    img:{
       flex:1
    },
    textWrap:{
        flex:1,
    },
    textTitleWrap:{
        flex:1,
        height:30,
        marginBottom:10,
    },
    textTitle:{
        fontSize:12,
        fontWeight:"bold",
    },
    textOptionWrap:{
        flexDirection:"row",
    },
    creatorWrap:{
        width:Screen.width/14,
        height:14,
        borderWidth:Screen.onePixel,
        borderColor:"#ccc",
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
    },
    creator:{
        color:"#ccc",
        fontSize:10,
    },
    commonTextWrap:{
        flexDirection:"row",
    },
    commonText:{
        color:"#ccc",
        fontSize:10,
    }
})