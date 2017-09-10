/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"
import Comment from "./Comment"

export default class Square extends React.Component{
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
                                <Text style={styles.name}>Flyinmysun</Text>
                            </View>
                            <View style={styles.timeWrap}>
                                <Text style={styles.time}>6小时前</Text>
                            </View>
                        </View>
                        {<Comment/>}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItemWrap:{
        flex:1,
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




})