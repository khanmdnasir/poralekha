import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image, SafeAreaView} from 'react-native';
import { AuthContext } from '../components/context';
import { UserContext } from '../components/context';

import { TextInput } from 'react-native-paper';
const image = require("../components/images/background-overlay.png");

export default function SignUp(props) {
    const [user,setUser]=useState({username:'',email:'',phone:'',password:'',confirm_password:'',userType:props.userType})
    
    const [isSelected, setSelection] = useState(false);
    
    return (
        

        <SafeAreaView style={styles.container} >
            <ImageBackground source={image} resizeMode="cover" style={styles.bimage}>
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>{props.navigation.goBack()}}
                >
                    <Image
                        source={require('../components/images/Vector.png')}
                        
                    />
                </TouchableOpacity>
                
                
                <Text style={styles.text}>Sign Up</Text>
                
                   
                
            </View>             
            <View style={styles.signInForm}>
                <Text style={styles.text1}>
                    Welcome
                </Text>
                <Text style={styles.text2}>
                    Hello There, Sign Up To Continue
                </Text>
                
                <TextInput
                
                value={user.username}
                onChange={e => setUser({ ...user, username:e.target.value})}
                placeholder="Enter Your Username"
                style={styles.textinput}
                mode='outlined'
                />
                <TextInput
                value={user.email}
                onChange={e => setUser({ ...user, email:e.target.value})}
                placeholder="Enter Your Email Address"
                
                style={styles.textinput}
                mode='outlined'
                />
                <TextInput
                value={user.phone}
                onChange={e => setUser({ ...user, phone:e.target.value})}
                placeholder="Enter Your Phone Number"
                style={styles.textinput}
                mode='outlined'
                
                />
                <TextInput
                value={user.password}
                onChange={e => setUser({ ...user, password:e.target.value})}
                placeholder="Enter Your Password"
                style={styles.textinput}
                mode='outlined'
                secureTextEntry={true}
                />
                <TextInput
                value={user.confirm_password}
                onChange={e => setUser({ ...user, confirm_password:e.target.value})}
                placeholder="Confirm Password"
                style={styles.textinput}
                mode='outlined'
                secureTextEntry={true}
                />
                
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{props.navigation.push('SignUpCongrats')}}
                >
                    <Text style={{color: '#FFFFFF'}}>Sign Up</Text>
                </TouchableOpacity>
                
                
                <View style={{flexDirection: 'row',justifyContent: 'center',marginTop: 10}}>
                    <Text style={{color: '#380E86'}}>Or</Text>
                    <Text style={{color: '#7C7C7C',marginLeft: 5}}>connect using</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'center',marginBottom: 30}}>
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
                    <Text style={{margin: 5}}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={()=>{props.navigation.push('SignIn')}}
                    >
                        <Text style={{color: '#380E86',margin: 5}}>Sign In</Text>
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
        marginTop: 5,
       
        
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
       
       backgroundColor:'#F6F7F9'

        
        
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