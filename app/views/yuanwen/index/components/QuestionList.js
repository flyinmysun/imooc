/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,View,Text,FlatList,ActivityIndicator,TouchableOpacity} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import screen from '../../../../utils/screen'

export default class BlockTitle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            refreshing:false,
            questionList:[
                {id:1,name:"我现在读高一学习编程怎么学？要先学什么"},
                {id:2,name:"我现在读高一学习编程怎么学？要先学什么,我现在读高一学习编程怎么学？要先学什么我现在读高一学习编程怎么学？要先学什么"},
                {id:3,name:"aaa"},
                {id:4,name:"bbb"},
                {id:5,name:"bbb"},
                {id:6,name:"bbb"},
                {id:7,name:"bbb"},
                {id:8,name:"bbb"}
            ]
        }
    }

    componentDidMount(){
    }

    render(){
        return(
            <FlatList
                style={{}}
                data={this.state.questionList}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ListHeaderComponent={this._headerComponent}
                ListFooterComponent={this._footerComponent} //尾部
                //ItemSeparatorComponent={this._separator} //分隔块
                extraData={this.state}
                numColumns="1"
                //columnWrapperStyle如果设置了多列布局（即将numColumns值设为大于1的整数），则可以额外指定此样式作用在每行容器上
                /*columnWrapperStyle={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    paddingLeft:10,
                    paddingRight:10,
                    justifyContent:'space-between',
                    backgroundColor:'#fff'
                }}*/
                onRefresh={this._refreshing}
                refreshing={this.state.refreshing}
                onEndReachedThreshold={0.2}
                onEndReached={this._onload}
            />
        )
    }

    _refreshing=()=>{
        this.setState({...this.state,refreshing:true});
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            this.setState({...this.state,refreshing:false});
        },3000)
    }

    _onload=()=>{
        let timer =  setTimeout(()=>{
            this.setState({...this.state});
            clearTimeout(timer)
            //alert('加载成功')
        },1500)
    }

    /**list 头部**/
    _headerComponent=()=>{
        return(
            <View>
            </View>
        )
    }

    _footerComponent=()=>{
        return(
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'row'
            }}>
                <ActivityIndicator
                    size="small"
                    style={{width:15,padding:10}}
                />
                <Text style={{fontSize:10,color:'#555',marginLeft:10}}>上拉加载更多...</Text>
            </View>
        )
    }

    /**list**/
    _renderItem =(Row)=>{ //Row.item.name Row.item是当前循环的数据item Row.index是当前数据的下标
        return(
            <View style={{marginLeft:10,marginRight:10,backgroundColor:'#fff',
                borderBottomWidth:screen.onePixel,borderBottomColor:'#b5b9bc',}}>
                <View style={{paddingTop:10,paddingBottom:10}}>
                    <Text style={{fontSize:10,color:"#999"}}>来自html</Text>
                    <Text style={{fontSize:14,color:"#333",marginTop:5}}>{Row.item.name}</Text>
                    <View style={{marginTop:7,flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity style={{backgroundColor:'#D2E9FF',padding:5}} onPress={()=>{
                            if(this.props.answer)
                                this.props.answer(Row.item)
                        }}>
                            <Text style={{fontSize:8}}>撰写答案</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:12,color:"#999",marginLeft:10}}>回答问题最高可获得2积分</Text>
                    </View>
                </View>
            </View>
        )
    }

    /**唯一key***/
    _keyExtractor = (item, index) => item.id;
}

const styles = StyleSheet.create({
    wrap:{
    },
})