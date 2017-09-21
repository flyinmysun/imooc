import React from 'react'
import {StyleSheet,View,Text,ScrollView,TouchableOpacity,Navigation,DeviceEventEmitter} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"
import Service from "../../../service/Service";
import {toastShort} from "../../../utils/toast"


export default class CareerChoice extends React.Component{
    constructor(props){
        super(props);
        this.state={
                choiceName:this.props.navigation.state.params.choiceName

        }
    }
    static navigationOptions = {
        headerTitle: "职业选择",
        headerTitleStyle:{color:"#fff",alignSelf:"center"},
        headerTintColor:"#fff",
        headerStyle: { backgroundColor:'#3C3C3C',elevation:0},//顶部栏背景颜色,去掉底边阴影
    }
    componentDidMount(){


    }
    _checked=(item)=>{

        //DeviceEventEmitter.emit("choice")
        let param={
            id:1,
            profession_id:item.id,
            profession:item.name,
        }
        Service.modifyUserInfo(param,this._modifyUserInfo("",item))
        /*fetch(url,{
            method: "POST",
            mode: "cors",  //允许跨域
            credentials: "include",//允许传cookies
            headers: {"content-type" : 'application/json'},
            body: JSON.stringify(param)
        }).then((response)=> {
            if (response.ok) {
                response.json().then((data)=>{
                    //alert(JSON.stringify(data));
                    if(data && data.status==0){
                        //alert(item.name)
                        //let res = data.result;


                    }else{
                        alert(data.errorMsg)
                    }
                });
            } else {
                alert('请求失败，状态码为', response.status);
            }
        });*/
        toastShort("修改成功")
        this.props.navigation.goBack()
    }
    _modifyUserInfo=(res,item)=>{
        this.props.navigation.state.params.choice(item);
        this.setState({...this.state,choiceName:item.name})
    }

    render(){

        return(
            <ScrollView >
                {
                    data.careerData.map((item,index)=>{
                        return(
                            <View style={styles.ListWrap} key={index}>
                                <TouchableOpacity style={styles.itemWrap} onPress={()=>{
                                    this._checked(item);

                                }} >
                                    <Text style={{fontSize:12,}}>{item.name}</Text>
                                    <View style={{flex:1}}></View>
                                    {
                                        this.state.choiceName==item.name&&<FontAwesome name="check" style={{marginRight:10,color:"red"}}/>
                                    }

                                </TouchableOpacity>
                            </View>

                        )
                    })
                }

            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    ListWrap:{
        flex:1,
        paddingLeft:10,
        backgroundColor:"#fff"
    },
    itemWrap:{
        paddingVertical:10,
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:"#ccc",
        flexDirection:"row",

    }
})

const   data={
    careerData:[
        {id:1,name:"学生",},
        {id:2,name:"页面重构设计",},
        {id:3,name:"少奶奶",},
        {id:4,name:"web前端工程师",},
        {id:5,name:"JS工程师",},
        {id:6,name:"交互设计师",},
    ],
}