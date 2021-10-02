import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native'
import { Paragraph } from 'react-native-paper';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>navigation.openDrawer()}
                >
                    <Image source={require('../components/images/drawerWhite.png')} />
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                >
                    Profile
                </Text>
            </View> 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
                    <View style={{height:120,width:120,borderRadius:180}}>
                        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'}} style={{height:120,width:120,borderRadius:180}}/>
                        <TouchableOpacity style={{position:'absolute',right:0,top:0,width:34,height:34}}>
                            <Image source={require('../components/images/editProfile.png')}/>
                        </TouchableOpacity>
                    </View>
                
                </View>
                <Text style={{color:'#FFFFFF',fontSize:18,alignSelf:'center',marginTop:10}}>Andrea Jane</Text>
                <Text style={{color:'#FFFFFF',fontSize:12,alignSelf:'center',marginTop:5}}>a.janes2021@gmail.com</Text>
                <View style={{alignSelf:'center',marginTop:5,flexDirection:'row'}}>
                    <Text style={{color:'#FFFFFF',fontSize:12,fontWeight:'700'}}>ID:</Text><Text style={{color:'#FFFFFF',fontSize:12}}> 6274754</Text>
                </View>
                <View style={{flex:1,backgroundColor:'#EEF4F6',borderTopStartRadius:30,borderTopEndRadius:30,padding:30,marginTop:20}}>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{color:'#000000',fontSize:14,marginRight:160}}>General Information</Text>
                        <TouchableOpacity style={{flexDirection:'row'}}
                            onPress={()=>navigation.push('EditProfile')}
                        >
                            <Image source={require('../components/images/pen.png')}/>
                            <Text style={{marginLeft:5,color:'#380E86',fontSize:12}}>Edit</Text>
                        </TouchableOpacity>
                        

                    </View>
                    <View style={{flexDirection:'row',marginTop:20,borderBottomColor:'#DDDDDD',borderBottomWidth:1}}>
                        <View>
                            <Text style={styles.text1}>Name</Text>
                            <Text style={styles.text2}>Andrea Jane</Text>
                            <Text style={styles.text1}>Class</Text>
                            <Text style={styles.text2}>Class 10</Text>
                            <Text style={styles.text1}>Blood Group</Text>
                            <Text style={styles.text2}>A+(ve)</Text>
                        </View>
                        <View style={{marginLeft:60}}>
                            <Text style={styles.text1}>Pofession</Text>
                            <Text style={styles.text2}>Student</Text>
                            <Text style={styles.text1}>Contact Number</Text>
                            <Text style={styles.text2}>01878044672</Text>
                            <Text style={styles.text1}>Residence</Text>
                            <Paragraph style={styles.text2}>10/3, Block-D, Rajia Sultana Road</Paragraph>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:15}}>
                        <Text style={{color:'#000000',fontSize:14,marginRight:220}}>Language</Text>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.push('EditLanguage')}>
                            <Image source={require('../components/images/pen.png')}/>
                            <Text style={{marginLeft:5,color:'#380E86',fontSize:12}}>Edit</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{marginTop:15,borderBottomColor:'#DDDDDD',borderBottomWidth:1}}>
                        <Text style={styles.text1}>Selected</Text>
                        <Text style={styles.text2}>English (United Kingdom)</Text>
                    </View>

                    <View style={{flexDirection:'row',marginTop:15,marginBottom:15}}>
                        <Text style={{color:'#000000',fontSize:14,marginRight:150}}>Account Information</Text>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.push('EditAccountInformation')}>
                            <Image source={require('../components/images/pen.png')}/>
                            <Text style={{marginLeft:5,color:'#380E86',fontSize:12}}>Edit</Text>
                        </TouchableOpacity>

                    </View>
                     <Text style={styles.text1}>Username</Text>
                     <Text style={styles.text2}>Andrea jane</Text>
                     <Text style={styles.text1}>Email Address</Text>
                     <Text style={styles.text2}>aj.....c@gmail.com</Text>
                     <TouchableOpacity style={{marginTop:15,marginBottom:20}} onPress={()=>navigation.push('ChangePassword')}>
                        <Text style={{fontSize:14,color:'#380E86'}}>Change Password</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={{marginBottom:15}}>
                        <Text style={{fontSize:14,color:'#380E86'}}>Disable my account</Text>
                     </TouchableOpacity>
                     
                     
                </View>
                
            </ScrollView>
            </ImageBackground>
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
      text1: {
          color: '#380E86',
          fontSize: 12,
          marginBottom:5,
          fontWeight:'600'
      },
      text2: {
          color:'#575279',
          fontSize:9,
          marginBottom:10
      }
    });