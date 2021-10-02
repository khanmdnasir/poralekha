import React from 'react'
import { View,Text,Image, StyleSheet, TouchableOpacity} from 'react-native'

export default function SignUpCongrats({ navigation }) {
    return (
        <View style={styles.container}>
                <Image
                    source={require('../components/images/Congrats.png')}
                    onPress={()=>{navigation.goBack()}}
                    
                /> 
                <Text style={styles.text}>Congrates</Text>
                <Text style={styles.text1}>You’ve registered successfully</Text> 
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('PhoneVerification')}}
                >
                    <Text style={{color: '#FFFFFF'}}>Let's Go</Text>
                </TouchableOpacity>    
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
      button: {
        
        borderRadius: 7,
        backgroundColor: '#380E86',
        
        height: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

      }
      
     
});