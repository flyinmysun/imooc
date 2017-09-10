/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Top from "./components/Top"

export default class Me extends React.Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        headerTitle:"我的",
        header:null,
    }
    render(){
        return(
            <ScrollView>
                <Top/>
            </ScrollView>
        )
    }
}