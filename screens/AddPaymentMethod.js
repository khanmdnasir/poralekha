import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'

export default function AddPaymentMethod({ navigation }) {
    
    const [clicked,setClicked]=React.useState(0)
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
                    Payment
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:5,backgroundColor:'#EEF4F6'}}>
                   <Text style={{color:'#380E86',fontSize:16,lineHeight:18,fontWeight:'700',marginLeft:35,marginTop:20}}>Select your method</Text> 
                   <View style={{flexDirection:'row',marginLeft:40,marginTop:25}}>
                        
                        
                            <TouchableOpacity 
                            onPress={()=>handleClick(0)}
                            
                            >
                                <View 
                                    style={[0 === clicked?styles.buttonActive:styles.button]}
                                >
                                    {0===clicked?<Image source={require('../components/images/credit-card.png')}/>:<Image source={require('../components/images/credit-card1.png')}/>}
                                    
                                </View>
                                <Text style={0 === clicked?{
      fontSize: 12,
      lineHeight: 15,
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      color: '#380E86',
      marginLeft:30,
      marginTop:15
  }:{
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 'normal',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        color: '#380E86',
        marginLeft:30,
        marginTop:15
        
    }} >Card</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>handleClick(1)}
                            
                            >
                                <View 
                                    style={[1 === clicked?styles.buttonActive:styles.button]}
                                >
                                    {1===clicked?<Image source={require('../components/images/mobile-banking1.png')}/>:<Image source={require('../components/images/mobile-banking.png')}/>}
                                </View>
                                <Text style={1 === clicked?styles.text1Active:styles.text1}>Mobile Banking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>handleClick(2)}
                            
                            >
                                <View 
                                    style={[2 === clicked?styles.buttonActive:styles.button]}
                                >
                                    {2===clicked?<Image source={require('../components/images/net-banking1.png')}/>:<Image source={require('../components/images/net-banking.png')}/>}
                                </View>
                                <Text style={2 === clicked?{
      fontSize: 12,
      lineHeight: 15,
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      color: '#380E86',
      marginLeft:15,
      marginTop:15
  }:{
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 'normal',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        color: '#380E86',
        marginLeft:15,
        marginTop:15
        
    }}>Net Banking</Text>
                            </TouchableOpacity>
                                               
                    
                   </View>

                   
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
        height: 90,
        width: 90,
        borderRadius:180,
        marginRight:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
        
    },
    buttonActive: {
        height: 90,
        width: 90,
        borderRadius:180,
        marginRight:20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#380E86'
      
      },
    button1: {
        height: 50,
        marginTop:30,
        marginLeft:70,
        marginRight:70,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#380E86'
        
    },
    text1: {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 'normal',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        color: '#380E86',
        
        marginTop:15
        
    },
    text1Active: {
      fontSize: 12,
      lineHeight: 15,
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      color: '#380E86',
      marginTop:15
  },
     
});