/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Discover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    static navigationOptions = {
        headerTitle:"下载",
        headerTintColor: "#fff", //设置导航栏的颜色
        headerStyle: {backgroundColor: '#3C3C3C', elevation: 0},//顶部栏背景颜色,去掉底边阴影
        headerRight: (
            <View style={{flexDirection: "row"}}>
                <FontAwesome name="pencil-square-o" size={20} color="#fff" style={{marginRight: 10}}/>
            </View>

        ),
    };


    render() {
        return (
          <View>
              <Text>下载</Text>
          </View>
        )
    }

}


const styles = StyleSheet.create({

})