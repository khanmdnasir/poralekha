import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image, SafeAreaView} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const image = require("../components/images/background-overlay.png");

export default function PhoneVerification({ navigation }) {
    
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bimage}>
            
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
                    Phone Verification
                </Text>   
            <Text style={styles.text1}>A verification code is sent to your</Text>
                <View style={{flexDirection: 'row',justifyContent: 'center'}}>                
                <Text style={styles.text2}>number provided</Text>
                <Text style={{color: '#FFFFFF',fontWeight: '600',justifyContent: 'center'}}> +880-1627897267</Text>                              
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
                    onPress={()=>{navigation.push('PhoneVerificationSuccess')}}
                    
                >
                    <Text style={{color: '#111111'}}>Verify</Text>
                </TouchableOpacity> 
                <View style={{marginTop: 20,marginLeft: 25,flexDirection: 'row'}}>
                <Text style={{color: '#FFFFFF'}}>Resend Code</Text> 
                <Text style={{color: '#FFFFFF',marginLeft: 225}}>0.40</Text>       
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
        flex:1,
        
        
        
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
      
      
      
    
      
      button: {
        
            
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 7,
            backgroundColor: '#FFFFFF',
            
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