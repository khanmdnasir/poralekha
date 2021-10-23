import React,{useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'

export default function Statistics({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("Select Class");
    const [date, setDate] = useState(new Date())
    const [openDate, setOpenDate] = useState(false)
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../components/images/background-overlay.png')} style={{flex:1}}>
            <View style={{flex:1}}>
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
                    Statistics
                </Text>
            </View> 
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <View style={{backgroundColor:'#25095A',height:100,width:120,paddingLeft:10,justifyContent:'center',borderRadius:7,marginRight:10}}>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginBottom:3}}>Student</Text>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginBottom:3}}>Engagement</Text>
                    <Text style={{color:'#66C6B9',fontSize:18}}>120</Text>
                </View>
                <View style={{backgroundColor:'#25095A',height:100,width:120,paddingLeft:10,justifyContent:'center',borderRadius:7}}>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginBottom:3}}>Live</Text>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginBottom:3}}>Courses</Text>
                    <Text style={{color:'#FF6C5F',fontSize:18}}>20</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                <View style={{backgroundColor:'#25095A',height:100,width:120,paddingLeft:10,justifyContent:'center',borderRadius:7,marginRight:10}}>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginBottom:3}}>Enrolled</Text>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginBottom:3}}>Courses</Text>
                    <Text style={{color:'#8A4AFF',fontSize:18}}>454</Text>
                </View>
                <View style={{backgroundColor:'#25095A',height:100,width:120,paddingLeft:10,justifyContent:'center',borderRadius:7}}>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginBottom:3}}>Total</Text>
                    <Text style={{color:'#FFFFFF',fontSize:10,marginBottom:3}}>Earnings</Text>
                    <Text style={{color:'#FFD15C',fontSize:18}}>120</Text>
                </View>
            </View>
            </View>
            
                
            <View style={{flex:1,backgroundColor:'#EEF4F6',borderTopStartRadius:30,borderTopEndRadius:30,padding:30,marginTop:20}}>
               
                    <Text style={{fontSize:12,lineHeight:14,fontStyle:'normal'}}>Filter Your Statistics</Text>
                    <View style={styles.select}>
                        <Picker
                        selectedValue={selectedValue}
                        placeholder="Select Class"
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                        
                        <Picker.Item label="English" color='#B5B4BB' value="English" />
                        <Picker.Item label="Bengali" color='#B5B4BB' value="Bengali" />
                        </Picker>
                    </View>
                    <View style={{flexDirection:'row',marginTop:15}}>
                        <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:7,height:45,flexDirection:'row',marginRight:15}} onPress={()=>setOpenStartTime(true)}>
                            <Text style={{color:'#B5B4BB',fontSize:14,marginLeft:10,marginRight:60}}>Start Time</Text>
                            <Icon name="clock" style={{height:15,width:15,marginRight:5}}/>
                            {/* <Image source={require('../components/images/calendar.png')} style={{height:20,width:20}}/> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:7,height:45,flexDirection:'row'}} onPress={()=>setOpenEndTime(true)}>
                            <Text style={{color:'#B5B4BB',fontSize:14,marginLeft:10,marginRight:70}}>End Time</Text>
                            <Icon name="clock" style={{height:15,width:15,marginRight:5}}/>
                            {/* <Image source={require('../components/images/calendar.png')} style={{height:20,width:20}}/> */}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addLiveClass} onPress={()=>navigation.push('FilterStatistics')}>
                            <Text style={{color:'#FFFFFF',fontSize:16}}>Filter Statistics</Text>
                        </TouchableOpacity>
                    <DatePicker
                        modal={true}
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
            </View>
                
            
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
      },
      select: {
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        height: 45,
        marginTop: 10,
        justifyContent: 'center',
       

       },
       addLiveClass: {
        backgroundColor:'#380E86',
        height:45,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7
    }
    });