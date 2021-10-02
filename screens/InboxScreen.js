import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native'
import { Paragraph } from 'react-native-paper';




export default function InboxScreen({ navigation }) {
    
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>navigation.openDrawer()}
                >
                    <Image source={require('../components/images/drawerWhite.png')} style={{height:20,width:20}}/>
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    Messages
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',padding:30}}>
               <Image source={require('../components/images/inbox.png')} style={{alignSelf:'center',marginTop:50}}/>
               <Text style={{color:'#380E86',fontSize:18,alignSelf:'center',marginTop:20}}>No Messages yet</Text>
               <Text style={{color:'#7C7C7C',fontSize:14,marginTop:10,alignSelf:'center'}}>Lets explore more content around you.</Text>
               <TouchableOpacity style={{height:45,borderRadius:10,backgroundColor:'#380E86',marginTop:40,justifyContent:'center',alignItems:'center'}}>
                   <Text style={{color:'#FFFFFF',fontSize:14}}>Back to Home</Text>
               </TouchableOpacity>
                
                
                
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 25,
        fontWeight: "normal",
        marginLeft: 20,
        marginTop: 25,
       
        
      },
      pimage: {
          width:38,
          height:38,
          borderRadius:180
      },
      
      
    
});