import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';

export default function EditLanguage({ navigation }) {
    const [firstName, onChangeFirstName] = React.useState();
    const [selectedValue, setSelectedValue] = React.useState("English");
    
   
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
                <Text style={styles.text1}>Select Language</Text>
                    <Picker
                    selectedValue={selectedValue}
                    
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="Bengali" value="Bengali" />
                    </Picker>
                
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