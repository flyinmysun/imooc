/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    Alert
} from 'react-native';
import Data from "../../DataJson/category.json"

import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import ViewPager from 'react-native-viewpager';
var {width,height} = Dimensions.get('window');

var icon = require('../../imgs/category/html.png');

export default class Category extends React.Component{
    constructor(props) {
        super(props);


    }

    static navigationOptions = {
        headerTitle: (
        <View style={{width:300}}>
            <Text style={{color:'#fff',alignSelf:'center'}}>课程</Text>
        </View>
        ),
        headerRight: (
            <FontAwesome name="envelope" size={20} color="#fff" style={{margin:8}}/>
        ),
        headerLeft: (
            <FontAwesome name="search" size={20} color="#fff" style={{margin:8}}/>
            //<Text style={{color:'#fff',margin:8}}>搜索</Text>
        ),
        headerStyle: { backgroundColor:'#3C3C3C'},//顶部栏背景颜色1
    }

    componentDidMount(){
    }

    render(){
        const str = '../../imgs/category/html.png'
        return(
            <View style={[styles.flex,styles.container]}>
                <ScrollView>
                    {
                        datas.map((item,index)=>{
                            return(
                                <View key={index} style={styles.course}>
                                    <View style={styles.flex}>
                                        <Text style={styles.course_text}>{item.name}</Text>
                                    </View>
                                    <View style={styles.flex_wrap}>
                                    {
                                        item.items.map((t,i)=>{
                                            return(
                                                <View style={styles.flex_item} key={i}>
                                                    <Image source={t.url}/>
                                                    <Text style={styles.flex_item_text}>{t.name}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                    </View>
                                </View>
                            )

                        })
                    }

                    {/* <View style={styles.flex_wrap}>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/html.png")}/>
                     <Text style={styles.flex_item_text}>HTML/CSS</Text>
                     </View>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/JS.png")}/>
                     <Text style={styles.flex_item_text}>JavaScript</Text>
                     </View>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/jquery.png")}/>
                     <Text style={styles.flex_item_text}>jQuery</Text>
                     </View>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/html.png")}/>
                     <Text style={styles.flex_item_text}>HTML/CSS</Text>
                     </View>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/JS.png")}/>
                     <Text style={styles.flex_item_text}>JavaScript</Text>
                     </View>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/jquery.png")}/>
                     <Text style={styles.flex_item_text}>jQuery</Text>
                     </View>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/html.png")}/>
                     <Text style={styles.flex_item_text}>HTML/CSS</Text>
                     </View>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/JS.png")}/>
                     <Text style={styles.flex_item_text}>JavaScript</Text>
                     </View>
                     <View style={styles.flex_item}>
                     <Image source={require("../../imgs/category/jquery.png")}/>
                     <Text style={styles.flex_item_text}>jQuery</Text>
                     </View>

                     </View>*/

                    }
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    flex:{flex:1},
    container:{backgroundColor:"#f2f2f2",},
    course:{backgroundColor:"#fff",marginBottom:10,},
    course_text:{marginTop:16,marginBottom:16,fontSize:12,paddingLeft:5},
    flex_wrap:{flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start" },
    flex_item:{
        width:width/3,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    flex_item_text:{
        fontSize:10,
        fontWeight:"bold"
        ,marginTop:5
    }
});

const datas = [
    {
        name:"前端开发",
        items:[
            {frontId:0,name:"HTML/CSS",url:require("../../imgs/category/html.png")},
            {frontId:1,name:"JavaScript",url:require("../../imgs/category/JS.png")},
            {frontId:2,name:"jQuery",url:require("../../imgs/category/jquery.png")},
            {frontId:3,name:"HTML5",url:require("../../imgs/category/html.png")},
            {frontId:4,name:"Node.js",url:require("../../imgs/category/html.png")}
        ]
    },
    {
        name:"后端开发",
        items: [
            {BackendId:0,name:"PHP",url:require("../../imgs/category/html.png")},
            {BackendId:1,name:"Java",url:require("../../imgs/category/JS.png")},
            {BackendId:2,name:"Python",url:require("../../imgs/category/jquery.png")}
        ]
    },

]