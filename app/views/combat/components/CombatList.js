/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"
var {width,height} = Dimensions.get('window');

export default class CombatList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {itemData} = this.props;
        return(
            <View style={{backgroundColor:"#fff"}}>
                <View style={styles.listItemWrap}>
                    <View style={styles.imgWrap}>
                        <Image style={styles.img}
                               resizeMode={Image.resizeMode.contain}
                               source={require("../../../imgs/combat.png")}/>
                    </View>
                    <View style={styles.textWrap}>
                        <View style={styles.textTitleWrap}>
                            <Text style={styles.textTitle}>{itemData.label}</Text>
                        </View>
                        <View style={styles.textOptionWrap}>
                            <Text style={styles.textPrice}>￥{itemData.price}</Text>
                            <Text style={styles.textPeople}>{itemData.people}人学习</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItemWrap:{
        flexDirection:"row",
        flex:1,
        borderBottomWidth:Screen.onePixel,
        borderColor:"#ccc",
        backgroundColor:"#fff",
        marginLeft:10,
        marginRight:10,
        paddingBottom:10,
        paddingTop:10,
    },
    imgWrap:{
        width:(width-20)/3,
        height:50,
        justifyContent:"center",
        alignItems:"center",
    },
    img:{
      flex:1,
    },
    textWrap:{
        flex:1,
        marginLeft:10,
        height:50,
    },
    textTitleWrap:{
        flex:1,
        height:30,
    },
    textTitle:{
        fontSize:10,
        lineHeight:12,
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