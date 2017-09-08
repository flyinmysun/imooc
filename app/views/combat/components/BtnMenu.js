/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var {width,height} = Dimensions.get('window');

export default class BtnMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.btnNavWrap}>
                {this.props.data.map((item,index)=>{
                    return(
                        <View style={styles.btnNavItemWrap} key={index}>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <Text style={styles.btnText}>{item.label}</Text>
                            </TouchableOpacity>
                        </View>

                    )
                })}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    btnNavWrap:{
        flexDirection:'row',
        flexWrap:"wrap",
        width:width,
        backgroundColor:"#fff",
        paddingLeft:10,
        paddingTop:10,
    },
    btnNavItemWrap:{
        alignItems:'center',
        width:(width-40)/3,
        marginRight:10,
        marginBottom:10,
    },
    touchableOpacity:{
        borderRadius:50,
        width:(width-40)/3,
        height:26,
        borderWidth:1,
        borderColor:"#ccc",
        justifyContent:'center',
        alignItems:'center',
    },
    btnText:{
        fontSize:10
    }
})