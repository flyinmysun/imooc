/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"
var {width,height} = Dimensions.get('window');


export default class BtnMenu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectId:1,
        }
    }
    _onPress=(type)=>{
        this.setState({...this.state,selectId:type})


    }

    render(){
        return(
            <View style={styles.btnNavWrap}>
                {this.props.data.map((item,index)=>{
                    return(
                        <View style={styles.btnNavItemWrap} key={index}>
                            <TouchableOpacity style={[styles.touchableOpacity,
                            this.state.selectId == item.type&&styles.activeBtn]} onPress={()=>{
                                this._onPress(item.type)
                            }}>
                                <Text style={[styles.btnText,this.state.selectId == item.type&&styles.activeText]}>{item.label}</Text>
                            </TouchableOpacity>
                        </View>

                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        borderWidth:Screen.onePixel,
        borderColor:"#ccc",
        justifyContent:'center',
        alignItems:'center',
    },
    btnText:{
        fontSize:10
    },
    activeBtn:{
        backgroundColor:"red",
        borderColor:"red",
    },
    activeText:{
        color:"#fff"
    }
})