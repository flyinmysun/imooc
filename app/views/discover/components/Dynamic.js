/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"

export default class Dynamic extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {itemData} = this.props;
        return(
            <View style={{backgroundColor:"#fff"}}>
                <View style={styles.listItemWrap}>
                    <View style={styles.imgWrap}>
                        <FontAwesome name="user-circle-o" size={32} color="pink"/>
                    </View>
                    <View style={styles.textWrap}>
                        <View style={styles.personInfoWrap}>
                            <View style={styles.nameWrap}>
                                <Text style={styles.name}>慕女郎</Text>
                                <FontAwesome name="star" size={12} color="cyan"
                                style={{marginTop:2}}/>
                            </View>
                            <View style={styles.timeWrap}>
                                <Text style={styles.time}>3天前</Text>
                            </View>
                        </View>
                        <View style={styles.textTitleWrap}>
                            <Text style={styles.textTitle}>在猿问回答了</Text>
                        </View>
                        <View style={styles.linkWrap}>
                            <Text style={styles.linkFrom}>来自Android</Text>
                            <Text style={styles.linkQuestion}>招聘实习生的能不能去</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItemWrap:{
        flex:1,
        height:140,
        flexDirection:"row",
        paddingTop:10,
        paddingBottom:10,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:"#ccc",
    },
    imgWrap:{
        justifyContent:"flex-start",
        width:(Screen.width-20)/7,
    },
    img:{
       flex:1
    },
    textWrap:{
        flex:1,
    },
    personInfoWrap:{},
    nameWrap:{
        flexDirection:"row",
    },
    name:{
        fontSize:12,
        marginRight:10,
    },
    timeWrap:{},
    time:{
        fontSize:10,
        color:"#ccc",
        lineHeight:14,
    },
    textTitleWrap:{
        flex:1,
        height:30,
        justifyContent:"center"
    },
    textTitle:{
        fontSize:12,
    },
    linkWrap:{
        flex:1,
        height:30,
        padding:10,
        backgroundColor:"#F2F4F6",
    },
    linkFrom:{
        fontSize:10,
        lineHeight:14,
        color:"#ccc",
    },
    linkQuestion:{
        fontSize:12,
        fontWeight:"bold",
    }




})