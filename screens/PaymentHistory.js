import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'

export default function PaymentHistory({ navigation }) {
    
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
            <View style={{flex:5,backgroundColor:'#EEF4F6',padding:35}}>
                <View style={{flexDirection:'row',marginTop:30}}>
                    <View style={{marginRight:115}}>
                        <Text style={{fontSize:10,marginBottom:10}}>01 Jun 2021</Text>
                        <Text style={{color:'#380E86',fontSize:14,marginBottom:10}}>INVOICE 855</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#7C7C7C',fontSize:12}}>Order Id:</Text>
                            <Text style={{fontSize:12}}> TR2563569</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.printbutton}>
                        <Image source={require('../components/images/print.png')}/>
                        <Text style={{color:'#FFFFFF',fontSize:12,marginLeft:5}}>Print</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomWidth:1,borderBottomColor:'#DDDDDD',marginTop:40}}>
                    <Text style={{color:'#380E86',fontSize:14,fontWeight:'600',lineHeight:17,marginBottom:10}}>Invoice Details</Text>
                </View>
                <View style={{borderBottomWidth:1,borderBottomColor:'#DDDDDD'}}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={styles.text3}>Date</Text>
                        <Text style={{
                            color: '#000000',
                            fontSize: 12,
                            marginLeft:230
                            
                        }}>01 Jun 2021</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={styles.text3}>Item Name</Text>
                        <Text style={{
                            color: '#000000',
                            fontSize: 12,
                            marginLeft:188
                            
                        }}>Phy-1st ch-10</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={styles.text3}>Hours</Text>
                        <Text style={{
                            color: '#000000',
                            fontSize: 12,
                            marginLeft:260
                            
                        }}>2 hrs</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={styles.text3}>Discount</Text>
                        <Text style={{
                        color: '#000000',
                        fontSize: 12,
                        marginLeft:248
                        
                    }}>20%</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={styles.text3}>VAT</Text>
                        <Text style={{
                        color: '#000000',
                        fontSize: 12,
                        marginLeft:280
                        
                    }}>0%</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                        <Text style={styles.text3}>Amount</Text>
                        <Text style={{
                        color: '#000000',
                        fontSize: 12,
                        marginLeft:228
                        
                    }}>Tk 5,000</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={styles.text5}>Sub Total</Text>
                    <Text style={{color:'#000000',fontSize:12,fontWeight:'bold',marginLeft:218}}>Tk 5,000</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={styles.text5}>Status</Text>
                    <Text style={{color: '#3ABA2F',fontSize:12,fontWeight:'bold',marginLeft:255}}>Paid</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={styles.text5}>Method</Text>
                    <Text style={{color: '#000000',fontSize:12,marginLeft:175}}>Card 4321*****63</Text>
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
  printbutton: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:7,
      height:45,
      width:95,
      flexDirection:'row',
      backgroundColor: '#380E86',
      
    },
    text3: {
        color: '#380E86',
        fontSize: 12,
       
    },
    text5: {
        color:'#380E86',fontSize:12,fontWeight:'bold'
    }
     
});