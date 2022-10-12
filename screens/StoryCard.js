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
import { RFValue } from 'react-native-responsive-fontsize';

export default class CreatePost extends Component{
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                  <View style={styles.authorImageContainer}>
                    <Image 
                      source={require("../assets/assets/profilr_img.png")}
                      style={styles.profileImage}
                    >
                    </Image>
                  </View>
                  <View style={styles.authorNameContainer}>
                     <Text style={styles.authorNametext}>{this.props.post.author}</Text>
                  </View>
                  <Image source={require("../assets/assets/post.jpeg")}/>
                  <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>{this.props.post.caption}</Text>
                  </View>
                  <View style={styles.actionContainer}>
                    <View style={styles.likeContainer}>
                       <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                       <Text style={styles.likeText}>12k</Text>
                    </View>
                  </View>
                 </View>
               </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
       flex:1,
       justifyContent:"center"
    },
   cardContainer:{
    flex:1,
    backgroundColor:"black"
   },
   authorContainer:{
    flex:0.07,
    fontSize:10
   },
   authorImageContainer:{
    borderWidth:5,
    borderRadius:10,
    backgroundColor:"white"
   },
   profileImage:{
    borderRadius:10,
    backgroundColor:"white"
   },
   authorNameContainer:{
     flex:1,
     justifyContent:"center",
     alignItems:"center"
   },
   authorNameText:{
    fontSize:20,
     fontWeight:25,
     color:"white"
   },
   captionContainer:{
     flex:0.05,
     alignIems:"left"
   },
   postImage:{
    flex:0.3,
    justifyContent:"center",
    borderWidth:10,
    borderRadius:5
   },
   captionText:{
    fontSize:10,
    color:"white"
   },
   actionConatiner:{
    flex:0.03,
    justifyContent:"center",
    backgroundColor:"pink",
    borderWidth:2,
    borderColor:"white",
    length:20,
    height:10
   },
   likeButton:{
    color:"white",
    fontSize:10
   },
   likeText:{
    color:"white",
    fontSize:20
   }
})
  
    