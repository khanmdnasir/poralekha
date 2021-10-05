import { StylesContext } from '@material-ui/styles'
import React from 'react'
import {ScrollView,View,Text, ImageBackground,StyleSheet, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Paragraph } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { AuthContext } from '../components/context';
import { TERMINATORLESS_TYPES } from '@babel/types';

export default function StudentDashboard({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const buttons=['Mathematics','Physics','Chemistry','Biology','Bangla','English']
    const [clicked,setClicked]=React.useState(0)
    const handleClick= (item,id) => {
        setClicked(id);
    }
    return (
            
            
                <ScrollView style={{flex:1,backgroundColor:'#EEF4F6'}}>
                    <ImageBackground source={require('../components/images/dashboardHeader.png')} style={{flex:1}}>
                        <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{marginTop:50,marginLeft:25}}>
                            <Image source={require('../components/images/drawer.png')} style={{height:20,width:20}}/>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row',marginTop: 30,marginLeft: 25}}>
                        <Text style={{color: '#380E86',fontSize: 18,fontWeight: 'bold'}}>Morning,</Text>
                        <Text style={{color: '#380E86',fontSize: 18}}> Steve</Text>
                        </View> 
                        <Text style={styles.text}>There are 500+ courses matches with</Text>
                        <Text style={styles.text}>your subject, Enjoy free & premium</Text>
                        <Text style={styles.text}>courses.</Text>
                        <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={styles.searchBar}
                        />
                    </ImageBackground>
                
                <View style={{flexDirection: 'row',marginTop: 10,marginLeft:25}}> 
                    <Text style={{color: '#380E86',fontSize: 15}}>Upcoming Class</Text>
                    <TouchableOpacity>
                        <Text style={{color: '#7C7C7C',fontSize: 15,marginLeft: 175}}>View All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <View style={styles.upcomingClassDate}>
                        <Text style={{color: '#FFFFFF',fontSize: 8}}>12th</Text>
                        <Text style={{color: '#FFFFFF',fontSize: 10,fontWeight:'bold'}}>Mar</Text>
                        <Text style={{color: '#FFFFFF',fontSize: 8}}>3.00 pm</Text>
                    </View>
                    <View style={styles.upcomingClass}>
                    <View style={{marginRight:40}}>
                            <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#380E86',fontSize: 12}}>Physics</Text>
                            <Text style={{fontSize: 12}}> (1st Part)</Text>
                            <Text style={{fontSize:12}}> Class:8</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}> 
                                <Text style={{fontSize: 10,color: '#380E86'}}>Teacher</Text>
                                <Text style={{fontSize: 10}}> Dr. Kamrul Hasan</Text>
                            </View>
                            

                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Icon name='inbox' />
                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Icon name='bell' />
                            
                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Image source={require('../components/images/Ellipse.png')} style={{marginLeft:10}}/>
                            <Icon name='clock' />
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.upcomingClassDate}>
                        <Text style={{color: '#FFFFFF',fontSize: 8}}>12th</Text>
                        <Text style={{color: '#FFFFFF',fontSize: 10,fontWeight:'bold'}}>Mar</Text>
                        <Text style={{color: '#FFFFFF',fontSize: 8}}>3.00 pm</Text>
                    </View>
                    <View style={styles.upcomingClass}>
                        <View style={{marginRight:40}}>
                            <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#380E86',fontSize: 12}}>Physics</Text>
                            <Text style={{fontSize: 12}}> (1st Part)</Text>
                            <Text style={{fontSize:12}}> Class:8</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}> 
                                <Text style={{fontSize: 10,color: '#380E86'}}>Teacher</Text>
                                <Text style={{fontSize: 10}}> Dr. Kamrul Hasan</Text>
                            </View>
                            

                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Icon name='inbox' />
                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Icon name='bell' />
                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Icon name='clock' />
                        </View>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.upcomingClassDate}>
                        <Text style={{color: '#FFFFFF',fontSize: 8}}>12th</Text>
                        <Text style={{color: '#FFFFFF',fontSize: 10,fontWeight:'bold'}}>Mar</Text>
                        <Text style={{color: '#FFFFFF',fontSize: 8}}>3.00 pm</Text>
                    </View>
                    <View style={styles.upcomingClass}>
                    <View style={{marginRight:40}}>
                            <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#380E86',fontSize: 12}}>Physics</Text>
                            <Text style={{fontSize: 12}}> (1st Part)</Text>
                            <Text style={{fontSize:12}}> Class:8</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}> 
                                <Text style={{fontSize: 10,color: '#380E86'}}>Teacher</Text>
                                <Text style={{fontSize: 10}}> Dr. Kamrul Hasan</Text>
                            </View>
                            

                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Icon name='inbox' />
                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Icon name='bell' />
                        </View>
                        <View style={styles.upcomingClassIcon}>
                            <Icon name='clock' />
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row',marginTop: 20,marginLeft:25}}> 
                    <Text style={{color: '#380E86',fontSize: 15}}>Popular Courses</Text>
                    <TouchableOpacity>
                        <Text style={{color: '#7C7C7C',fontSize: 15,marginLeft: 190}}>View All</Text>
                    </TouchableOpacity>
                    
                </View>


                {/* enrolled courses */}

                <ScrollView horizontal={true} style={{marginLeft: 25,marginTop: 5}} showsHorizontalScrollIndicator={false} > 
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:180,width:100,marginRight: 5}}>
                        <View>
                            <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                        </View>
                        <Paragraph style={{fontSize: 10,lineHeight: 12}}>The Complete Web Development</Paragraph>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10,color: '#7C7C7C'}}>by</Text><Text style={{fontSize: 10,color: '#380E86'}}> Rechard Nelson</Text>
                        </View>
                        <Rating
                        type='star'                        
                        ratingCount={5}
                        readonly={true}
                        imageSize={12}
                        startingValue={4}
                        tintColor='#EEF4F6'
                        style={{alignSelf:'flex-start',marginTop:3}}
                        
                        />
                    </TouchableOpacity>
                    
                </ScrollView>



                {/* Top Categories */}

                <Text style={{color: '#380E86',fontSize: 15,marginTop: 20,marginLeft:25}}>Top Categories</Text>
                <View style={{flexDirection: 'row',marginTop: 10,justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.push('FindTeacherScreen')}>

                    <View style={{width: 70,height: 70,backgroundColor: '#FFFFFF',borderRadius:180,justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={require('../components/images/tutor.png')}/>
                    </View>
                    <Text style={{color: '#617487',fontSize: 9,alignSelf:'center',marginTop: 5}}>Find Tutors</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 15}} onPress={()=>navigation.push('FindSkillCourseScreen')}>

                    <View style={{width: 70,height: 70,backgroundColor: '#FFFFFF',borderRadius:180,justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={require('../components/images/skills.png')}/>
                    </View>
                    <Text style={{color: '#617487',fontSize: 9,alignSelf:'center',marginTop: 5}}>Skillbase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 15}} onPress={()=>navigation.push('FindBookScreen')}>

                    <View style={{width: 70,height: 70,backgroundColor: '#FFFFFF',borderRadius:180,justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={require('../components/images/books.png')}/>
                    </View>
                    <Text style={{color: '#617487',fontSize: 9,alignSelf:'center',marginTop: 5}}>Library</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: 15}} onPress={()=>navigation.push('FindCourseScreen')}>

                    <View style={{width: 70,height: 70,backgroundColor: '#FFFFFF',borderRadius:180,justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={require('../components/images/onlineCourse.png')}/>
                    </View>
                    <Text style={{color: '#617487',fontSize: 9,alignSelf:'center',marginTop: 5}}>Find Courses</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flexDirection: 'row',marginTop: 20,marginLeft:25}}> 
                    <Text style={{color: '#380E86',fontSize: 15}}>Recommended Teacher</Text>
                    <TouchableOpacity>
                        <Text style={{color: '#7C7C7C',fontSize: 15,marginLeft: 130}}>View All</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{backgroundColor: '#FFFFFF',marginLeft: 25,borderTopStartRadius:15,marginTop:10}}>                    
                    <ScrollView horizontal={true} style={{flex:1,flexDirection:'row'}} showsHorizontalScrollIndicator={false}>
                        {buttons.map((buttonLabel,index)=>{
                            return (
                                <TouchableOpacity 
                                onPress={(item)=>handleClick(item,index)}
                                key={index}
                                style={[index === clicked?styles.buttonActive:styles.button,index === 0?{borderTopStartRadius:15}:""]}>
                                    <Text style={index === clicked?styles.text1Active:styles.text1}>{buttonLabel}</Text>
                                </TouchableOpacity>
                            )
                        })}
                        

                    </ScrollView>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{height: 105,width:80,backgroundColor: '#EEF4F6',margin: 10,borderRadius:7}}>
                            <Image source={require('../components/images/teacher.png')} style={{height: 55,width: 80}}/>
                            <Text style={{fontSize:8,alignSelf:'center',marginTop:5}}>Md. Kamrul Islam</Text>
                            <Text style={{color:'#617487',fontSize: 6,alignSelf:'center',marginTop:5}}>AIUB</Text>
                            <Rating
                            type='star'                        
                            ratingCount={5}
                            readonly={true}
                            imageSize={8}
                            tintColor='#EEF4F6'
                            // onFinishRating={this.ratingCompleted}
                            style={{marginTop:5}}
                            startingValue={4}
                            />
                        </View>
                        <View style={{height: 105,width:80,backgroundColor: '#EEF4F6',margin: 10,borderRadius:7}}>
                            <Image source={require('../components/images/teacher.png')} style={{height: 55,width: 80}}/>
                            <Text style={{fontSize:8,alignSelf:'center',marginTop:5}}>Md. Kamrul Islam</Text>
                            <Text style={{color:'#617487',fontSize: 6,alignSelf:'center',marginTop:5}}>AIUB</Text>
                            <Rating
                            type='star'                        
                            ratingCount={5}
                            readonly={true}
                            imageSize={8}
                            tintColor='#EEF4F6'
                            // onFinishRating={this.ratingCompleted}
                            style={{marginTop:5}}
                            startingValue={4}
                            />
                        </View>
                        <View style={{height: 105,width:80,backgroundColor: '#EEF4F6',margin: 10,borderRadius:7}}>
                            <Image source={require('../components/images/teacher.png')} style={{height: 55,width: 80}}/>
                            <Text style={{fontSize:8,alignSelf:'center',marginTop:5}}>Md. Kamrul Islam</Text>
                            <Text style={{color:'#617487',fontSize: 6,alignSelf:'center',marginTop:5}}>AIUB</Text>
                            <Rating
                            type='star'                        
                            ratingCount={5}
                            readonly={true}
                            imageSize={8}
                            tintColor='#EEF4F6'
                            // onFinishRating={this.ratingCompleted}
                            style={{marginTop:5}}
                            startingValue={4}
                            />
                        </View>
                        <View style={{height: 105,width:80,backgroundColor: '#EEF4F6',margin: 10,borderRadius:7}}>
                            <Image source={require('../components/images/teacher.png')} style={{height: 55,width: 80}}/>
                            <Text style={{fontSize:8,alignSelf:'center',marginTop:5}}>Md. Kamrul Islam</Text>
                            <Text style={{color:'#617487',fontSize: 6,alignSelf:'center',marginTop:5}}>AIUB</Text>
                            <Rating
                            type='star'                        
                            ratingCount={5}
                            readonly={true}
                            imageSize={8}
                            tintColor='#EEF4F6'
                            // onFinishRating={this.ratingCompleted}
                            style={{marginTop:5}}
                            startingValue={4}
                            />
                        </View>
                       
                        
                        
                    </ScrollView>
                </View>
                <Text style={{color: '#380E86',fontSize: 15,marginLeft:25,marginTop:20}}>Whats new</Text>
                <ImageBackground source={require('../components/images/dashboardFooter.png')} style={{flex:1,height:150,marginTop:10}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={require('../components/images/ad.png')} style={{marginLeft:20,height:125}}/>
                        <Image source={require('../components/images/ad.png')} style={{marginLeft:20,height:125}}/>
                    </ScrollView>
                </ImageBackground>
                <Text style={{color:'#380E86',fontSize:16,marginTop:20,alignSelf:'center'}}>Invite your friends</Text>
                <Text style={{color:'#617487',fontSize:10,marginTop:5,alignSelf:'center'}}>Refer your friends to get ahead in the queue</Text>
                <Image source={require('../components/images/dashboardFooter2.png')} style={{marginTop:10,alignSelf:'center'}}/>
                
                <View style={{marginTop:10,alignItems:'center'}}>
                    <Text style={{color:'#617487',fontSize:11}}>You can earn rewards for referring up to 3 </Text>
                    <Text style={{color:'#617487',fontSize:11}}>new users to Google Pay, subject to </Text>
                    <Text style={{color:'#617487',fontSize:11}}>availability.</Text>
                </View>
                <View style={styles.footer}>
                        <View style={{flex:1.5,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color: '#617487',fontSize:14}}>poralekha100</Text>
                        </View>
                        <View style={{flex:1,backgroundColor:'#380E86',justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity>
                                <Text style={{color: '#FFFFFF',fontSize:14}}>Share Code</Text>
                            </TouchableOpacity>
                            
                        </View>
                </View>
                {/* <ButtonGroup
                onPress={()=>setSelectedIndex()}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 100}}
                /> */}
                </ScrollView>
                

                       

        
    )
}

const styles=StyleSheet.create({
    text: {
        fontSize: 11,
        marginLeft: 25,
        fontFamily: 'Montserrat',
        

    },
    searchBar: {
        
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 10
    },
    item: {
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        height: 50,
        borderRadius: 10,
        overflow: 'hidden'
        
        
      },
      title: {
        fontSize: 32,
      },
      tinyLogo: {
          width: 95,
          height: 95,
          borderRadius: 10
      },
      upcomingClass: {
        flex: 5,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        padding: 10
      },
      upcomingClassIcon: {
        backgroundColor: '#F3F3F3',
        height: 25,
        width:25,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        marginRight: 5
      },
      upcomingClassDate: {
        flex: 1,
        backgroundColor: '#380E86',
        justifyContent: 'center',
        alignItems: 'center'
      },
      button: {
          height: 40,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center'
          
      },
      buttonActive: {
        height: 40,
        width: 100,
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
    footer: {
        flexDirection:'row',
        width: 240,
        height:50,
        borderRadius:10,
        marginTop:20,
        marginBottom:100,
        overflow:'hidden',
        alignSelf:'center'
    }
});