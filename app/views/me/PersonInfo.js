import React from 'react'
import {StyleSheet,View,Text,Picker,TouchableOpacity,Navigation,Image,DeviceEventEmitter} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../utils/screen"
import ListItem2 from "./components/ListItem2"
import Service from "../../service/Service";

export default class PersonInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfoData:"",
            //careerSubName:"请选择",
            editorName:" ",
            nickName:" ",
            //gender:"",
        }
    }
    static navigationOptions = {
        headerTitle: "个人资料",
        headerTitleStyle:{color:"#fff",alignSelf:"center"},
        headerTintColor:"#fff",
        headerStyle: { backgroundColor:'#3C3C3C',elevation:0},//顶部栏背景颜色,去掉底边阴影
    }
    componentDidMount(){
        if(this.props.navigation.state.params){
            //alert(this.props.navigation.state.params.subName)
            const careerVal = this.props.navigation.state.params.subName
            this.setState({...this.state,careerSubName:careerVal})
           /* const editorVar = this.props.navigation.state.params.value
            this.setState({...this.state,editorName:editorVar})*/
        }
        let param={
            id:1,
        }
       Service.getUserInfo(param,this._getUserInfo)

    }
    _getUserInfo=(res)=>{
        this.setState({...this.state,userInfoData:res})
    }
    componentDidUpdate(){

    }
    /**职业选择***/
    _careerChoice=(subName)=>{
        this.props.navigation.navigate("CareerChoice",{choice:this.choice,choiceName:this.state.userInfoData.profession})
    };
    choice=(item)=>{
        //this.setState({...this.state,careerSubName:item.name})
        this.setState({...this.state,userInfoData:{...this.state.userInfoData,profession:item.name}})
    };
    /***签名**/
    _EditorName=()=>{
        this.props.navigation.navigate("EditorName",{editor:this._editor,editorName:this.state.userInfoData.signature})
    };
    _editor=(inputVal)=>{//回调方法
        //this.setState({...this.state,editorName:inputVal})
        this.setState({...this.state,userInfoData:{...this.state.userInfoData,signature:inputVal}})
    };
    /**修改昵称***/
    _NickName=()=>{
        this.props.navigation.navigate("NickName",{nick:this._nick,nickName:this.state.userInfoData.nick_name})
    };
    _nick=(textInputVal)=>{
        //this.setState({...this.state,nickName:textInputVal})
        this.setState({...this.state,userInfoData:{...this.state.userInfoData,nick_name:textInputVal}})
    };
    /**选择性别***/
    _chooseSex=()=>{
        //alert(1)

    }

    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity style={{flexDirection:"row",padding:10,backgroundColor:"#fff",alignItems:"center",marginTop:10}}>
                    <Text style={{fontSize:12}}>头像</Text>
                    <View style={{flex:1}}></View>
                    <FontAwesome name="user-circle-o" color="pink" size={30} />
                    <FontAwesome name="angle-right" color="#999" size={14} style={{marginLeft:10}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="职业" subName={this.state.userInfoData.profession} showBorderBottom={true} callback={this._careerChoice}/>
                    <ListItem2 title="签名" subName={this.state.userInfoData.signature} callback={this._EditorName} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="昵称" subName={this.state.userInfoData.nick_name} showBorderBottom={true} callback={this._NickName} />
                    <ListItem2 title="性别"
                               subName="女"
                               showBorderBottom={true}  callback={this._chooseSex} />
                    <Picker
                        selectedValue={this.state.language}
                        onValueChange={(lang) => this.setState({language: lang})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <ListItem2 title="地区" subName="上海市"  />
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="绑定手机" subName="未绑定" showBorderBottom={true} />
                    <ListItem2 title="邮箱" subName="597282386@qq.com" showBorderBottom={true}  />
                    <ListItem2 title="实名认证" subName="未认证" showBorderBottom={true} />
                    <ListItem2 title="学籍认证" subName="未认证"  />
                </TouchableOpacity>



            </View>
        )
    }
}

const styles=StyleSheet.create({

})