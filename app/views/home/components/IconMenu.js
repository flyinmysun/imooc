/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var {width,height} = Dimensions.get('window');

export default class IconMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.iconNavWrap}>
                {this.props.data.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={()=>{
                            this.props.iconItemClick(item)
                        }}>
                            <View style={styles.iconNavItemWrap}>
                                <View style={[styles.iconNavItemIcon,{backgroundColor:item.color}]}>
                                    <FontAwesome name="envelope" size={16} color="#fff"/>
                                </View>
                                <Text style={{marginTop:10,fontSize:10}}>{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    iconNavWrap:{
        flexDirection:'row',
        width:width,
        backgroundColor:"#fff",
    },
    iconNavItemWrap:{
        alignItems:'center',
        width:width/4,
        padding:10
    },
    iconNavItemIcon:{
        borderRadius:width/4*0.4/2,
        width:width/4*0.4,
        height:width/4*0.4,
        justifyContent:'center',
    alignItems:'center'
}
})