import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet, FlatList, ScrollView,Alert} from 'react-native'
import { Paragraph } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';

const DATA = [
    {
      id: 1,
      title: 'First Item',
      
    },
    {
      id: 2,
      title: 'Second Item',
      
    },
    {
      id: 3,
      title: 'Third Item',
      
    },
    {
        id: 4,
        title: 'fourth Item',
        
      },
  ];
export default function TeacherDetails({ navigation }) {
    const buttons=['Mathematics','Physics','Chemistry','Biology','Bangla','English']
    const [clicked,setClicked]=React.useState(0)
    const handleClick= (item,id) => {
        setClicked(id);
    }

   
    return (
        
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flex:2,padding:30}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{}}
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
            <View style={{flexDirection:'row',marginTop:20,justifyContent:'center'}}>
                <View>
                <Image source={{uri:'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.pimage}/>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginLeft:20,marginTop:3,marginBottom:3}}>Reviews</Text>
                    <Rating
                    type='star'                        
                    ratingCount={5}
                    readonly={true}
                    imageSize={8}
                    
                    // onFinishRating={this.ratingCompleted}
                    
                    />
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{color:'#FFFFFF',fontWeight:'700',fontSize:14,marginBottom:5}}>Md. Nasir Uddin</Text>
                    <Text style={{color:'#FFFFFF',fontWeight:'normal',fontSize:12,marginBottom:5}}>Physics, Brac University</Text>
                    <Text style={{color:'#FFFFFF',fontWeight:'normal',fontSize:10,marginBottom:5}}>Dhaka, Bnagladesh</Text>
                    <TouchableOpacity style={styles.messagebutton}>
                        <Text style={{color:'#FFFFFF',fontSize:14}}>Message</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            
            <View style={{flex:6,backgroundColor:'#EEF4F6',paddingLeft:30,paddingRight:30,borderTopStartRadius:30,borderTopEndRadius:30}}>
                <Text style={{color:'#380E86',fontSize:12,marginBottom:5,marginTop:10}}>About</Text>
                <Paragraph style={{color:'#6F6A8A',fontSize:12}}>
                On the other hand, we denounce with righteous  and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will
                </Paragraph>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{color:'#380E86',fontSize:10}}>Email</Text>
                    <Text style={{color:'#7C7C7C',fontSize:10,marginLeft:180}}>nasirkhan97.bd@gmail.com</Text>
                </View>
                <Text style={{color:'#380E86',fontSize:10,marginTop:15}}>Expertise</Text>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <View style={{backgroundColor:'#FFFFFF',borderRadius:7,justifyContent:'center',alignItems:'center',height:22,width:50,marginRight:5}}><Text style={{color:'#B5B4BB',fontSize:10}}>Physics</Text>
                    </View>
                    <View style={{backgroundColor:'#FFFFFF',borderRadius:7,justifyContent:'center',alignItems:'center',height:22,width:50,marginRight:5}}><Text style={{color:'#B5B4BB',fontSize:10}}>Math</Text>
                    </View>
                    <View style={{backgroundColor:'#FFFFFF',borderRadius:7,justifyContent:'center',alignItems:'center',height:22,width:50,marginRight:5}}><Text style={{color:'#B5B4BB',fontSize:10}}>Biology</Text>
                    </View>
                    
                </View>
                <Text style={{color:'#380E86',fontSize:10,marginTop:15}}>Uploaded Courses</Text>
                
                <ScrollView horizontal={true} style={{flexDirection:'row',marginBottom:10,marginTop:5}} showsHorizontalScrollIndicator={false}>
                {buttons.map((buttonLabel,index)=>{
                    return (
                        <TouchableOpacity 
                        onPress={(item)=>handleClick(item,index)}
                        key={index}
                        style={[index === clicked?styles.buttonActive:styles.button,index === 0?{borderTopStartRadius:7,borderBottomStartRadius:7}:""]}>
                            <Text style={index === clicked?styles.text1Active:styles.text1}>{buttonLabel}</Text>
                        </TouchableOpacity>
                    )
                })}               

                </ScrollView>
                <ScrollView showsVerticalScrollIndicator={false} >
                {DATA.map((index)=>{
                    return(
                        <View style={{backgroundColor:'#FFFFFF',borderRadius:7,height:52,flexDirection:'row',marginBottom:2,justifyContent:'center',alignItems:'center'}}>
                            <View>
                                <Text style={{color:'#380E86',fontSize:10}}>Motion in a Straight Line</Text>
                                <Text style={{color:'#7C7C7C',fontSize:8}}>13 Aug, 2020</Text>
                                <Text style={{color:'#7C7C7C',fontSize:8}}>Students 72</Text>
                            </View>
                            
                            
                            <View style={{marginLeft:100}}>
                                    
                                    
                                    <TouchableOpacity style={{height:30,width:84,borderRadius:7,backgroundColor:'#EEF4F6',justifyContent:'center',alignItems:'center'}} >
                                        <Text style={{color:'#380E86',fontSize:10}}>Add to Wishlist</Text>
                                    </TouchableOpacity>
                                    
                                    
                            </View>
                        </View>
                    )
                })}  
                </ScrollView>
                
             </View> 
                
                
             </ImageBackground>
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
        marginLeft:15
       
        
      },
      
      pimage: {
          width:80,
          height:80,
          borderRadius:180,
          
      },
      messagebutton: {
          height:35,
          width:100,
          borderRadius:7,
          backgroundColor:'#8A4AFF',
          justifyContent:'center',
          alignItems:'center',
          marginTop:20
      },
      button: {
        height: 35,
        width: 61,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFFFF'
        
    },
    buttonActive: {
      height: 35,
      width: 61,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#380E86'
      
      },
    text1: {
        fontSize: 10,
        lineHeight: 12,
        fontWeight: '500',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        color:'#7C7C7C'
    },
    text1Active: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: '500',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      color: '#FFFFFF'
  },
      
 
});