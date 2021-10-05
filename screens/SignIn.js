import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-paper';
import { AuthContext } from '../components/context';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const image = require("../components/images/background-overlay.png");

export default function SignIn({ navigation }) {
    const [user, onChangeUser] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [isSelected, setSelection] = useState(false);
    const { SignIn } = React.useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bimage}>
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    
                >
                    <Image
                        source={require('../components/images/Vector.png')}
                        
                    />
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    Sign In
                </Text>
            </View>             
            <View style={styles.signInForm}>
                <Text style={styles.text1}>
                    Welcome
                </Text>
                <Text style={styles.text2}>
                    Hello There, Sign In To Continue
                </Text>
                
                <TextInput
                onChangeText={onChangeUser}
                value={user}
                placeholder="Enter Username or Email Address"
                style={styles.textinput}
                mode='outlined'
                />
                <TextInput
                onChangeText={onChangePassword}
                value={password}
                placeholder="Enter Your Password"
                style={styles.textinput}
                mode='outlined'
                secureTextEntry={true}
                />
                <TouchableOpacity
                    onPress={()=>{navigation.push('ForgotPassword')}}
                >
                    <Text style={styles.text3}>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> SignIn()}
                >
                    <Text style={{color: '#FFFFFF'}}>Sign In</Text>
                </TouchableOpacity>
                <View style={{marginBottom: 20,marginTop: 20,marginLeft: 25}}>
                <BouncyCheckbox
                size={25}
                fillColor="#380E86"
                unfillColor="#FFFFFF"
                text="Remember Me"        
                iconStyle={{ borderColor: "black" }}
                textStyle={{ fontFamily: "Montserrat",fontSize: 15, lineHeight: 22,color: 'black'}}
                onPress={() => {setSelection(true)}}
              />
                    {/* <Text style={styles.remember}>Remember Me</Text> */}
                </View>
                
                <View style={{flexDirection: 'row',justifyContent: 'center',}}>
                    <Text style={{color: '#380E86'}}>Or</Text>
                    <Text style={{color: '#7C7C7C',marginLeft: 5}}>connect using</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'center',marginBottom: 100}}>
                    <TouchableOpacity
                        style={styles.button1}
                        
                    >
                        <Text style={{color: '#FFFFFF'}}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        
                    >
                        <Text style={{color: '#FFFFFF'}}>Google</Text>
                    </TouchableOpacity>
                   
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'center',marginBottom: 10}}>
                    <Text style={{margin: 5}}>Don’t have an account?</Text>
                    <TouchableOpacity
                        onPress={()=>{navigation.push('UserType')}}
                    >
                        <Text style={{color: '#380E86',margin: 5}}>Sign Up</Text>
                    </TouchableOpacity>
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
        color: '#380E86',
        fontSize: 22,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 28,
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: 20,
       
        
      },
      text2: {
        color: '#7C7C7C',
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 15,
        fontWeight: "normal",
        marginLeft: 25,
        marginTop: 10,
       
        
      },
      text3: {
        color: '#380E86',
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 12,
        fontWeight: "normal",
        marginLeft: 25,
        marginTop: 15,
       
        
      },
      textinput: {
        height: 45,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        backgroundColor:'#F6F7F9',        
        
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
      button1: {
        
            
            
            borderRadius: 7,
            backgroundColor: '#345178',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            width: 80,
            margin: 5,
            
            
    
          },
      button2: {
        
            
            
            borderRadius: 7,
            backgroundColor: '#EF4536',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            width: 80,
            margin: 5,
            
            
    
          },
        checkbox: {
            marginLeft: 25,
            marginTop: 13,
            
        },
        remember: {
            color: '#111111',
            fontSize: 15,
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            lineHeight: 18,
            fontWeight: "normal",
            marginTop: 20,
           
            
          },
      
     
});