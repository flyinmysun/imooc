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
import ViewPager from 'react-native-viewpager';
var {width,height} = Dimensions.get('window');

var IMGS = [
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',
    'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1495271287&di=91be6b4c4a68b5523577f2cf2d8a30d0&src=http://pic2.ooopic.com/13/58/87/63bOOOPICb3_1024.jpg',

];

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
        return(
            <View style={[styles.flex,styles.container]}>
                <ScrollView>
                    {
                        Data.map((item,index)=>{
                            return(
                                <View key={index} style={styles.course}>
                                    <View style={styles.flex}>
                                        <Text style={styles.course_text}>{item}</Text>
                                    </View>
                                    <View style={styles.flex_wrap}>
                                    {
                                        item.map((t,i)=>{
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






                       /* <View style={styles.flex_wrap}>
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
    flex_wrap:{flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start"},
    flex_item:{width:100,height:70,marginLeft:10,marginRight:10,justifyContent:"center",alignItems:"center"},
    flex_item_text:{fontSize:10,fontWeight:"bold",marginTop:5}
});