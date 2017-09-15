import React from 'react'
import {StyleSheet,View,Text,ScrollView,TouchableOpacity,Navigation,DeviceEventEmitter} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"


export default class CareerChoice extends React.Component{
    constructor(props){
        super(props);
        this.state={
                choiceName:this.props.navigation.state.params.choice

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
        this.setState({...this.state,choiceName:item.name})
        //DeviceEventEmitter.emit("choice")
        this.props.navigation.navigate("PersonInfo",{subName:item.name})
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
        {id:3,name:"web前端工程师",},
        {id:4,name:"JS工程师",},
        {id:5,name:"交互设计师",},
    ],
}