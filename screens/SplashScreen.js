import React from 'react'
import { View,Text,ImageBackground, StyleSheet, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';

const image = require("../components/images/background-overlay.png");
export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Animatable.Image     
                    animation="bounceIn"                
                    style={styles.Logo}
                    source={require('../components/images/logo.png')}
                                     
                />
                <Animatable.Text animation="fadeInUpBig" style={styles.text1}>পড়ালেখা</Animatable.Text>
                <Animatable.Text animation="fadeInUpBig" style={styles.text2}>One Platform For Learning</Animatable.Text>
                <Animatable.Text animation="fadeInUpBig" style={styles.text3}>Gether Knowledge and your educational</Animatable.Text>
                <Animatable.Text animation="fadeInUpBig" style={styles.text3}>Guidline from just in one place.</Animatable.Text>
                
                {/* <Text style={styles.text}>Inside</Text> */}
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
        justifyContent: "center",
        alignItems: 'center',
        
      },
      text1: {
        color: '#FFFCB7',
        fontSize: 36,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 44,
        fontWeight: "bold",
        textAlign: "center",
        
      },
      text2: {
        color: '#F6F6F6',
        fontSize: 21,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 26,
        fontWeight: 'bold',
        textAlign: "center",
        
      },
      text3: {
        color: '#F6F6F6',
        fontSize: 13,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 20,
        fontWeight: 'normal',
        textAlign: "center",
        
      },
      Logo: {          
          
          width: 89,
          height: 101,
          
      }
});
