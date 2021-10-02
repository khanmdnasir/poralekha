import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image, SafeAreaView} from 'react-native';

const image = require("../components/images/background-overlay.png");

export default function PhoneVerificationSuccess({ navigation }) {
    const [code, onChangeCode] = React.useState();
    
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
                
                
                <Image
                    source={require('../components/images/PhoneVerify.png')}
                    style={{alignSelf: 'center',marginTop: 80}}
                />
                <Text style={styles.text}>Congratulations</Text>
                <Text style={styles.text1}>Your phone number is Verified</Text>
                           
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('UploadProfile')}}
                >
                    <Text style={{color: '#111111'}}>Let's Go</Text>
                </TouchableOpacity>
                        
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
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginTop: 20,
        lineHeight: 29
       
        
      },
      text1: {
        color: '#FFFFFF',
        alignSelf: 'center'
      },
      
      
      
    
      
      button: {
        
            marginTop: 200,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 7,
            backgroundColor: '#FFFFFF',
            
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            
    
          },
      
      
     
});