import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper';


export default function ChangePassword({ navigation }) {
    
    const [email, onChangeEmail] = React.useState();
    const [currentPass, onChangeCurrentPass] = React.useState();
    const [newPass, onChangeNewPass] = React.useState();
    const [RePass, onChangeRePass] = React.useState();
    
   
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>navigation.goBack()}
                >
                    <Image source={require('../components/images/Vector.png')} />
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    Profile
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:5,backgroundColor:'#EEF4F6',padding:35}}>
                <Text style={{fontSize:14,color:'#000000',marginBottom:20}}>General Information</Text>
                
                    <Text style={styles.text1}>Email</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        mode='outlined'
                        
                        
                    />
                    <Text style={styles.text1}>Current Password</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChangeCurrentPass}
                        value={currentPass}
                        mode='outlined'
                        
                        
                    />
                    <Text style={styles.text1}>New Password</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChangeNewPass}
                        value={newPass}
                        mode='outlined'
                        
                        
                    />
                    <Text style={styles.text1}>Retype Password</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChangeRePass}
                        value={RePass}
                        mode='outlined'
                        
                        
                    />
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{color:'#FFFFFF',fontSize:14}}>Save</Text>
                    </TouchableOpacity>
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
      input: {
        height:45,
        
        marginBottom:10,
        backgroundColor:'#FFFFFF',
       
        

    },
      button: {
        height: 45,
        
        borderRadius:10,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#380E86',
        marginTop: 40
        
    },
    text1: {
        color: '#380E86',
        fontSize: 12,
        marginBottom:5,
        fontWeight:'600'
    },
   
    
    
     
});