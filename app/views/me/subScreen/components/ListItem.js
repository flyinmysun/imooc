/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var {width,height} = Dimensions.get('window');
import Screen from "../../../../utils/screen"

export default class ListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                {this.props.data.map((item,index)=>{
                    return(
                        <View style={styles.listItemWrap} key={index}>
                            {
                                item.IconNam&&
                                <View style={styles.iconWrap}>
                                    <FontAwesome size={30} color={item.color} name={item.IconName}/>
                                </View>
                            }

                            <View style={styles.itemTextWrap}>
                                <Text style={styles.itemText}>{item.name}</Text>
                            </View>
                            {
                                item.subName?<View style={{width:60,alignSelf:"center"}}>
                                    <Text>{item.subName}</Text>
                                </View>:<View style={styles.arrowWrap}>
                                    <FontAwesome name="angle-right" color="#999" size={14}/>
                                </View>
                            }

                        </View>
                    )
                })}

            </View>

        )
    }
}

const styles = StyleSheet.create({
    listItemWrap:{
        width:Screen.width,
        paddingVertical:10,
        margin:10,
        flexDirection:"row",
        height:30,
    },
    iconWrap:{
        marginRight:10,
        justifyContent:"center",
        alignItems:"center",
    },
    itemTextWrap:{
        flex:1,

    },
    itemText:{
        fontSize:14,
    },
    arrowWrap:{
        width:20,
    }
})