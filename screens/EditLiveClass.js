import React,{ useState } from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome5'
import DatePicker from 'react-native-date-picker'
import RNDateFormat from 'react-native-date-format';

export default function EditLiveClass({ navigation }) {
    // const [userName, onChangeUserName] = React.useState();
    // const [email, onChangeEmail] = React.useState();
    const [date, setDate] = useState(new Date())
    const [starttime, setStartTime] = useState(new Date())
    const [endtime, setEndTime] = useState(new Date())
    const [openDate, setOpenDate] = useState(false)
    const [openStartTime, setOpenStartTime] = useState(false)
    const [openEndTime, setOpenEndTime] = useState(false)
    
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
                    Edit Live Class
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:6,backgroundColor:'#EEF4F6',padding:35}}>
                
                <TextInput 
                    style={styles.input}
                    mode='Outlined'
                    disabled
                    value="Physics"                                      
                    />
                    
                    <TextInput 
                        style={styles.input}
                        
                        value="Chapter 1-5"
                        disabled
                        mode='Outlined'
                        
                        
                    />
                    <Text style={{alignSelf:'center',marginTop:15,color:'#380E86',fontSize:14}}>Teacher</Text>
                    <Image source={{uri:'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}} style={{alignSelf:'center',height:45,width:45,borderRadius:180,marginTop:5}}/>
                    <Text style={{color:'#380E86',fontSize:10,alignSelf:'center',marginTop:3}}>Md. Nasir uddin</Text>
                    <Text style={{color:'#380E86',fontSize:8,alignSelf:'center',marginTop:3}}>Physics, Brac University</Text>
                    <Rating
                    type='star'                        
                    ratingCount={5}
                    readonly={true}
                    imageSize={8}
                    
                    // onFinishRating={this.ratingCompleted}
                    style={{ marginTop:3,alignSelf:'center' }}
                    />
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>navigation.push('ChangeTeacher')}
                    >
                        <Text style={{color:'#FFFFFF',fontSize:12}}>Change Teacher</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#90C2D3',borderBottomWidth:1,marginTop:30}}>
                        
                    </View>
                    <Text style={{color:'#380E86',fontSize:14,marginTop:20,fontWeight:'700',lineHeight:17}}>Change Date & Time</Text>

                    
                        <TouchableOpacity style={{alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:7,marginTop:10,height:45,flexDirection:'row'}} onPress={()=>setOpenDate(true)}>
                            <Text style={{color:'#B5B4BB',fontSize:14,marginLeft:10,marginRight:185}}>
                                {date.toDateString()}
                            </Text>
                            <Icon name="calendar" style={{height:15,width:15}}/>
                            {/* <Image source={require('../components/images/calendar.png')} style={{height:20,width:20}}/> */}
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <TouchableOpacity style={{alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:7,height:45,flexDirection:'row',marginRight:12}} onPress={()=>setOpenStartTime(true)}>
                                <Text style={{color:'#B5B4BB',fontSize:14,marginLeft:10,marginRight:70}}>{starttime.toLocaleTimeString()}</Text>
                                <Icon name="clock" style={{height:15,width:15,marginRight:5}}/>
                                {/* <Image source={require('../components/images/calendar.png')} style={{height:20,width:20}}/> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:7,height:45,flexDirection:'row'}} onPress={()=>setOpenEndTime(true)}>
                                <Text style={{color:'#B5B4BB',fontSize:14,marginLeft:10,marginRight:70}}>{endtime.toLocaleTimeString()}</Text>
                                <Icon name="clock" style={{height:15,width:15,marginRight:5}}/>
                                {/* <Image source={require('../components/images/calendar.png')} style={{height:20,width:20}}/> */}
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={{color:'#FFFFFF',fontSize:14}}>Send Request</Text>
                        </TouchableOpacity>
                        <DatePicker
                            modal={openDate}
                            open={openDate}
                            date={date}
                            mode='date'
                            onConfirmDate={(date) => {
                            setOpenDate(false)
                            setDate(date)
                            }}
                            onCancel={() => {
                            setOpenDate(false)
                            }}
                        />
                        <DatePicker
                            modal={openStartTime}
                            open={openStartTime}
                            date={starttime}
                            mode='time'
                            onConfirmStartTime={(starttime) => {
                            setOpenStartTime(false)
                            setStartTime(starttime)
                            }}
                            onCancel={() => {
                            setOpenStartTime(false)
                            }}
                        />
                        <DatePicker
                            modal={openEndTime}
                            open={openEndTime}
                            date={endtime}
                            mode='time'
                            onConfirmEndTime={(endtime) => {
                            setOpenEndTime(false)
                            setEndTime(endtime)
                            }}
                            onCancel={() => {
                            setOpenEndTime(false)
                            }}
                        />
                    

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
      input: {
        height:45,
        borderRadius:7,
        marginBottom:10,
        backgroundColor:'#FFFFFF',
       
        

    },
      button: {
        height: 38,
        width: 110,
        borderRadius:7,
        
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#380E86',
        marginTop: 20
        
    },
    button1: {
        height: 45,
        
        borderRadius:7,
        
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#380E86',
        marginTop: 15
        
    },
    text1: {
        color: '#380E86',
        fontSize: 12,
        marginBottom:5,
        fontWeight:'600'
    },
   
    
    
     
});