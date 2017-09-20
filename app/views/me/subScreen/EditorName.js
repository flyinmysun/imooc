import React from 'react'
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Navigation,} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"
import Service from "../../../service/Service"

let _this = null;
export default class EditorName extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //textInfo:this.props.navigation.state.params.textVal,
            textInfo:this.props.navigation.state.params.editorName,
            num:200,

        }
    }
    static navigationOptions = {
        headerTitle: "编写签名",
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
       let param={
           id:1,
           signature:value,
       }
       Service.modifyUserInfo(param,this._modifyUserInfo("",value))

       //alert(value)

       this.props.navigation.goBack()
   }
    _modifyUserInfo=(res,value)=>{
        if(this.props.navigation.state.params.editor)
            this.props.navigation.state.params.editor(value);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder="说点什么吧..."
                           placeholderTextColor="#ccc"
                           multiline={true}
                           underlineColorAndroid='transparent'  //让下划线的样式透明，去掉
                           style={styles.textInput}
                           value={this.state.textInfo}
                           maxLength={200}
                           keyboardType="default"
                           onChangeText={(textInfo)=>{
                               this.setState({...this.state,textInfo:textInfo,num:200-this.state.textInfo.length})
                               //this.setState({...this.state,textInfo:textInfo})
                               //this.setState({...this.state,num:this.state.num-length})

                           }}
                />

                <View style={styles.maxLength}>
                    <Text style={{fontSize:10,marginRight:10}}>还可以输入
                        {this.state.num}个字</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",

    },
    textInput:{
        padding: 0,//android 的TextInput自带padding  需去掉
        height:200,
        textAlignVertical: 'top', //在安卓上如果设置multiline = {true}，文本默认会垂直居中
        color:"#333",
        fontSize:10,
        paddingTop:10,
        paddingLeft:10,
    },
    maxLength:{
        flexDirection:"row-reverse",
        height:20,
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:"#ccc",
    },
})

