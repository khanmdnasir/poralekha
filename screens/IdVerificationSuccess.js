import React,{useState} from 'react';
import { View,Text, StyleSheet, TouchableOpacity,Image, SafeAreaView,ImageBackground} from 'react-native';

const image = require("../components/images/background-overlay.png");

export default function IdVerificationSuccess({ navigation }) {
    
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
                    ID Verification
                </Text>
                
                
                

            </View>          
            <View style={styles.signInForm}>
                <View style={{backgroundColor: '#EEF4F6',borderRadius: 150,width: 100,height: 100,justifyContent: 'center',alignItems: 'center',alignSelf:'center',marginTop: 120}}>
                    <Image source={require('../components/images/IdVerificationSuccess.png')}/>
                    
                </View>
                <Text style={{alignSelf: 'center',color: '#380E86',marginTop: 20,fontSize: 22}}>Verification Successfull</Text>
                
                
                
                
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('TermsConditions')}}
                >
                    <Text style={{color: '#FFFFFF'}}>Let's Go</Text>
                </TouchableOpacity>  
                            
                
                
                
                
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
    
      signInForm: {
          flex: 5,
          backgroundColor: '#FFFFFF',
          
          
          

          
          

      },
      button: {
        
            marginTop: 250,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 7,
            backgroundColor: '#380E86',
            
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            
    
          },
      
      
      
     
});