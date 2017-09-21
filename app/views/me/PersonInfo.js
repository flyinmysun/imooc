import React from 'react'
import {StyleSheet,View,Text,Modal,TouchableOpacity,Navigation,TouchableHighlight,DeviceEventEmitter} from 'react-native'
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
            gender:"",
            modalVisible: false,

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

    setModalVisible(visible) {
        this.setState({...this.state,modalVisible: visible});
    }
    _chooseSex=()=>{
        //alert(1)


    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection:"row",padding:10,backgroundColor:"#fff",alignItems:"center",marginTop:10}}>
                    <Text style={{fontSize:12}}>头像</Text>
                    <View style={{flex:1}}></View>
                    <FontAwesome name="user-circle-o" color="pink" size={30} />
                    <FontAwesome name="angle-right" color="#999" size={14} style={{marginLeft:10}}/>
                </View>

                <View style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="职业" subName={this.state.userInfoData.profession} showBorderBottom={true} callback={this._careerChoice}/>
                    <ListItem2 title="签名" subName={this.state.userInfoData.signature} callback={this._EditorName} />
                </View>
                <View style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="昵称" subName={this.state.userInfoData.nick_name} showBorderBottom={true} callback={this._NickName} />
                    <View>
                        <Modal
                            animationType={"slide"}
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {alert("Modal has been closed.")}}
                        >
                            <View style={{backgroundColor:"rgba(0,0,0,0.5)",flex:1,}}>
                                <View style={{borderRadius:10,width:Screen.width,position:"absolute",bottom:2,left:10,right:10,
                                    backgroundColor:"#fff",}}>
                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setState({...this.state,gender:"男",modalVisible: false})
                                        }}
                                        style={{flex:1,justifyContent:"center",alignItems:"center",
                                            borderBottomWidth:Screen.onePixel,borderBottomColor:"#ccc",
                                        paddingVertical:10,}}
                                    >
                                        <Text style={{fontSize:12}}>男</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setState({...this.state,gender:"女",modalVisible: false})
                                        }}
                                        style={{flex:1,justifyContent:"center",alignItems:"center",
                                            borderBottomWidth:Screen.onePixel,borderBottomColor:"#ccc",
                                            paddingVertical:10,}}
                                    >
                                        <Text style={{fontSize:12}}>女</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        style={{flex:1,justifyContent:"center",alignItems:"center",
                                            paddingVertical:10,}}
                                        onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }}
                                    >
                                        <Text style={{fontSize:12,}}>取消</Text>
                                    </TouchableHighlight>

                                </View>
                            </View>
                        </Modal>
                        {/*点击选择**/}
                        <TouchableHighlight onPress={() => {
                            this.setModalVisible(true)
                        }}>
                            {/*<View >
                                <ListItem2 title="性别" subName="女" showBorderBottom={true} />
                            </View>*/}
                            <View style={{paddingHorizontal:10, paddingVertical:16, flexDirection:'row',backgroundColor:"#fff"}}>
                                <Text style={{fontSize:12}}>性别</Text>
                                <View style={{flex:1}}></View>
                                <Text style={{fontSize:12,marginRight:8}}>{this.state.gender}</Text>
                                <FontAwesome name="angle-right" color="#999" size={14}/>
                            </View>
                        </TouchableHighlight>

                    </View>
                    <ListItem2 title="地区" subName="上海市"  />
                </View>

                <View style={{marginTop:10,backgroundColor:"#fff"}} >
                    <ListItem2 title="绑定手机" subName="未绑定" showBorderBottom={true} />
                    <ListItem2 title="邮箱" subName="597282386@qq.com" showBorderBottom={true}  />
                    <ListItem2 title="实名认证" subName="未认证" showBorderBottom={true} />
                    <ListItem2 title="学籍认证" subName="未认证"  />
                </View>




            </View>
        )
    }
}

const styles=StyleSheet.create({

})