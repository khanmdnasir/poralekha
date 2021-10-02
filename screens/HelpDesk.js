import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'
import { Paragraph } from 'react-native-paper';




export default function InviteFriends({ navigation }) {
    
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
                    <Image source={require('../components/images/undraw_Mobile.png')} style={{height:180,width:170}}/>
                </View>
                <View style={{flex:4,backgroundColor:'#EEF4F6',borderTopStartRadius:25,borderTopEndRadius:50,padding:30}}>
                    <Text style={{color:'#380E86',fontSize:18,alignSelf:'center',marginBottom:15}}>How can we help you?</Text>
                    <Paragraph style={{color:'#524040',fontSize:12,alignSelf:'center',marginBottom:20}}>
                    If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay
                    </Paragraph>
                    <View style={{flexDirection:'row',marginBottom:30,alignSelf:'center'}}>
                        <TouchableOpacity style={{height:85,width:85,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#FFFFFF'}}>
                            <Image source={require('../components/images/chat.png')} />
                            <Text style={{color:'#575279',fontSize:10}}>Chat to Us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:85,width:85,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:15,backgroundColor:'#FFFFFF'}}>
                            <Image source={require('../components/images/mail.png')} />
                            <Text style={{color:'#575279',fontSize:10}}>Mail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:85,width:85,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:15,backgroundColor:'#FFFFFF'}}>
                            <Image source={require('../components/images/conversation.png')} />
                            <Text style={{color:'#575279',fontSize:10}}>FAQ</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#380E86',fontSize:14,alignSelf:'center',marginBottom:15}}>Help By Category</Text>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <View style={{height:123,width:139,borderRadius:10,padding:10,backgroundColor:'#FFFFFF'}}>
                            <Text style={{color:'#380E86',fontSize:10,marginBottom:8}}>About the System</Text>
                            <TouchableOpacity style={{marginBottom:8}}>
                                <Text style={{color:'#380E86',fontSize:8}}>About Data</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginBottom:8}}>
                                <Text style={{color:'#380E86',fontSize:8}}>Interface</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginBottom:8}}>
                                <Text style={{color:'#380E86',fontSize:8}}>Settings problem</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginBottom:8}}>
                                <Text style={{color:'#380E86',fontSize:8}}>Securty</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:123,width:139,borderRadius:10,padding:10,backgroundColor:'#FFFFFF',marginLeft:20}}>
                            <Text style={{color:'#380E86',fontSize:10,marginBottom:8}}>Accounts</Text>
                            <TouchableOpacity style={{marginBottom:8}}>
                                <Text style={{color:'#380E86',fontSize:8}}>Withdrwals</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginBottom:8}}>
                                <Text style={{color:'#380E86',fontSize:8}}>Privacy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginBottom:8}}>
                                <Text style={{color:'#380E86',fontSize:8}}>Login Through Social</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginBottom:8}}>
                                <Text style={{color:'#380E86',fontSize:8}}>Recovery</Text>
                            </TouchableOpacity>
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