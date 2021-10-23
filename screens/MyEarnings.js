import React,{useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function MyEarnings({ navigation }) {
   
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flex:1}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>navigation.openDrawer()}
                >
                    <Image source={require('../components/images/drawerWhite.png')} />
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    My Earnings
                </Text>
            </View> 
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:50}}>
                <View>
                    <Text style={{color:'#B5B4BB',fontSize:12}}>Total Balance</Text>
                    <Text style={{color:'#FFFFFF',fontSize:22}}>1000.00 BDT</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.push('WithDrawal')} style={{padding:10,backgroundColor:'#8A4AFF',marginLeft:100,borderRadius:7,height:35,width:77,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:12}}>Withdraw</Text>
                </TouchableOpacity>
            </View>
            </View>
                
            <View style={{flex:3,backgroundColor:'#EEF4F6',borderTopStartRadius:30,borderTopEndRadius:30,padding:30,marginTop:20}}>
               
                  <View style={{flexDirection:'row'}}>
                      <View style={{height:149,flex:1,backgroundColor:'#FFFFFF',padding:10}}>
                            <Text style={{color:'#380E86',fontSize:12,marginBottom:15,fontWeight:'500'}}>Live Classes</Text>
                            <Text style={{fontSize:12,marginBottom:5,color:'#7C7C7C'}}>Earnings</Text>
                            <Text style={{color:'#380E86',fontSize:14,marginBottom:15}}>BDT 550.00</Text>
                            <Text style={{fontSize:12,marginBottom:5,color:'#7C7C7C'}}>Available</Text>
                            <Text style={{color:'#380E86',fontSize:14,marginBottom:15}}>BDT 500.00</Text>
                      </View>
                      <View style={{height:149,flex:1,backgroundColor:'#FFFFFF',padding:10,marginLeft:15}}>
                            <Text style={{color:'#380E86',fontSize:12,marginBottom:15,fontWeight:'500'}}>Enrolled Courses</Text>
                            <Text style={{fontSize:12,marginBottom:5,color:'#7C7C7C'}}>Earnings</Text>
                            <Text style={{color:'#380E86',fontSize:14,marginBottom:15}}>BDT 550.00</Text>
                            <Text style={{fontSize:12,marginBottom:5,color:'#7C7C7C'}}>Available</Text>
                            <Text style={{color:'#380E86',fontSize:14,marginBottom:15}}>BDT 500.00</Text>
                      </View>
                  </View>
                  <View style={{flexDirection:'row',marginTop:30}}>
                      <View>
                          <Text style={{color:'#380E86',fontSize:16}}>Withdrawal methods</Text>
                          <Text style={{fontSize:12,marginBottom:5,color:'#7C7C7C'}}>Available methods</Text>
                      </View>
                      <TouchableOpacity style={{marginLeft:150,borderRadius:180,justifyContent:'center',alignItems:'center',height:34,width:34,backgroundColor:'#380E86'}}>
                          <Icon name="plus" color="#FFFFFF"/>
                      </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:'row',marginTop:20,marginBottom:10}}>
                      <Text style={{color:'#380E86',fontSize:10,marginRight:220}}>Methods</Text>
                      <Text style={{color:'#380E86',fontSize:10}}>Make Primary</Text>
                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity style={{marginBottom:10,borderRadius:7,flexDirection:'row',backgroundColor:'#FFFFFF',padding:10}}>
                            
                            <Image source={{uri:'https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png'}} style={{width:47,height:35,borderRadius:7}}/>
                            <View style={{marginLeft:10,marginRight:185}}>
                                <Text style={{color:'#380E86',fontSize:12}}>Brac Bank</Text>
                                <Text style={{color:'#B5B4BB',fontSize:8}}>435******79</Text>
                            </View>
                            <View style={{borderRadius:180,height:13,width:13,borderWidth:3,borderColor:'#380E86',marginTop:10}}>

                            </View>
                        </TouchableOpacity>
                  </ScrollView>
                
            </View>
            </ImageBackground>

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
      
    });