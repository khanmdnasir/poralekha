import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet, FlatList, ScrollView,Alert} from 'react-native'
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
  ];
 

export default function MyCourses({ navigation }) {
    const buttons=['Enrolleed','Completed']
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
                    onPress={()=>navigation.openDrawer()}
                >
                    <Image source={require('../components/images/drawerWhite.png')} style={{height:20,width:20}}/>
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    My Courses
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',paddingLeft:30,paddingRight:30,paddingTop:10}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    {buttons.map((buttonLabel,index)=>{
                        return (
                            <TouchableOpacity 
                            onPress={(item)=>handleClick(item,index)}
                            key={index}
                            style={[index === clicked?styles.buttonActive:styles.button,index === 0?{borderTopStartRadius:15,borderBottomStartRadius:15}:"",index === 1?{borderTopEndRadius:15,borderBottomEndRadius:15}:""]}>
                                <Text style={index === clicked?styles.text1Active:styles.text1}>{buttonLabel}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {0===clicked?
                <View>
                <Text style={{color:'#380E86',fontSize:12,marginTop:15,marginBottom:10}}>Enrolled Courses</Text>
                {/* <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> */}
                <ScrollView showsVerticalScrollIndicator={false} >
                {DATA.map((index)=>{
                    return(
                        <TouchableOpacity style={{backgroundColor:'#FFFFFF',borderRadius:7,height:104,flexDirection:'row',marginBottom:2,padding:5}}>
                            <Image source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}} style={{height:92,width:92,borderRadius:7}}/>
                            <View style={{marginLeft:7}}>
                                <Text style={{color:'#000000',fontSize:10,marginBottom:5}}>09 Aug 21</Text>
                                <Text style={{color:'#000000',fontSize:12,marginBottom:5}}>The Complete Web Development</Text>
                                <View>
                                    <Text style={{color:'#7C7C7C',fontSize:9}}>by</Text>
                                    <Text style={{color:'#380E86',fontSize:9}}> Richard Nelson</Text>
                                </View>
                                <Rating
                                type='star'                        
                                ratingCount={5}
                                readonly={true}
                                imageSize={8}
                                
                                // onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 10 }}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                })}  
                </ScrollView>
               </View>:
               
                <View></View>}
                {1===clicked?
                <View style={{marginTop:10}}>
                   
                    <View style={{flexDirection:'row',marginBottom:10}}>
                        <Text style={{color:'#380E86',fontSize:12}}>Completed Courses</Text>
                        <Text style={{color:'#FF6C5F',fontSize:12}}> 5</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} >
                {DATA.map((index)=>{
                    return(
                        <TouchableOpacity style={{backgroundColor:'#FFFFFF',borderRadius:7,height:104,flexDirection:'row',marginBottom:2,padding:5}}>
                            <Image source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}} style={{height:92,width:92,borderRadius:7}}/>
                            <View style={{marginLeft:7}}>
                                <Text style={{color:'#000000',fontSize:10,marginBottom:5}}>09 Aug 21</Text>
                                <Text style={{color:'#000000',fontSize:12,marginBottom:5}}>The Complete Web Development</Text>
                                <View>
                                    <Text style={{color:'#7C7C7C',fontSize:9}}>by</Text>
                                    <Text style={{color:'#380E86',fontSize:9}}> Richard Nelson</Text>
                                </View>
                                <Rating
                                type='star'                        
                                ratingCount={5}
                                readonly={true}
                                imageSize={8}
                                
                                // onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 10 }}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                })}  
                </ScrollView>
                    
                    
                </View>:<View></View>}
                {2===clicked?
                <View style={{marginTop:10}}>
                     <View style={{flexDirection:'row',marginBottom:10}}>
                        <Text style={{color:'#380E86',fontSize:12}}>Cancelled Live Classes</Text>
                        <Text style={{color:'#FF6C5F',fontSize:12}}> 5</Text>
                    </View>
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
                                        <Text style={{color:'#380E86',fontSize:10}}>Retake Course</Text>
                                    </TouchableOpacity>
                                    
                                    
                            </View>
                        </View>
                    )
                })}  
                </ScrollView>
                    
                   
                </View>:<View></View>}
               
                
                
                
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
      datetime: {
          fontSize:8,
          color:'#380E86',
          marginRight:10,
          marginLeft:5
      },
      pimage: {
          width:38,
          height:38,
          borderRadius:180
      },
      title: {
          color: '#380E86',
          fontSize:10
      },
      designation: {
          color: '#380E86',
          fontSize:8
      },
      button: {
        height: 50,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
        
    },
    buttonActive: {
      height: 50,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#380E86'
      
      },
    text1: {
        fontSize: 13,
        lineHeight: 15,
        fontWeight: '500',
        fontFamily: 'Montserrat',
        fontStyle: 'normal'
    },
    text1Active: {
      fontSize: 13,
      lineHeight: 15,
      fontWeight: '500',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      color: '#FFFFFF'
  },
});


