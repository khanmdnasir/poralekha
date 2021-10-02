import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'


export default function Payment({ navigation }) {
    const buttons=['Payment Methods','Payment History']
    const [clicked,setClicked]=React.useState(0)
    const handleClick= (item,id) => {
        setClicked(id);
    }
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>navigation.openDrawer()}
                >
                    <Image source={require('../components/images/drawerWhite.png')} style={{height:20,width:20}}/>
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    Payment
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:5,backgroundColor:'#EEF4F6'}}>
                <View style={{flexDirection:'row',marginLeft:25,marginRight:25,marginTop:30}}>
                    {buttons.map((buttonLabel,index)=>{
                        return (
                            <TouchableOpacity 
                            onPress={(item)=>handleClick(item,index)}
                            key={index}
                            style={[index === clicked?styles.buttonActive:styles.button,index === 0?{borderTopStartRadius:15,borderBottomStartRadius:15}:"",index === 1?{borderTopEndRadius:15,borderBottomEndRadius:15}:""]}>
                                <Text style={index === clicked?styles.text1Active:styles.text1}>{buttonLabel}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {0===clicked?
                    <View>
                        <Image source={require('../components/images/sad.png')} style={{alignSelf:'center',marginTop: 100}}/>
                        <Text style={{alignSelf:'center',color:'#380E86',fontSize:20,marginTop:30}}>No saved method</Text>
                        <Text style={{alignSelf:'center',color:'#507492',fontSize:14,marginTop:20}}>You haven’t save any payment method</Text>
                        <Text style={{alignSelf:'center',color:'#507492',fontSize:14,marginTop:5}}>yet. Kindly add a payment method.</Text>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={()=>navigation.push('AddPaymentMethod')}
                        >
                            <Text style={{color: '#FFFFFF'}}>Add a payment method</Text>
                        </TouchableOpacity>
                    </View>:

                    <View style={{flex:1}}>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
                                <Text style={{color:'#000000',fontSize:14}}>Transaction History</Text>
                                <Image source={require('../components/images/filter.png')} style={{marginLeft:150}}/>
                                <Text style={{color:'#380E86',fontSize:12,lineHeight:15,fontWeight:'100',marginLeft:5,marginRight:25}}>Filter</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#FFFFFF',flex:6,borderTopEndRadius:30,borderTopStartRadius:30}}>
                            <View style={{flexDirection:'row',marginTop:40,marginLeft:35}}>
                                <Text style={{color: '#380E86',
                                fontSize: 12,
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                lineHeight: 14,
                                fontWeight: "600",
                                marginRight: 60,}}>Transaction ID
                                </Text>
                                <Text style={styles.text2}>Amount</Text>
                                <Text style={styles.text2}>Date</Text>
                                <Text style={styles.text2}>Action</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:30,marginLeft:35,borderBottomWidth:1,borderBottomColor:'#DDDDDD'}}>
                                <View style={{marginRight:40,marginBottom:10}}>
                                    <Text style={{fontSize:9}}>AC0015202</Text>
                                    <Text style={{color:'#7C7C7C',
                                    fontSize:9}}>Card-4321 **** **** **65</Text>
                                </View>
                                <Text style={styles.text3}>Tk 12,000</Text>
                                <Text style={styles.text3}>01/04/20</Text>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.push('PaymentHistory')}>
                                    <Image source={require('../components/images/eye.png')}/>
                                    <Text style={{color:'#380E86',fontSize:9,marginLeft:5}}>View</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',marginTop:30,marginLeft:35,borderBottomWidth:1,borderBottomColor:'#DDDDDD'}}>
                                <View style={{marginRight:40,marginBottom:10}}>
                                    <Text style={{fontSize:9}}>AC0015202</Text>
                                    <Text style={{color:'#7C7C7C',
                                    fontSize:9}}>Card-4321 **** **** **65</Text>
                                </View>
                                <Text style={styles.text3}>Tk 12,000</Text>
                                <Text style={styles.text3}>01/04/20</Text>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.push('PaymentHistory')}>
                                    <Image source={require('../components/images/eye.png')}/>
                                    <Text style={{color:'#380E86',fontSize:9,marginLeft:5}}>View</Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>

                }
                
                
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
      text2: {
        color: '#380E86',
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 14,
        fontWeight: "600",
        marginRight: 30,
        
       
        
      },
      text3: {
        color:'#7C7C7C',
        fontSize:9,
        marginRight: 25
      },
      button: {
        height: 50,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
        
    },
    buttonActive: {
      height: 50,
      flex:1,
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
        fontSize: 13,
        lineHeight: 15,
        fontWeight: '500',
        fontFamily: 'Montserrat',
        fontStyle: 'normal'
    },
    text1Active: {
      fontSize: 13,
      lineHeight: 15,
      fontWeight: '500',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      color: '#FFFFFF'
  },
});