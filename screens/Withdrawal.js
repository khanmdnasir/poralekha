import React,{useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native'
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function WithDrawal({ navigation }) {
    
   const [amount,onChangeAmount]=useState();
    
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
                    WithDrawal
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',padding:25}}>
               <Text style={{alignSelf:'center',color:'#B5B4BB',fontSize:12,marginBottom:5}}>Total Balance</Text>
               <Text style={{alignSelf:'center',color:'#380E86',fontSize:22}}>1000.00 BDT</Text>
               <Text style={{fontWeight:'100',fontSize:12,marginBottom:5,marginTop:80}}>Enter withdrawal amount</Text>
               <TextInput
                onChangeText={onChangeAmount}
                value={amount}
                placeholder="Enter Amount"
                style={styles.textinput}
                mode='outlined'
                />
                 <View style={{flexDirection:'row',marginTop:30,marginBottom:20}}>
                      <View>
                          <Text style={{color:'#380E86',fontSize:16}}>Withdrawal methods</Text>
                          <Text style={{fontSize:12,marginBottom:5,color:'#7C7C7C'}}>Available methods</Text>
                      </View>
                      <TouchableOpacity style={{marginLeft:150,borderRadius:180,justifyContent:'center',alignItems:'center',height:34,width:34,backgroundColor:'#380E86'}}>
                          <Icon name="plus" color="#FFFFFF"/>
                      </TouchableOpacity>
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
      textinput: {
          height:45,
          

      }
      
      
     
    
});