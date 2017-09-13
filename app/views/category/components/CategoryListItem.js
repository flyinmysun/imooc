/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"



export default class CategoryListItem extends React.Component{
    constructor(props){
        super(props)

    }


    render(){
        const item = this.props.itemData
        return(
            <View style={styles.listItemWrap}>
                <View style={styles.imgWrap}>
                    <Image style={styles.img}
                           source={require("../../../imgs/combat.png")}
                           resizeMode="cover"
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.optionWrap}>
                        <Text style={styles.commonText}>高级</Text>
                        <View style={{flexDirection:"row"}}>
                            <FontAwesome name="user-circle-o" color="#CCC"
                            style={{marginRight:6,marginLeft:20}}/>
                            <Text style={styles.commonText}>{item.people}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItemWrap:{
        paddingHorizontal:10,
        paddingTop:10,
        paddingBottom:20,
        flexDirection:"row",
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:"#CCC",
    },
    imgWrap:{
        width:100,
        height:60,
        marginRight:10
    },
    img:{
        width:100,
    },
    textContainer:{
        flex:1,
    },
    title:{
        fontSize:12,
        color:"#222",
        fontWeight:"bold"
    },
    optionWrap:{
        flexDirection:"row",
        marginTop:10,
    },
    commonText:{
        fontSize:10,
        color:"#ccc"
    }
})