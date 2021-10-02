import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet, FlatList} from 'react-native'
import { Paragraph } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';



export default function BooksDetails({ navigation }) {
    
    const [clicked,setClicked]=React.useState(false)
    
   
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
                    WishList
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',paddingLeft:30,paddingRight:30,paddingTop:10}}>
                
                <ImageBackground source={require('../components/images/book.jpg')} style={{height:238,width:'100%'}} imageStyle={{borderTopLeftRadius:15,borderTopRightRadius:15}}>
                    {clicked===true?
                        <TouchableOpacity style={{height:45,width:42,borderRadius:10,backgroundColor:'#FF6C5F',justifyContent:'center',alignItems:'center',marginTop:175,marginLeft:270}} onPress={()=>setClicked(false)}>
                            <Image source={require('../components/images/heart.png')}/>
                        </TouchableOpacity>:
                        <TouchableOpacity style={{height:45,width:42,borderRadius:10,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center',marginTop:175,marginLeft:270}} onPress={()=>setClicked(true)}>
                        <Image source={require('../components/images/heart1.png')}/>
                    </TouchableOpacity>
                
                    }

                </ImageBackground>
                
                <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{color:'#380E86',fontSize:20,fontWeight:'bold'}}>The Human Memory</Text>
                        <Text style={{color:'#380E86',fontSize:20,marginLeft:85}}>Tk 530</Text>
                    </View>
                    <Text style={{color:'#7C7C7C',fontSize:16,marginTop:5}}>12th Edition</Text>
                    <Rating
                    type='star'                        
                    ratingCount={5}
                    startingValue={3}
                    readonly={true}
                    imageSize={12}
                    tintColor='#EEF4F6'
                    
                    ratingBackgroundColor='#EEF4F6'
                    // onFinishRating={this.ratingCompleted}
                    style={{alignSelf:'flex-start',marginTop:5}}
                    />
                    <Text style={{color:'#000000',fontSize:16,marginTop:15}}>Description</Text>
                    <Paragraph style={{color:'#7C7C7C',fontSize:12,marginTop:10}}>The best anti-spam protection to block spam comments and spam in a contact form. The most trusted antispam solution for WordPress and WooCommerce.</Paragraph>

                    <View style={{flexDirection:'row',marginTop:10}}>
                        <View>
                            <Text style={styles.text1}>Author</Text>
                            <Text style={styles.text1}>ISBN</Text>
                            <Text style={styles.text1}>Language</Text>
                            <Text style={styles.text1}>No. of Pages</Text>
                            <Text style={styles.text1}>Country</Text>
                        </View>
                        <View style={{marginLeft:20}}>
                            <Text style={styles.text2}>James Coles</Text>
                            <Text style={styles.text2}>021547896589</Text>
                            <Text style={styles.text2}>English</Text>
                            <Text style={styles.text2}>300</Text>
                            <Text style={styles.text2}>Ukraine</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#380E86',height:45,borderRadius:7,justifyContent:'center',alignItems:'center',marginTop:15}}>
                        <Text style={{color:'#FFFFFF',fontSize:14}}>Add to Cart</Text>
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
      text1:{
        color:'#000000',
        fontSize:12,
        marginBottom:5
      },
      text2: {
          color:'#7C7C7C',
          fontSize:12,
          marginBottom:5
      }
      
      
});