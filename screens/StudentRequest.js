import React,{useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native'


export default function StudentRequest({ navigation }) {
    
   
    
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
                    Student Request
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',padding:25}}>
                <Text style={{color:'#380E86',fontSize:14}}>5 Students are requesting you</Text>
                <Text style={{color:'#7C7C7C',fontSize:10,marginTop:20,marginBottom:10}}>15 Jul 2021</Text>
                <View style={{flexDirection:'row',borderRadius:7,padding:10,backgroundColor:'#FFFFFF'
                }}>
                    <Image source={{uri:'https://5thvoice.news/kkg_admin/images/categoryimages/1602262676new_teacher.jpeg'}}
                     style={{borderRadius:7,height:40,width:40}}/>
                    <View style={{marginLeft:10,marginTop:5}}>
                        <Text style={{color:'#380E86',fontSize:10}}>Irin Islam</Text>
                        <Text style={{color:'#B5B4BB',fontSize:8,marginTop:5}}>Class 10 PHY 02 CH 5-10</Text>
                    </View>
                    <TouchableOpacity style={{marginLeft:80,marginTop:15,backgroundColor:'#66C6B9',height:28,width:55,borderRadius:7,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#FFFFFF',fontSize:10}}>Approved</Text>
                    </TouchableOpacity>
                    <View style={{marginLeft:5}}>
                        <Text style={{color:'#B5B4BB',fontSize:8,marginBottom:5}}>08:50 am</Text>
                        <TouchableOpacity style={{backgroundColor:'#FF6C5F',height:28,width:46,borderRadius:7,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#FFFFFF',fontSize:10}}>Reject</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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