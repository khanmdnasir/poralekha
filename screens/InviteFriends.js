import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet, FlatList, ScrollView,Alert} from 'react-native'
import { Paragraph } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';



export default function InviteFriends({ navigation }) {
    
   

    // const renderItem = ({ item }) => (
    //     <Item title={item.title} />
    //   );
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
                    Invite Friends
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#FFFFFF'}}>
               
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../components/images/undraw_referral.png')} style={{height:180,width:170}}/>
                </View>
                <View style={{flex:4,backgroundColor:'#EEF4F6',borderTopStartRadius:25,borderTopEndRadius:50,padding:30}}>
                    <Text style={{color:'#380E86',fontSize:18,marginBottom:20,alignSelf:'center'}}>Invite Friends</Text>
                    <Paragraph style={{color:'#524040',fontSize:12,marginBottom:30}}>If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay</Paragraph>
                    <View style={{flexDirection:'row',height:45,width:228,alignSelf:'center',marginBottom:10}}>
                        <View style={{flex:1.5,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center',borderTopStartRadius:7,borderBottomStartRadius:7}}>
                            <Text style={{color:'#7394D6',fontSize:14}}>PORA4589657</Text>
                        </View>
                        <TouchableOpacity style={{flex:1,backgroundColor:'#380E86',justifyContent:'center',alignItems:'center',borderTopEndRadius:7,borderBottomEndRadius:7}}>
                            <Text style={{color:'#FFFFFF',fontSize:14}}>Copy Code</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#380E86',fontSize:14,alignSelf:'center',marginBottom:15}}>Share</Text>
                    <View style={{flexDirection:'row',alignSelf:'center',marginBottom:20}}>
                        <View style={{backgroundColor:'#FFFFFF',height:55,width:55,borderRadius:180,justifyContent:'center',alignItems:'center',marginRight:20}}>
                            <Image source={require('../components/images/facebook.png')}/>
                        </View>
                        <View style={{backgroundColor:'#FFFFFF',height:55,width:55,borderRadius:180,justifyContent:'center',alignItems:'center',marginRight:20}}>
                            <Image source={require('../components/images/whatsapp.png')}/>
                        </View>
                        <View style={{backgroundColor:'#FFFFFF',height:55,width:55,borderRadius:180,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../components/images/linkedin.png')}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                        <View style={{backgroundColor:'#FFFFFF',height:55,width:55,borderRadius:180,justifyContent:'center',alignItems:'center',marginRight:20}}>
                            <Image source={require('../components/images/messenger.png')}/>
                        </View>
                        <View style={{backgroundColor:'#FFFFFF',height:55,width:55,borderRadius:180,justifyContent:'center',alignItems:'center',marginRight:20}}>
                            <Image source={require('../components/images/gmail.png')}/>
                        </View>
                        <View style={{backgroundColor:'#FFFFFF',height:55,width:55,borderRadius:180,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../components/images/twitter.png')}/>
                        </View>
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