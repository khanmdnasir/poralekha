import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-paper';
const image = require("../components/images/background-overlay.png");

export default function CreateNewPass({ navigation }) {
    const [newpass, onChangeNewPass] = React.useState();
    const [confirmpass, onChangeConfirmPass] = React.useState();
    
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
                
                <Text style={styles.text2}>
                    Create your new password
                </Text>
                
                <TextInput
                onChangeText={onChangeNewPass}
                value={newpass}
                placeholder="New password"
                style={styles.textinput}
                underlineColor= 'transparent'
                />
                <TextInput
                onChangeText={onChangeConfirmPass}
                value={confirmpass}
                placeholder="Re-type your password"
                style={styles.textinput}
                underlineColorAndroid = 'transparent'
                />
               
                
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('PasswordSetSuccess')}}
                    
                >
                    <Text style={{color: '#FFFFFF'}}>Set Password</Text>
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
      
      text2: {
        color: '#7C7C7C',
        fontSize: 18,
        
        marginLeft: 25,
        marginTop: 10,
       
        
      },
      
      textinput: {
        height: 30,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30,
       padding: 7,

        
        
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