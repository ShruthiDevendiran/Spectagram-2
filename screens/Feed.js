import React,{Component} from 'react';
import{
    Text,
    View,
    Button,
    Image,
    ImageBackground,
    StatusBar,
    Dimensions,
    SafeAreaView,
    Platform
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Feed extends Component{

renderItem =({item:post})=>{
  return(
    <PostCard post={post}/>
  )
}

 keyExtractor = (item,index)=>{index.toString()}

    render(){
        return(
           <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image source={require("../assets/assets/logo.png")}
                  style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Spectagram</Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <Flatlist
                 data = {posts}
                 keyExtractor ={this.keyExtractor}
                 renderItem={this.renderItem}
                />
              </View>
           </View>
        )
    } 
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    },
    droidSafeArea:{
      marginTop: Platform.OS === "android"? StatusBar.currentHeight:RFValue(30)
    },
    appTitle:{
      flex:0.08,
      flexDirection: "row",
    },
   appIcon:{
      flex:0.2,
      justifyContent:"center",
      alignItems:"center",
   },
   iconImage:{
     width:"100%",
     height:"100%",
     resizeMode:"contain",
   },
   appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center",
   },
   appTitleText:{
    color:"white",
    fontSize:RFValue(30),
   },
   cardContainer:{
    flex:0.85,
   },
})