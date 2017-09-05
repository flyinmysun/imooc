/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Home extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    componentDidMount(){
        alert(1);
    }

    render(){
        return(
            <View>
                <Text>登录</Text>
            </View>
        )
    }
}