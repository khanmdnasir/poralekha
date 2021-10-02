import React from 'react'
import { View, StyleSheet,TouchableOpacity } from 'react-native';
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


export default function DrawerContent(props) {
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
                                <Icon 
                                name="users" 
                                color='#FFFFFF'
                                
                                />
                            )}
                            label="My Classes"
                            labelStyle={{color: '#FFFFFF'}}
                            onPress={() => {props.navigation.navigate('MyClasses')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="youtube" 
                                color='#FFFFFF'
                                
                                />
                            )}
                            label="My Courses"
                            labelStyle={{color: '#FFFFFF'}}
                            onPress={() => {props.navigation.navigate('MyCourses')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book" 
                                color='#FFFFFF'
                                
                                />
                            )}
                            label="My Books"
                            labelStyle={{color: '#FFFFFF'}}
                            onPress={() => {props.navigation.navigate('MyBooks')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="chalkboard-teacher" 
                                color='#FFFFFF'
                                
                                />
                            )}
                            label="My Teachers"
                            labelStyle={{color: '#FFFFFF'}}
                            onPress={() => {props.navigation.navigate('SavedTeachers')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                name="clipboard" 
                                color='#FFFFFF'
                                
                                />
                            )}
                            label="WishList"
                            labelStyle={{color: '#FFFFFF'}}
                            onPress={() => {props.navigation.navigate('WishList')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="money-bill" 
                                color='#FFFFFF'
                                
                                />
                            )}
                            label="Payment"
                            labelStyle={{color: '#FFFFFF'}}
                            onPress={() => {props.navigation.navigate('Payment')}}
                        />
                    </Drawer.Section>
                    
                    <Drawer.Section style={styles.drawerSection}>
                                <DrawerItem
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="share" 
                                        color='#FFFFFF'
                                        
                                        />
                                    )}
                                    label="Invite Friends"
                                    labelStyle={{color: '#FFFFFF'}}
                                    onPress={() => {props.navigation.navigate('InviteFriends')}}
                                />
                                <DrawerItem
                                    icon={({color, size}) => (
                                        <Icon 
                                        name="question" 
                                        color='#FFFFFF'
                                        
                                        />
                                    )}
                                    label="Help Desk"
                                    labelStyle={{color: '#FFFFFF'}}
                                    onPress={() => {props.navigation.navigate('HelpDesk')}}
                                />
                                
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="sign-out-alt" 
                        color='#FFFFFF'
                        
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{color: '#FFFFFF'}}
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
        borderTopColor: '#f4f4f4',
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

    }
  });
