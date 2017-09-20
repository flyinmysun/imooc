/**
 * Created by zhanwenwei on 2017/8/28.
 */
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import scree from '../../utils/screen'

export default class Discover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModal:false
        }
    }

    static navigationOptions = ({ navigation, screenProps })=> ({
        headerTitle:"下载",
        headerTintColor: "#fff", //设置导航栏的颜色
        headerStyle: {backgroundColor: '#2b333b', elevation: 0},//顶部栏背景颜色,去掉底边阴影
        headerRight: (
            <TouchableOpacity style={{flexDirection: "row"}} onPress={()=>{
                navigation.state.params.showModal();
            }}>
                <FontAwesome name="th-large" size={20} color="#fff" style={{marginRight: 10}}/>
            </TouchableOpacity>
        ),
    });

    componentDidMount(){
        this.props.navigation.setParams({
            showModal:this.showModal
        })
    }


    showModal =()=> {
        this.setState({
            isModal:!this.state.isModal
        })
    }

    onRequestClose() {
        this.setState({
            isModal:false
        });
    }

    render() {
        return (
          <View>
             {/* <Modal
                  style={{}}
                  animationType='none'           // 从底部滑入
                  transparent={true}             // 不透明
                  visible={this.state.isModal}    // 根据isModal决定是否显示
                  onRequestClose={() => {this.onRequestClose()}}  // android必须实现
              >
                  <TouchableOpacity style={{marginTop:50,backgroundColor:'rgba(0,0,0,0.1)',flex:1}} onPress={()=>{
                      this.onRequestClose();
                  }}>

                  </TouchableOpacity>
              </Modal>*/}
              {
                  this.state.isModal&&
                  <TouchableOpacity style={{position:'absolute',width:scree.width,height:scree.height,backgroundColor:'rgba(0,0,0,0.8)',}}
                    onPress={()=>{
                        this.onRequestClose( )
                    }}>
                      <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                          <View style={{width:100,marginRight:10,marginTop:10,
                              backgroundColor:'rgba(43,51,59,0.6)',borderRadius:5,paddingHorizontal:10,paddingVertical:20}}>
                              <View style={{flexDirection:'row',alignItems:'center'}}>
                                  <FontAwesome name="download" size={20} color="#fff"/>
                                  <Text style={{marginLeft:5,color:'#fff',fontSize:12}}>全部开始</Text>
                              </View>
                              <View style={{flexDirection:'row',alignItems:'center',marginTop:15,}}>
                                  <FontAwesome name="pause" size={20} color="#fff"/>
                                  <Text style={{marginLeft:5,color:'#fff',fontSize:12}}>全部暂停</Text>
                              </View>
                              <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                                  <FontAwesome name="trash" size={20} color="#fff"/>
                                  <Text style={{marginLeft:5,color:'#fff',fontSize:12}}>删除</Text>
                              </View>
                          </View>
                      </View>
                  </TouchableOpacity>
              }

          </View>
        )
    }

}


const styles = StyleSheet.create({

})