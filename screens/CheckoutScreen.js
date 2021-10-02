import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native'

const DATA = [
    {
      id: 1,
      title: 'First Item',
      
    },
    {
      id: 2,
      title: 'Second Item',
      
    },
    
  ];



export default function CartScreen({ navigation }) {
    
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>navigation.goBack()}
                >
                    <Image source={require('../components/images/Vector.png')} style={{height:20,width:20}}/>
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    Cart
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',padding:30}}>
               
               <Text style={{color:'#380E86',fontSize:14,alignSelf:'center',marginTop:20}}>Earlier this week</Text>
               <Text style={{color:'#7C7C7C',fontSize:10,marginTop:5,marginBottom:10}}>You have 5 items in your wishlist</Text>
               {DATA.map((index)=>{
                    return(
                        <View style={{padding:10,backgroundColor:'#FFFFFF',borderRadius:7,height:55,marginBottom:5}}>
                            <Text style={{color:'#380E86',fontSize:12,marginBottom:3}}>{DATA.title}</Text>
                            <Text style={{color:'#2F2E41',fontSize:10}}>240.000 Tk</Text>
                        </View>
                    )
                })}
               <TouchableOpacity style={{height:45,borderRadius:10,backgroundColor:'#380E86',marginTop:40,justifyContent:'center',flexDirection:'row'}}>
                   <Text style={{color:'#FFFFFF',fontSize:14}}>Checkout</Text>
                   <Text style={{color:'#66C6B9',fontSize:14,marginLeft:80}}>Checkout</Text>
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
      pimage: {
          width:38,
          height:38,
          borderRadius:180
      },
      
      
    
});