import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet, FlatList, ScrollView,Alert} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

const DATA = [
    {
      id: 1,
      title: 'First Item',
      
    },
    {
      id: 2,
      title: 'Second Item',
      
    },
    {
      id: 3,
      title: 'Third Item',
      
    },
  ];
  const deleteAlert = () =>
  Alert.alert(
    "Delete Course",
    "Are You Sure Want To Delete?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
// const Item = ({ title }) => (
//     <View style={{padding:5,backgroundColor:'#FFFFFF',borderRadius:7,height:90}}>
//       <View style={{flexDirection:'row'}}>
//           <Image source={{uri:'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.pimage}/>
//           <View>
//               <Text style={styles.title}>{{title}}</Text>
//               <Text style={styles.designation}>Physics, Dhaka University</Text>
//           </View>
//           <Text style={{color:'#380E86',fontSize:10,marginLeft:80}}>Phy01-ch-1-10</Text>
//       </View>
//       <View style={{flexDirection:'row',marginBottom:5}}>
//             <Image source={require('../components/images/alarm-clock.png')}/>
//             <Text style={styles.datetime}>6th Oct, 21</Text>
//             <Image source={require('../components/images/calendar.png')}/>
//             <Text style={styles.datetime}>10 am - 12 pm</Text>
//             <TouchableOpacity style={{backgroundColor:'#380E86',height:30,width:60,justifyContent:'center',alignItems:'center',marginRight:20}}>
//                 <Text style={{color:'#FFFFFF',fontSize:10}}>Message</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={{backgroundColor:'#66C6B9',height:30,width:46,justifyContent:'center',alignItems:'center',marginLeft:5}}>
//                 <Text style={{color:'#FFFFFF',fontSize:10}}>Edit</Text>
//             </TouchableOpacity>
//       </View>
//     </View>
//   );
export default function MyClasses({ navigation }) {
    const buttons=['Upcoming','Completed','Cencelled']
    const [clicked,setClicked]=React.useState(0)
    const handleClick= (item,id) => {
        setClicked(id);
    }
   

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
                    Live Classes
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:7,backgroundColor:'#EEF4F6',paddingLeft:30,paddingRight:30,paddingTop:10}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    {buttons.map((buttonLabel,index)=>{
                        return (
                            <TouchableOpacity 
                            onPress={(item)=>handleClick(item,index)}
                            key={index}
                            style={[index === clicked?styles.buttonActive:styles.button,index === 0?{borderTopStartRadius:15,borderBottomStartRadius:15}:"",index === 2?{borderTopEndRadius:15,borderBottomEndRadius:15}:""]}>
                                <Text style={index === clicked?styles.text1Active:styles.text1}>{buttonLabel}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {0===clicked?
                <View>
                <Text style={{color:'#380E86',fontSize:12,marginTop:15,marginBottom:10}}>Upcoming Live Classes</Text>
                {/* <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> */}
                <ScrollView>
                {DATA.map((index)=>{
                    return(
                        <View style={{padding:10,backgroundColor:'#FFFFFF',borderRadius:7,height:90,marginBottom:5,flexDirection:'row'}}>
                            <View>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={{uri:'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.pimage}/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={styles.title}>Md. Nasir Uddin</Text>
                                        <Text style={styles.designation}>Physics, Dhaka University</Text>
                                        <Rating
                                        type='star'                        
                                        ratingCount={5}
                                        readonly={true}
                                        imageSize={8}
                                        
                                        // onFinishRating={this.ratingCompleted}
                                        style={{ paddingVertical: 10 }}
                                        />
                                    </View>
                                    
                                </View>
                                <View style={{flexDirection:'row',marginTop:10}}>
                                    <Image source={require('../components/images/alarm-clock.png')}/>
                                    <Text style={styles.datetime}>6th Oct, 21</Text>
                                    <Image source={require('../components/images/calendar.png')}/>
                                    <Text style={styles.datetime}>10 am - 12 pm</Text>
                                </View>
                            </View>
                            
                            
                            <View >
                                    
                                    <Text style={{color:'#380E86',fontSize:10,marginLeft:110}}>Phy01-ch-1-10</Text>
                                    <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity style={{backgroundColor:'#380E86',height:30,width:60,justifyContent:'center',alignItems:'center',borderRadius:7,marginTop:20,marginLeft:40}}>
                                        <Text style={{color:'#FFFFFF',fontSize:10}}>Message</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{backgroundColor:'#66C6B9',height:30,width:46,justifyContent:'center',alignItems:'center',borderRadius:7,marginLeft:5,marginTop:20}} onPress={()=>navigation.push('EditLiveClass')}>
                                        <Text style={{color:'#FFFFFF',fontSize:10}}>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:5,marginTop:20}} onPress={()=>deleteAlert()}>
                                        <Image source={require('../components/images/delete.png')} style={{height:30,width:20}}/>
                                    </TouchableOpacity>
                                    </View>
                                    
                            </View>
                            </View>
                    )
                })}  
                </ScrollView>
               </View>:
               
                <View></View>}
                {1===clicked?
                <View style={{marginTop:10}}>
                   
                    <View style={{flexDirection:'row',marginBottom:10}}>
                        <Text style={{color:'#380E86',fontSize:12}}>Completed Live Classes</Text>
                        <Text style={{color:'#FF6C5F',fontSize:12}}> 5</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                {DATA.map((index)=>{
                    return(
                        <View style={{padding:10,backgroundColor:'#FFFFFF',borderRadius:7,height:90,marginBottom:5,flexDirection:'row'}}>
                            <View>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={{uri:'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.pimage}/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={styles.title}>Md. Nasir Uddin</Text>
                                        <Text style={styles.designation}>Physics, Dhaka University</Text>
                                        <Rating
                                        type='star'                        
                                        ratingCount={5}
                                        readonly={true}
                                        imageSize={8}
                                        
                                        // onFinishRating={this.ratingCompleted}
                                        style={{ paddingVertical: 10 }}
                                        />
                                    </View>
                                    
                                </View>
                                <View style={{flexDirection:'row',marginTop:10}}>
                                    <Image source={require('../components/images/alarm-clock.png')}/>
                                    <Text style={styles.datetime}>6th Oct, 21</Text>
                                    <Image source={require('../components/images/calendar.png')}/>
                                    <Text style={styles.datetime}>10 am - 12 pm</Text>
                                </View>
                            </View>
                            
                            
                            <View >
                                    
                                    <Text style={{color:'#380E86',fontSize:10,marginLeft:110}}>Phy01-ch-1-10</Text>
                                    <TouchableOpacity style={{backgroundColor:'#380E86',height:30,width:80,justifyContent:'center',alignItems:'center',borderRadius:7,marginTop:30,marginLeft:95}}>
                                        <Text style={{color:'#FFFFFF',fontSize:10}}>Arrange Again</Text>
                                    </TouchableOpacity>
                                    
                            </View>
                            </View>
                    )
                })}  
                </ScrollView>
                    
                    
                </View>:<View></View>}
                {2===clicked?
                <View style={{marginTop:10}}>
                     <View style={{flexDirection:'row',marginBottom:10}}>
                        <Text style={{color:'#380E86',fontSize:12}}>Cancelled Live Classes</Text>
                        <Text style={{color:'#FF6C5F',fontSize:12}}> 5</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                {DATA.map((index)=>{
                    return(
                        <View style={{padding:10,backgroundColor:'#FFFFFF',borderRadius:7,height:90,marginBottom:5,flexDirection:'row'}}>
                            <View>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={{uri:'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.pimage}/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={styles.title}>Md. Nasir Uddin</Text>
                                        <Text style={styles.designation}>Physics, Dhaka University</Text>
                                        <Rating
                                        type='star'                        
                                        ratingCount={5}
                                        readonly={true}
                                        imageSize={8}
                                        
                                        // onFinishRating={this.ratingCompleted}
                                        style={{ paddingVertical: 10 }}
                                        />
                                    </View>
                                    
                                </View>
                                <View style={{flexDirection:'row',marginTop:10}}>
                                    <Image source={require('../components/images/alarm-clock.png')}/>
                                    <Text style={styles.datetime}>6th Oct, 21</Text>
                                    <Image source={require('../components/images/calendar.png')}/>
                                    <Text style={styles.datetime}>10 am - 12 pm</Text>
                                </View>
                            </View>
                            
                            
                            <View >
                                    
                                    <Text style={{color:'#380E86',fontSize:10,marginLeft:110}}>Phy01-ch-1-10</Text>
                                    <TouchableOpacity style={{backgroundColor:'#EEF4F6',height:30,width:80,justifyContent:'center',alignItems:'center',borderRadius:7,marginTop:30,marginLeft:95}}>
                                        <Text style={{color:'#380E86',fontSize:10}}>View Details</Text>
                                    </TouchableOpacity>
                                    
                            </View>
                            </View>
                    )
                })}  
                </ScrollView>
                    
                   
                </View>:<View></View>}
               
                
                
                
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
      datetime: {
          fontSize:8,
          color:'#380E86',
          marginRight:10,
          marginLeft:5
      },
      pimage: {
          width:38,
          height:38,
          borderRadius:180
      },
      title: {
          color: '#380E86',
          fontSize:10
      },
      designation: {
          color: '#380E86',
          fontSize:8
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