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
            <View style={styles.listItemWrap}>
                <View style={styles.imgWrap}>
                    <Image style={styles.img}
                           resizeMode={Image.resizeMode.contain}
                           source={require("../../../imgs/combat.png")}/>
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.textTitle}>{itemData.label}</Text>
                    <View style={styles.textOptionWrap}>
                        <Text style={styles.textPrice}>￥188</Text>
                        <Text style={styles.textPeople}>101人学习</Text>
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
        padding:10,
        borderBottomWidth:Screen.onePixel,
        borderColor:"#ccc",
        backgroundColor:"#fff",
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