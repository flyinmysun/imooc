/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"

export default class HistoryItem extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <View>
                {
                    this.props.data.map((item,index)=>{
                        return(
                            <View style={styles.itemWrap} key={index}>
                                <View style={styles.timeWrap}>
                                    <View style={styles.circleWrap}>
                                        <FontAwesome name="circle" size={14} style={styles.circle}/>
                                    </View>
                                    <View>
                                        <Text style={styles.time}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={styles.content}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.catalog}>{item.subName}</Text>
                                </View>
                            </View>
                        )

                    })

                }
            </View>



        )
    }
}

const styles = StyleSheet.create({
    itemWrap:{
        flex:1,
        paddingTop:10,
    },
    timeWrap:{
        flexDirection:"row",
    },
    circleWrap:{
        width:16,
        position:"absolute",
        left:-9,
        top:2,
        zIndex:999,
    },
    circle:{
        color:"#14b4ff",
    },
    time:{
        fontSize:14,
        color:"#14b4ff",
        paddingLeft:10,
    },
    content:{
        padding:10,
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
    },
    catalog:{
        fontSize:12,
        color:"#ccc",
    },
})