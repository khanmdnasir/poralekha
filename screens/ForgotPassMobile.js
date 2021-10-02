import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image, SafeAreaView} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const image = require("../components/images/background-overlay.png");

export default function ForgotPassMobile({ navigation }) {
    
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bimage}>
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>{navigation.goBack()}}
                >
                    <Image
                        source={require('../components/images/Vector.png')}
                        
                        
                    />
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    Forgot Password
                </Text>
            </View>          
            <View style={styles.signInForm}>
                
                
                <Text style={styles.text1}>Enter the 4-digit code we have sent in your</Text>
                <View style={{flexDirection: 'row',justifyContent: 'center'}}>                
                <Text style={styles.text2}>number</Text>
                <Text style={{color: '#380E86',justifyContent: 'center'}}> 01627897267</Text>                              
                </View>
                <OTPInputView
                    pinCount={4}
                    style={styles.otpView}
                    codeInputFieldStyle={{color: '#111111'}}
                    onCodeFilled={value => {
                    console.log(value);
                    }}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('ForgotPassMobileSuccess')}}
                    
                >
                    <Text style={{color: '#FFFFFF'}}>Verify</Text>
                </TouchableOpacity> 
                <View style={{marginTop: 20,marginLeft: 25,flexDirection: 'row'}}>
                <Text style={{color: '#380E86'}}>Resend Code</Text> 
                <Text style={{color: '#7C7C7C',marginLeft: 225}}>0.40</Text> 
                </View> 
                            
                
                
                
                
            </View>                
            </ImageBackground> 
        </SafeAreaView>
        
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        
        
      },
      bimage: {
        flex: 1,
        
        
        
      },
      text: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 30,
        fontWeight: "normal",
        marginLeft: 20,
        marginTop: 20,
       
        
      },
      text1: {
        color: '#7C7C7C',
        alignSelf: 'center',
        marginTop: 40
      },
      text2: {
        color: '#7C7C7C',
        alignSelf: 'center',
      },
      
      
      textinput: {
        height: 30,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30,
       

        
        padding: 10,
      },
    
      signInForm: {
          flex: 4,
          backgroundColor: '#FFFFFF',
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          
          

          
          

      },
      button: {
        
            
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 7,
            backgroundColor: '#380E86',
            
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            
    
          },
          otpView: {
            width: '80%',
            height: 200,
            color: 'black',
            alignSelf: 'center'
          },
          
      
      
     
});