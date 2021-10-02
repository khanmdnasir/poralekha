import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper';

export default function EditProfile({ navigation }) {
    const [firstName, onChangeFirstName] = React.useState();
    const [lastName, onChangeLastName] = React.useState();
    const [profession, onChangeProfession] = React.useState();
    const [className, onChangeClassName] = React.useState();
    const [bloodGroup, onChangeBloodGroup] = React.useState();
    const [contact, onChangeContact] = React.useState();
    const [address, onChangeAddress] = React.useState();
    
    const handleClick= (id) => {
        setClicked(id);
    }
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
                <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:30}}>
                        <Text style={styles.text1}>First Name</Text>
                        <TextInput 
                        style={styles.input}
                        onChangeText={onChangeFirstName}
                        value={firstName}
                        mode='outlined'
                        />

                        <Text style={styles.text1}>Profession</Text>
                        <TextInput 
                        style={styles.input}
                        onChangeText={onChangeProfession}
                        value={profession}
                        mode='outlined'
                        />

                        <Text style={styles.text1}>Blood Group</Text>
                        <TextInput 
                        style={styles.input}
                        onChangeText={onChangeBloodGroup}
                        value={bloodGroup}
                        mode='outlined'
                        />


                    </View>
                    <View>
                    <Text style={styles.text1}>Last Name</Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={onChangeLastName}
                    value={lastName}
                    mode='outlined'
                    
                    />

                    <Text style={styles.text1}>Class</Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={onChangeClassName}
                    value={className}
                    mode='outlined'
                    
                    />

                    <Text style={styles.text1}>Contact Number</Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={onChangeContact}
                    value={contact}
                    mode='outlined'
                    
                    />
                    </View>
                    
                </View>
                <Text style={styles.text1}>Address</Text>
                    <TextInput 
                    style={styles.multiinput}
                    onChangeText={onChangeAddress}
                    value={address}
                    mode='outlined'
                    multiline={true}
                    
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
    input: {
        height:45,
        width:145,
        marginBottom:10,
        backgroundColor:'#FFFFFF',
       
        

    },
    multiinput: {
        height: 80,
        
        backgroundColor:'#FFFFFF',
    }
    
     
});