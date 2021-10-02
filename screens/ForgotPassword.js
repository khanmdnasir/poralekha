import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-paper';
const image = require("../components/images/background-overlay.png");

export default function ForgotPassword({ navigation }) {
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
                    source={require('../components/images/textIcon.png')}
                    style={{alignSelf: 'center',marginTop: 20,marginBottom: 15}}
                />
                
                <Text style={styles.text1}>We have sent a verification code to your</Text>
                <View style={{flexDirection: 'row',justifyContent: 'center'}}>                
                <Text style={styles.text1}>registered email </Text>
                <Text style={{color: '#380E86',justifyContent: 'center'}}>“shamitra@gmail.com”</Text>                
                <Text style={styles.text1}>. Kindly</Text>                
                </View>
                <Text style={styles.text1}>type the code we’ve sent.</Text>
                
                
                
                <TextInput
                onChangeText={onChangeCode}
                value={code}
                placeholder="Enter The Code"
                style={styles.textinput}
                />
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('ForgotPassSuccess')}}
                >
                    <Text style={{color: '#FFFFFF'}}>Verify</Text>
                </TouchableOpacity>  
                <Text style={{color: '#7C7C7C', alignSelf: 'center',marginTop: 100,fontSize: 18}}>Having trouble with email?</Text>              
                <Text style={{color: '#380E86', alignSelf: 'center'}}>No worries</Text>              
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('ForgotPassMobile')}}
                >
                    <Text style={{color: '#FFFFFF'}}>Find a different way</Text>
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
      text1: {
        color: '#7C7C7C',
        alignSelf: 'center'
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