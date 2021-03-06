/**
 * Created by zhanwenwei on 2017/9/6.
 */
import React from 'react'
import {StyleSheet,Dimensions,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var {width,height} = Dimensions.get('window');
import Screen from "../../../utils/screen"

export default class ListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {icon,rightIcon,subName,title,extra,showBottomBorder,callback} = this.props;

       /* let rs = null;
        if(extra){
            if(typeof (extra) == 'string'){
                rs = <Text>{extra}</Text>
            }else{
                rs = extra
            }
        }else{
            rs = <FontAwesome name="angle-right" color="#999" size={14}/>
        }*/

        return(
            <TouchableOpacity style={styles.listItemWrap} onPress={()=>{
                if(callback)
                    callback(subName)
            }}>
                {
                    icon&&
                    <View style={styles.iconWrap}>
                        {icon}
                    </View>
                }
                <View style={[styles.contentWrap,showBottomBorder&&styles.contentBorder]}>
                    <Text style={styles.itemText}>{title}</Text>
                    <View style={{flex:1}}></View>
                    {
                        subName&&<Text style={{fontSize:12,marginRight:8}}>{subName}</Text>
                    }
                    {
                       /* rightIcon&&<View>
                            {rightIcon}
                        </View>*/
                    }

                    {
                        !extra?<FontAwesome name="angle-right" color="#999" size={14}/>:
                            typeof(extra) == 'object'?extra: <Text>{extra}</Text>
                    }
                </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    listItemWrap:{
        width:Screen.width,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    iconWrap:{
        width:30,
        justifyContent:"center",
        alignItems:"center",
    },
    contentWrap:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:16,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center"
    },
    contentBorder:{
        borderBottomWidth:Screen.onePixel,
        borderBottomColor:'#ccc'
    },
    itemText:{
        fontSize:12,
    },
    arrowWrap:{
        width:20,
    }
})