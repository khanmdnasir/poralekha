import React,{useState} from 'react'
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker';

const image = require("../components/images/background-overlay.png");

export default function SelectLanguge({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("English");
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Select Language</Text>
                <View style={styles.select}>
                    <Picker
                    selectedValue={selectedValue}
                    
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="Bengali" value="Bengali" />
                    </Picker>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{navigation.push('SignIn')}}
                >
                    <Text>Let's Go</Text>
                </TouchableOpacity>
                
                
            </ImageBackground>            
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        
      },
      image: {
        flex: 1,
        
        
      },
      text: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 24,
        fontWeight: "normal",
        marginTop: 272,
        marginLeft: 40,
        
      },
      select: {
          backgroundColor: '#774ADC',
          borderColor: '#774ADC',
          borderRadius: 10,
          borderWidth: 1,
          width: 295,
          height: 45,
          marginLeft: 40,
          marginTop: 10,
          justifyContent: 'center',


      },
      button: {
        
        marginTop: 280,
        marginLeft: 40,
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        width: 295,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#380E86'

      }
      
     
});