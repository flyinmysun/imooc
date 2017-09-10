/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Screen from "../../../utils/screen"

export default class Comment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {itemData} = this.props;
        return(
            <View style={{flex:1}}>
                <View style={styles.commentTopic}>
                    <View style={styles.commentTopicTitleWrap}>
                        <Text style={styles.commentTopicTitle}>讲师们教师节快乐！</Text>
                    </View>
                    <View style={styles.commentTopicImgWrap}>
                        <Image style={styles.commentTopicImg}
                               resizeMode={Image.resizeMode.cover}
                               source={require("../../../imgs/combat.png")}/>
                    </View>
                </View>
                <View style={styles.commentSupportWrap}>
                    <Text  style={styles.commentSupportText}>评论</Text>
                    <FontAwesome name="commenting-o" siza={20} color="#ccc"/>
                    <Text style={styles.commentSupportText}>1</Text>
                    <FontAwesome name="thumbs-o-up" siza={20} color="#ccc"/>
                </View>
                <View style={styles.commentContainer}>
                    <View style={styles.commentItem}>
                        <Text style={styles.name}>爲嗲：</Text>
                        <Text style={styles.content}>五千年的风和雨啊，藏了多少梦</Text>
                    </View>
                    <View style={styles.commentItem}>
                        <Text style={styles.name}>爲嗲：</Text>
                        <Text style={styles.content}>五千年的风和雨啊，藏了多少梦</Text>
                    </View>
                    <View>
                        <Text style={styles.name}>更多评论内容...</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentTopic:{
        flex:1,
    },
    commentTopicTitleWrap:{
        flex:1,
    },
    commentTopicTitle:{
        fontSize:12,
        flexWrap:"wrap",
        lineHeight:20,
    },
    commentTopicImgWrap:{
        flex:1,
        flexDirection:"row"
    },
    commentTopicImg:{
        width:80,
        height:80,
        backgroundColor:"pink",
    },
    commentSupportWrap:{
        flexDirection:"row-reverse",
        flex:2
    },
    commentSupportText:{
        fontSize:10,
        color:"#ccc",
        marginRight:5,
        marginLeft:5,
    },
    commentContainer:{
        backgroundColor:"#F2F4F6",
        padding:10,
        flex:1,
        marginTop:10,
    },
    commentItem:{
        flexDirection:"row",
    },
    name:{
        color:"cyan",
        fontSize:10,
        lineHeight:20,
    },
    content:{
        color:"#333333",
        fontSize:10,
        lineHeight:20,
        flexWrap:"wrap",
    }




})