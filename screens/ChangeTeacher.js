import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image,StyleSheet, FlatList, ScrollView,Alert} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Searchbar } from 'react-native-paper';

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

export default function ChangeTeacher({ navigation }) {
    
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

  
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
                    Change Teacher
                </Text>
            </View> 
            </ImageBackground>
            <View style={{flex:5,backgroundColor:'#EEF4F6',padding:30}}>
                
                
                
                <Searchbar
                placeholder="Search by name or institute"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchBar}
                />
                {/* <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> */}
                <ScrollView>
                {DATA.map((index)=>{
                    return(
                        <View style={{borderBottomWidth:1,borderBottomColor:'#CBD7F0',flexDirection:'row',padding:10}}>
                            
                            <View style={{flexDirection:'row'}}>
                                <Image source={{uri:'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.pimage}/>
                                <View style={{marginLeft:7}}>
                                    <Text style={styles.title}>Md. Nasir Uddin</Text>
                                    <Text style={styles.designation}>Physics, Dhaka University</Text>
                                    <Rating
                                    type='star'                        
                                    ratingCount={5}
                                    readonly={true}
                                    imageSize={8}
                                    
                                    // onFinishRating={this.ratingCompleted}
                                    style={{paddingVertical:10}}
                                    />
                                </View>
                                
                            </View>
                                
                            
                            
                            <View >
                                    
                                    
                                    <TouchableOpacity style={{backgroundColor:'#380E86',height:30,width:60,justifyContent:'center',alignItems:'center',borderRadius:7,marginTop:20,marginLeft:40}} onPress={()=>navigation.push('TeacherDetails')}>
                                        <Text style={{color:'#FFFFFF',fontSize:10}}>View</Text>
                                    </TouchableOpacity>
                                    
                                    
                            </View>
                        </View>
                    )
                })}  
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
          width:58,
          height:58,
          borderRadius:10,
          
      },
      title: {
          color: '#380E86',
          fontSize:12,
          marginBottom:5
      },
      designation: {
          color: '#7C7C7C',
          fontSize:10,
          marginBottom:5
      },
      
  searchBar: {
        
    marginBottom:10,
    borderRadius: 10
},
});