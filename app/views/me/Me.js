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

    static navigationOptions = {
        headerTitle:"我的"
    }

    render(){
        return(
            <View>
                <Text>我的</Text>
            </View>
        )
    }
}