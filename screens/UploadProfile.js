import React,{useState} from 'react';
import { View,Text, StyleSheet, TouchableOpacity,Image, SafeAreaView,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';
const image = require("../components/images/background-overlay.png");

export default function UploadProfile({ navigation }) {
    const [pimage, setImage] = React.useState('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg');
    const choosePhotoFromGallery = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path)
          });
    };
    const takePhotoFromCamera = () =>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setImage(image.path)
          });
    };
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bimage}>
            <View style={{flex: 3}}>
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
                    Take Picture
                </Text>
                
                <View
                    

                >
                    <ImageBackground style={styles.profileImage} source={{uri: pimage}} imageStyle={{borderRadius: 180,}}/>
                </View>
                {/* <Image
                    source={require('../components/images/profile_picture.jpg')}
                    style={styles.profileImage}
                /> */}
                

            </View>          
            <View style={styles.signInForm}>
                <View style={{flexDirection: 'row',marginLeft: 25,marginRight: 25}}>
                <TouchableOpacity style={{marginTop: 30}}
                    onPress={() => {setImage('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg')}}
                >
                    <Icon name="close" color="#380E86" style={{fontSize: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    
                    onPress={takePhotoFromCamera}
                    style={{marginLeft: 100,marginRight: 100,marginTop: 20}}
                >
                {/* <Image
                    source={require('../components/images/.png')}
                    style={{alignSelf: 'center'}}
                /> */}
                <Image source={require('../components/images/capture.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 30}}
                    onPress={()=>{navigation.push('IdVerification')}}
                >
                    <Icon name="check" color="#380E86" style={{fontSize: 30}}/>
                </TouchableOpacity>
                </View>
                
                
                
                
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={choosePhotoFromGallery}
                >
                    <Text style={{color: '#380E86'}}><Icon name="upload" color="#380E86"/> Upload from device</Text>
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
    
      signInForm: {
          flex: 2,
          backgroundColor: '#FFFFFF',
          
          
          

          
          

      },
      button: {
        
            marginTop: 80,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 7,
            backgroundColor: '#EEF4F6',
            
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            
    
          },
      profileImage: {
            
            width: 250,
            height: 250,
            alignSelf: 'center',
            marginTop: 50,
            
            

      }
      
      
     
});