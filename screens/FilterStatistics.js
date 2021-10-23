import React,{useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native'


export default function FilterStatistics({ navigation }) {
    
   
    
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
                    Statistics
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',padding:25}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#380E86',fontSize:14,marginRight:60,fontWeight:'700',lineHeight:17}}>Live classes Statistics</Text>
                    <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#380E86',borderRadius:10,justifyContent:'center',alignItems:'center',height:40,width:105}}>
                        <Image source={require('../components/images/download.png')}/>
                        <Text style={{color:'#FFFFFF',fontSize:14,marginLeft:10}}>Download</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={{color:'#380E86',fontSize:10,fontWeight:'normal',marginBottom:5}}>February 2020</Text>
                        <View style={{backgroundColor:'#FFFFFF',padding:5}}>
                            <View style={{flexDirection:'row',marginBottom:5}}>
                                <Text style={styles.text1}>Date</Text>
                                <Text style={styles.text1}>Sub</Text>
                                <Text style={styles.text1}>Status</Text>
                                <Text style={styles.text1}>Std_Name</Text>
                                <Text style={styles.text1}>Earnings</Text>
                            </View>
                            <View style={{flexDirection:'row',marginTop:5}}>
                                <Text style={styles.text2}>02 Feb</Text>
                                <Text style={styles.text2}>PHY01-CH-01-10</Text>
                                <Text style={{color:'#66C6B9',fontSize:8,flex:1,}}>Completed</Text>
                                <Text style={styles.text2}>Shamitra Dutta</Text>
                                <Text style={styles.text2}>450 Tk</Text>
                            </View>
                        </View>
                        
                    </View>  
                
                
                
                </ScrollView>
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
      text1: {
          color:'#380E86',
          fontSize:9,
          flex:1,
      },
      text2: {
        color:'#7A98A1',
        fontSize:8,
        flex:1,
    }
      
      
     
    
});