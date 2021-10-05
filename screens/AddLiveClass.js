import React,{useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet} from 'react-native'
import DatePicker from 'react-native-date-picker'
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

export default function AddLiveClass({ navigation }) {
    
   
    const [date, setDate] = useState(new Date())
    const [starttime, setStartTime] = useState(new Date())
    const [endtime, setEndTime] = useState(new Date())
    const [openDate, setOpenDate] = useState(false)
    const [openStartTime, setOpenStartTime] = useState(false)
    const [openEndTime, setOpenEndTime] = useState(false)
    const [title, setTitle] = useState('')
    const [selectedValue, setSelectedValue] = useState("Select Class");
    const [chapterSelected, chapterSelection] = useState(false);
    const [partSelected, partSelection] = useState(false);
    // const renderItem = ({ item }) => (
    //     <Item title={item.title} />
    //   );
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
                    Add Live Class
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#FFFFFF',padding:25}}>
                        <TouchableOpacity style={{alignItems:'center',backgroundColor:'#F6F7F9',borderRadius:7,marginTop:10,height:45,flexDirection:'row'}} onPress={()=>setOpenDate(true)}>
                            <Text style={{color:'#B5B4BB',fontSize:14,marginLeft:10,marginRight:195}}>
                                Select Class Date
                            </Text>
                            <Icon name="calendar" style={{height:15,width:15}}/>
                            {/* <Image source={require('../components/images/calendar.png')} style={{height:20,width:20}}/> */}
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'#F6F7F9',borderRadius:7,height:45,flexDirection:'row',marginRight:12}} onPress={()=>setOpenStartTime(true)}>
                                <Text style={{color:'#B5B4BB',fontSize:14,marginLeft:10,marginRight:70}}>Start Time</Text>
                                <Icon name="clock" style={{height:15,width:15,marginRight:5}}/>
                                {/* <Image source={require('../components/images/calendar.png')} style={{height:20,width:20}}/> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'#F6F7F9',borderRadius:7,height:45,flexDirection:'row'}} onPress={()=>setOpenEndTime(true)}>
                                <Text style={{color:'#B5B4BB',fontSize:14,marginLeft:10,marginRight:70}}>End Time</Text>
                                <Icon name="clock" style={{height:15,width:15,marginRight:5}}/>
                                {/* <Image source={require('../components/images/calendar.png')} style={{height:20,width:20}}/> */}
                            </TouchableOpacity>
                        </View>
                        <TextInput 
                        style={styles.input}
                        
                        value={title}
                        placeholder="Type title"
                        placeholderTextColor="#B5B4BB"
                        mode='Outlined'
                        onChangeText={title=>setTitle(title)}
                        
                        />
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
                            <View style={[styles.checkBox,{marginRight:10}]}>
                            <CheckBox
                                disabled={false}
                                value={chapterSelected}
                                tintColors={false}
                                onCheckColor='#380E86'
                                onValueChange={() => chapterSelection(!chapterSelected)}
                            />
                            <Text style={{color:'#B8B8B8',fontSize:12}}> Chapter</Text>
                            <Text style={{color:'#66C6B9',fontSize:12}}> (Optional)</Text>
                            </View>
                            <View style={styles.checkBox}>
                            <CheckBox
                             disabled={false}
                            value={partSelected}
                            onValueChange={()=>partSelection(!partSelected)}
                            
                            />
                            <Text style={{color:'#B8B8B8',fontSize:12}}> Part</Text>
                            <Text style={{color:'#66C6B9',fontSize:12}}> (Optional)</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:30,alignSelf:'center'}}>
                            <Text style={{color:'#380E86',fontSize:12}}>Upload Thumbnail </Text>
                            <Text style={{color:'#66C6B9',fontSize:12}}>(Optional)</Text>
                        </View>
                        <TouchableOpacity style={styles.addThumbnail}>
                            <Text style={{color:'#380E86',fontSize:12}}>Add</Text>
                            <Text style={{color:'#380E86',fontSize:12}}>Thumbnail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addLiveClass}>
                            <Text style={{color:'#FFFFFF',fontSize:16}}>Add Live Class</Text>
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
                        <DatePicker
                            modal={true}
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
                            modal={true}
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
            {/* <DatePicker
            modal={true}
            open={false}
        style={{width: 200}}
       
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {setDate(date)}}
      /> */}
                
                
                
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
      input: {
        height:45,
        borderRadius:7,
        marginTop:15,
        backgroundColor:'#F6F7F9',
       
        

       },
       select: {
        backgroundColor: '#F6F7F9',
        borderRadius: 7,
        height: 45,
        marginTop: 15,
        justifyContent: 'center',
       

       },
       checkBox: {
        flex:1,
        borderRadius:7,
        height:45,
        backgroundColor:'#F6F7F9',
        justifyContent:'center',
        alignItems:'center',
       
        flexDirection:'row'
       },
       addThumbnail: {
        marginTop:20,
        alignSelf:'center',
        height:98,
        width:112,
        borderRadius:7,
        backgroundColor:'#EEF4F6',
        justifyContent:'center',
        alignItems:'center'
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