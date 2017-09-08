/**
 * Created by zhanwenwei on 2017/9/5.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image,
    Alert
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import screen from '../../../utils/screen'

export default class Slider extends React.Component{
    constructor(props){
        super(props);

        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
            dataSource: dataSource,
        }
    }

    render(){
        return(
            <ViewPager
                style={{flex:1}}
                dataSource={this.state.dataSource.cloneWithPages(this.props.sources||[])}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}
            />
        )
    }

    /**广告**/
    _renderPage = (data, pageID) => {
        return (
            <Image source={{uri: data}} style={styles.adImg} />
        );
    }
}

var styles = StyleSheet.create({
    adImg: {
        width:screen.width,
        height:150,
        resizeMode: 'stretch'
    },
});