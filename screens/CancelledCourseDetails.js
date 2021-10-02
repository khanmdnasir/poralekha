import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet, FlatList, ScrollView,Alert} from 'react-native'
import { Paragraph } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';




export default function CancelledCourseDetails({ navigation }) {
    
   

  
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>navigation.goBack()}
                >
                    <Image source={require('../components/images/Vector.png')} style={{height:20,width:20}}/>
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    Change Teacher
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:5,backgroundColor:'#EEF4F6',padding:30}}>
                <View style={{flexDirection:'row',marginBottom:10}}>
                    <Text style={{color:'#4A4A4A',fontSize:12}}>Physics</Text>
                    <Text style={{color:'#4A4A4A',fontSize:12,marginLeft:235}}>1:30:00 hr</Text>
                </View>
                <Text style={{color:'#380E86',fontSize:16,marginBottom:20}}>Motion in a Straight Line</Text>
                <Text style={{color:'#5E5656',fontSize:12,marginBottom:10}}>Course Overview</Text>
                <Paragraph style={{color:'#53676D',fontSize:12,marginBottom:20}}>
                One of the most remarkable simplifications in physics is that only four distinct forces account for all known phenomena. In fact, nearly all of the forces we experience directly are due to only one basic force, called the electromagnetic force. (The gravitational force is the only force we experience directly that is not electromagnetic.)

                </Paragraph>
                <Text style={{color:'#380E86',fontSize:10,marginBottom:10}}>Responsible Teacher</Text>

            <View style={{backgroundColor:'#FFFFFF',borderRadius:7,height:52,flexDirection:'row',marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                <View>
                    <Text style={{color:'#380E86',fontSize:10}}>Motion in a Straight Line</Text>
                    <Text style={{color:'#7C7C7C',fontSize:8}}>13 Aug, 2020</Text>
                    <Text style={{color:'#7C7C7C',fontSize:8}}>Students 72</Text>
                </View>
                
                
                <View style={{marginLeft:100}}>
                        
                        
                        <TouchableOpacity style={{height:30,width:84,borderRadius:7,backgroundColor:'#EEF4F6',justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.push('CancelledCourseDetails')}>
                            <Text style={{color:'#380E86',fontSize:10}}>View Details</Text>
                        </TouchableOpacity>
                        
                        
                </View>
            </View>
                
               <Text style={{color:'#380E86',fontSize:12,marginBottom:10}}>Reason of Cancellation</Text>
               <Text style={{color:'#7C7C7C',fontSize:10}}>Timing Problem</Text>
                
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
          width:58,
          height:58,
          borderRadius:10,
          
      },
      title: {
          color: '#380E86',
          fontSize:12,
          marginBottom:5
      },
      designation: {
          color: '#7C7C7C',
          fontSize:10,
          marginBottom:5
      },
      
  searchBar: {
        
    marginBottom:10,
    borderRadius: 10
},
});