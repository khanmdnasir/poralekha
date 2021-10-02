import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-paper';
const image = require("../components/images/background-overlay.png");

export default function ForgotPassMobileSuccess({ navigation }) {
    const [code, onChangeCode] = React.useState();
    
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
                <Image
                    source={require('../components/images/ForgotPassSuccess.png')}
                    style={{alignSelf: 'center',marginTop: 80,marginBottom: 15}}
                />
                <Text style={styles.text}>Success</Text>
                <Text style={styles.text1}>Your Phone has been verified</Text>
                           
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('CreateNewPass')}}
                >
                    <Text style={{color: '#FFFFFF'}}>Set your new password</Text>
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
        alignSelf: 'center',
        color: '#380E86',
        fontSize: 24
       
        
      },
      text1: {
        color: '#7C7C7C',
        alignSelf: 'center'
      },
      
      
      
    
      signInForm: {
          flex: 4,
          backgroundColor: '#FFFFFF',
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          
          

          
          

      },
      button: {
        
            marginTop: 25,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 7,
            backgroundColor: '#380E86',
            
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            
    
          },
      
      
     
});