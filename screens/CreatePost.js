import React,{Component} from 'react';
import{
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions,
} from 'react-native';

export default class CreatePost extends Component{
    render(){
        return(
            <View 
            style=
            {{
              flex:1, 
              justifyContent:"center", 
              alignItems:"center"}}>
                <Text>Create Post</Text>
            </View>
        )
    }
}
    