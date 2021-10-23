import React from 'react'
import { View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import{ AuthContext } from '../components/context';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';


export default function TeacherDrawerContent(props) {
    const { SignOut } = React.useContext(AuthContext);
    return (
        <View style={{flex:1,backgroundColor: '#380E86'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>johndoe@gmail.com</Caption>
                                <Caption style={styles.caption}>Id: 024558456</Caption>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{props.navigation.navigate('MyProfile')}}

                        >
                                <Icon name="user-circle" color='#FFFFFF' size={15}/>
                                <Text style={{color: '#FFFFFF',fontSize: 15,fontStyle: 'normal'}}> My Profile</Text>
                        </TouchableOpacity>
            
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                    
                        <DrawerItem 
                            
                            icon={() => (
                                <Image source={require('../components/images/iconclass.png')}/>
                                
                                // <Icon 
                                // name="users" 
                                // color='#FFFFFF'
                                
                                // />
                            )}
                            label="My Classes"
                            labelStyle={{color: '#FFFFFF',fontSize:16}}
                            onPress={() => {props.navigation.navigate('MyClasses')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../components/images/iconcourse.png')}/>
                            )}
                            label="My Courses"
                            labelStyle={{color: '#FFFFFF',fontSize:16}}
                            onPress={() => {props.navigation.navigate('MyCourses')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../components/images/iconstudentrequest.png')}/>
                                
                            )}
                            label="Student Request"
                            labelStyle={{color: '#FFFFFF',fontSize:16}}
                            onPress={() => {props.navigation.navigate('StudentRequest')}}
                        />
                        </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Image source={require('../components/images/iconmyearnings.png')}/>
                            )}
                            label="My Earnings"
                            labelStyle={{color: '#FFFFFF',fontSize:16}}
                            onPress={() => {props.navigation.navigate('MyEarnings')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../components/images/iconstatistics.png')}/>
                            )}
                            label="Statistics"
                            labelStyle={{color: '#FFFFFF',fontSize:16}}
                            onPress={() => {props.navigation.navigate('Statistics')}}
                        />
                    </Drawer.Section>
                    
                    <Drawer.Section style={styles.drawerSection}>
                                <DrawerItem
                                    icon={({color, size}) => (
                                        <Image source={require('../components/images/iconinvitefriend.png')}/>
                                    )}
                                    label="Invite Friends"
                                    labelStyle={{color: '#FFFFFF',fontSize:16}}
                                    onPress={() => {props.navigation.navigate('InviteFriends')}}
                                />
                                <DrawerItem
                                    icon={({color, size}) => (
                                        <Image source={require('../components/images/iconhelpdesk.png')}/>
                                    )}
                                    label="Help Desk"
                                    labelStyle={{color: '#FFFFFF',fontSize:16}}
                                    onPress={() => {props.navigation.navigate('HelpDesk')}}
                                />
                                
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Image source={require('../components/images/iconlogout.png')}/>
                    )}
                    label="Sign Out"
                    labelStyle={{color: '#FFFFFF',fontSize:16}}
                    onPress={() => {SignOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: '#FFFFFF',
      fontStyle: 'normal'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: '#FFFFFF',
      fontStyle: 'normal'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#8A4AFF',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#8A4AFF',
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 60,
        marginTop: 10

    },
    
  });
