import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView } from 'react-native'
import { Rating } from 'react-native-ratings';

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
  ];


export default function FindCourseScreen({ navigation }) {
    const buttons=['New Arrival','Most Popular','Top Rated']
    const [clicked,setClicked]=React.useState(0)
    const handleClick= (item,id) => {
        setClicked(id);
    }
    
    
   
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
                    Courses
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',paddingLeft:30,paddingRight:30,paddingTop:10}}>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'#000000',fontSize:16}}>There are 400+ Courses</Text>
                    <TouchableOpacity style={{marginTop:10,marginLeft:150}}>
                        <Image source={require('../components/images/filter1.png')} style={{height:18,width:18}}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection:'row',marginTop:20,alignSelf:'center'}}>
                    {buttons.map((buttonLabel,index)=>{
                        return (
                            <TouchableOpacity 
                            onPress={(item)=>handleClick(item,index)}
                            key={index}
                            style={[index === clicked?styles.buttonActive:styles.button,index===0?{marginRight:10}:"",index===1?{marginRight:10}:""]}>
                                <Text style={index === clicked?styles.text1Active:styles.text1}>{buttonLabel}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {0===clicked?
                
                
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15}}>
                {DATA.map((index)=>{
                    return(
                        <View style={{flexDirection:'row',marginBottom:15,alignSelf:'center'}}>

                        <View style={{height:130,width:147,borderRadius:10,marginRight:15}}>
                            <ImageBackground source={{uri:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'}} style={{flex:2}} imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                
                            </ImageBackground>
                            <View style={{flex:1,backgroundColor:'#FFFFFF',padding:7,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:9}}>A clockwork</Text>
                                    <Text style={{color:'#7C7C7C',fontSize:10,marginLeft:50}}>Tk 220</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:6}}>
                                    <Text style={{fontSize:9}}>Electric sleep</Text>
                                    <Rating
                                    type='star' 
                                                        
                                    ratingCount={5}
                                    startingValue={3}
                                    readonly={true}
                                    imageSize={8}
                                    tintColor='#FFFFFF'
                                    
                                    style={{marginLeft:18,marginTop:5}}
                                    
                                    // onFinishRating={this.ratingCompleted}
                                    
                                    />
                                    <Text style={{color:'#7C7C7C',fontSize:10}}>(50)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{height:130,width:147,borderRadius:10}}>
                            <ImageBackground source={{uri:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'}} style={{flex:2}} imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                
                            </ImageBackground>
                            <View style={{flex:1,backgroundColor:'#FFFFFF',padding:7,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:9}}>A clockwork</Text>
                                    <Text style={{color:'#7C7C7C',fontSize:10,marginLeft:50}}>Tk 220</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:6}}>
                                    <Text style={{fontSize:9}}>Electric sleep</Text>
                                    <Rating
                                    type='star'                        
                                    ratingCount={5}
                                    startingValue={3}
                                    readonly={true}
                                    imageSize={12}
                                    tintColor='#FFFFFF'
                                    
                                    ratingBackgroundColor='#FFFFFF'
                                    // onFinishRating={this.ratingCompleted}
                                    
                                    />
                                    <Text style={{color:'#7C7C7C',fontSize:10}}>(50)</Text>
                                </View>
                            </View>
                        </View>
                        </View>
                    )
                })}  
                </ScrollView>
               :
               
                <View></View>}
                {1===clicked?
                
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15}}>
                {DATA.map((index)=>{
                    return(
                        <View style={{flexDirection:'row',marginBottom:15,alignSelf:'center'}}>

                        <View style={{height:130,width:147,borderRadius:10,marginRight:15}}>
                            <ImageBackground source={{uri:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'}} style={{flex:2}} imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                
                            </ImageBackground>
                            <View style={{flex:1,backgroundColor:'#FFFFFF',padding:7,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:9}}>A clockwork</Text>
                                    <Text style={{color:'#7C7C7C',fontSize:10,marginLeft:50}}>Tk 220</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:6}}>
                                    <Text style={{fontSize:9}}>Electric sleep</Text>
                                    <Rating
                                    type='star'                        
                                    ratingCount={5}
                                    startingValue={3}
                                    readonly={true}
                                    imageSize={12}
                                    tintColor='#FFFFFF'
                                    
                                    ratingBackgroundColor='#FFFFFF'
                                    // onFinishRating={this.ratingCompleted}
                                    
                                    />
                                    <Text style={{color:'#7C7C7C',fontSize:10}}>(50)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{height:130,width:147,borderRadius:10}}>
                            <ImageBackground source={{uri:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'}} style={{flex:2}} imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                
                            </ImageBackground>
                            <View style={{flex:1,backgroundColor:'#FFFFFF',padding:7,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:9}}>A clockwork</Text>
                                    <Text style={{color:'#7C7C7C',fontSize:10,marginLeft:50}}>Tk 220</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:6}}>
                                    <Text style={{fontSize:9}}>Electric sleep</Text>
                                    <Rating
                                    type='star'                        
                                    ratingCount={5}
                                    startingValue={3}
                                    readonly={true}
                                    imageSize={12}
                                    tintColor='#FFFFFF'
                                    
                                    ratingBackgroundColor='#FFFFFF'
                                    // onFinishRating={this.ratingCompleted}
                                    
                                    />
                                    <Text style={{color:'#7C7C7C',fontSize:10}}>(50)</Text>
                                </View>
                            </View>
                        </View>
                        </View>
                    )
                })}  
                </ScrollView>
                    
                    
                :<View></View>}
                {2===clicked?
                
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15}}>
                {DATA.map((index)=>{
                    return(
                        <View style={{flexDirection:'row',marginBottom:15,alignSelf:'center'}}>

                        <View style={{height:130,width:147,borderRadius:10,marginRight:15}}>
                            <ImageBackground source={{uri:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'}} style={{flex:2}} imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                
                            </ImageBackground>
                            <View style={{flex:1,backgroundColor:'#FFFFFF',padding:7,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:9}}>A clockwork</Text>
                                    <Text style={{color:'#7C7C7C',fontSize:10,marginLeft:50}}>Tk 220</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:6}}>
                                    <Text style={{fontSize:9}}>Electric sleep</Text>
                                    <Rating
                                    type='star'                        
                                    ratingCount={5}
                                    startingValue={3}
                                    readonly={true}
                                    imageSize={12}
                                    tintColor='#FFFFFF'
                                    
                                    ratingBackgroundColor='#FFFFFF'
                                    // onFinishRating={this.ratingCompleted}
                                    
                                    />
                                    <Text style={{color:'#7C7C7C',fontSize:10}}>(50)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{height:130,width:147,borderRadius:10}}>
                            <ImageBackground source={{uri:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'}} style={{flex:2}} imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}>
                                
                            </ImageBackground>
                            <View style={{flex:1,backgroundColor:'#FFFFFF',padding:7,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:9}}>A clockwork</Text>
                                    <Text style={{color:'#7C7C7C',fontSize:10,marginLeft:50}}>Tk 220</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:6}}>
                                    <Text style={{fontSize:9}}>Electric sleep</Text>
                                    <Rating
                                    type='star'                        
                                    ratingCount={5}
                                    startingValue={3}
                                    readonly={true}
                                    imageSize={12}
                                    tintColor='#FFFFFF'
                                    
                                    ratingBackgroundColor='#FFFFFF'
                                    // onFinishRating={this.ratingCompleted}
                                    
                                    />
                                    <Text style={{color:'#7C7C7C',fontSize:10}}>(50)</Text>
                                </View>
                            </View>
                        </View>
                        </View>
                    )
                })}  
                </ScrollView>
                    
                   
                :<View></View>}
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
      button: {
        height: 40,
        width:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF4F6',
        
        borderRadius:7
        
    },
    buttonActive: {
      height: 40,
      width:100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#380E86',
      
      borderRadius:7
      
      },
    text1: {
        fontSize: 12,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Montserrat',
        fontStyle: 'normal'
    },
    text1Active: {
      fontSize: 12,
      lineHeight: 20,
      fontWeight: '500',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      color: '#FFFFFF'
  },
      
      
});