/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity,Navigation} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"

export default class ShowPanel extends React.Component{
    constructor(props) {
        super(props);

        alert("构造");

        this.state = {
            test:'aaa'
        }
    }

    /***/
    componentWillMount(){
        this
        alert("componentWillMount");
    }

    componentDidMount(){
        alert("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {

        alert("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        //alert("shouldComponentUpdate");
        if(nextProps.num == 2){
            return false;
        }else{
            return true;        // 记得要返回true
        }

    }

    componentWillUpdate() {
       // alert("componentWillUpdate");
    }

    componentDidUpdate() {
       // alert("componentDidUpdate");
    }

    componentWillUnmount(){
        alert("componentWillUnmount");
    }


    render(){
        return(
            <View style={{backgroundColor:'#fff'}}>
              <Text style={{fontSize:20,color:'red'}}>{this.props.num}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    topWrap:{
        backgroundColor:"#34394b",
        height:150,
        padding:10,
    },
    center:{
      justifyContent:"center",
      alignItems:"center",
    },
    noLoginTop:{
        justifyContent:"center",
        alignItems:"center",
    },
    btnText:{
      fontSize:18,
      color:"#828282",
        marginTop:10,
    },
    InfoWrap:{
        flexDirection:"row",
    },
    imgWrap:{
        width:(Screen.width-20)/5,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
    },
    personInfoWrap:{
        flex:1,
    },
    name:{
        fontSize:16,
        color:"#fff",
        marginTop:4,
    },
    learnWrap:{
        flexDirection:"row",
        marginTop:7,
    },
    learnText:{
        fontSize:12,
        color:"#828282",
        marginRight:10,
    },
    envelopeWrap:{
        width:30,
    },
    optionWrap:{
        flex:1,
        flexDirection:"row",
        height:14,
        marginTop:60,
    },
    attentionWrap:{
        width:(Screen.width-23)/3,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    borderRight:{
        borderRightWidth:Screen.onePixel,
        borderRightColor:"#717581",
        height:14,
    },
    borderRight2:{
        borderRightWidth:Screen.onePixel,
        borderRightColor:"#34394b",
        height:14,
    },
    optionText:{
        fontSize:12,
        color:"#717581",
        marginRight:8,
    },
    optionNum:{
        fontSize:12,
        color:"#fff",
    },
    hide:{
        height:0,
        padding:0,
    },
    show:{
        height:150,
        padding:10,
    }


})