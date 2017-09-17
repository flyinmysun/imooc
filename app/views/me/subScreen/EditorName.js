import React from 'react'
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Navigation,} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"

let _this = null;
export default class EditorName extends React.Component{
    constructor(props){
        super(props);
        this.state={
            textInfo:this.props.navigation.state.params.textVal,

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
    _checked=(item)=>{
        this.props.navigation.state.params.choice(item);
        this.setState({...this.state,choiceName:item.name})
        //DeviceEventEmitter.emit("choice")
        this.props.navigation.goBack()
    }
   _sure=()=>{
        let value= this.state.textInfo
       //alert(value)
       this.props.navigation.state.params.editor(value);
       //DeviceEventEmitter.emit("choice")
       this.props.navigation.goBack()
   }

    render(){

        return(
            <View style={styles.container}>
                <TextInput placeholder="说点什么吧..."
                           placeholderTextColor="#ccc"
                           multiline={true}
                           defaultValue={this.state.info}
                           underlineColorAndroid='transparent'  //让下划线的样式透明，去掉
                           style={styles.textInput}
                           value={this.state.textInfo}
                           maxLength={200}
                           onChangeText={(textInfo)=>{
                               this.setState({...this.state,textInfo:textInfo})
                           }}
                >
                </TextInput>
                <View style={styles.maxLength}>
                    <Text style={{fontSize:10,marginRight:10}}>还可以输入{200-{}}
                        {this.state.textInfo.length}个字</Text>
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

