import React from 'react'
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Navigation,} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"

let _this = null;
export default class NickName extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //textInfo:this.props.navigation.state.params.textVal,
            textInfo:this.props.navigation.state.params.nickName,
            num:15,

        }
    }
    static navigationOptions = {
        headerTitle: "修改昵称",
        headerTitleStyle:{color:"#fff",alignSelf:"center"},
        headerTintColor:"#fff",
        headerRight:(<TouchableOpacity onPress={()=>{_this._sure()}}><Text
            style={{color:"#fff",marginRight:10,}}
        >完成</Text></TouchableOpacity>),
        headerStyle: { backgroundColor:'#3C3C3C',elevation:0},//顶部栏背景颜色,去掉底边阴影
    }
    componentDidMount(){
        _this = this;
    }

   _sure=()=>{
        let value= this.state.textInfo
       //alert(value)
       this.props.navigation.state.params.nick(value);
       this.props.navigation.goBack()
   }

    render(){
        return(
            <View style={{backgroundColor:"#fff",flex:1}}>
                <View style={styles.wrap}>
                    <TextInput
                        placeholderTextColor="#ccc"
                        underlineColorAndroid='transparent'
                        value={this.state.textInfo}
                        style={styles.textInput}
                        onChangeText={(value)=>{
                            this.setState({...this.state,textInfo:value,num:15-this.state.textInfo.length})
                        }}
                    />
                    <Text style={styles.maxLength}>{this.state.num}</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    wrap:{
        flexDirection:"row",
        marginTop:10,
        borderColor:"#ccc",
        borderWidth:Screen.onePixel,
        paddingHorizontal:10,
    },
    textInput:{
        flex:1,
    },
    maxLength:{
        alignSelf:"center"
    }
})

