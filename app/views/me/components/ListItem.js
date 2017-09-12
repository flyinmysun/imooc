/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var {width,height} = Dimensions.get('window');
import Screen from "../../../utils/screen"

export default class ListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{backgroundColor:"#fff",marginTop:10}}>
                {this.props.data.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index}  onPress={()=>{
                            this.props.subScreen(item);
                        }}>
                            <View style={styles.listItemWrap} >
                                <View style={styles.iconWrap}>
                                    <FontAwesome size={14} color={item.color} name={item.IconName}/>
                                </View>
                                <View style={styles.itemTextWrap}
                                      onPress={()=>{alert(1)}}>
                                    <Text style={styles.itemText}>{item.label}</Text>
                                </View>
                                <View style={styles.arrowWrap}>
                                    <FontAwesome name="angle-right" color="#999" size={14}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}

            </View>

        )
    }
}

var styles = StyleSheet.create({
    listItemWrap:{
        width:Screen.width,
        paddingTop:10,
        paddingBottom:10,
        marginRight:10,
        marginLeft:10,
        flexDirection:"row",
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:"#ccc",
    },
    iconWrap:{
        marginRight:10,
        justifyContent:"center",
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