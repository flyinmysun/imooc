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
                            //alert(item)
                        }}>
                            <View style={styles.iconNavItemWrap}>
                                <FontAwesome name={item.IconName} size={20} color={item.color}/>
                                <Text style={{marginTop:10,fontSize:12}}>{item.label}</Text>
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
})