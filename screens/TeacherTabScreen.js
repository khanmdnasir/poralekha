import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WishList from './WishListScreen';
import NotificationScreen from './NotificationScreen';
import InboxScreen from './InboxScreen';
import SettingsScreen from './SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import MyClasses from './MyClasses';
import MyCourses from './MyCourses';
import MyBooks from './MyBooks';
import SavedTeachers from './SavedTeachers';
import Payment from './Payment';
import InviteFriends from './InviteFriends';
import ReportProblem from './ReportProblem';
import HelpDesk from './HelpDesk';
import AddPaymentMethod from './AddPaymentMethod';
import PaymentHistory from './PaymentHistory';
import EditProfile from './EditProfile';
import EditLanguage from './EditLanguage';
import EditAccountInformation from './EditAccountInformation';
import ChangePassword from './ChangePassword';
import EditLiveClass from './EditLiveClass';
import ChangeTeacher from './ChangeTeacher';
import TeacherDetails from './TeacherDetails';
import CancelledCourseDetails from './CancelledCourseDetails';
import CartScreen from './CartScreen';
import BooksDetails from './BooksDetails';
import FindBookScreen from './FindBookScreen';
import FindCourseScreen from './FindCourseScreen';
import FindSkillCourseScreen from './FindSkillCourseScreen';
import FindTeacherScreen from './FindTeacherScreen';
import TeacherDashBoard from './TeacherDashBoard';
import AddLiveClass from './AddLiveClass';



export const HomeStack = ()=>{
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="TeacherDashBoard" component={TeacherDashBoard} />
      <Stack.Screen name="MyProfile" component={ProfileScreen} />
      <Stack.Screen name="MyClasses" component={MyClasses} />
      <Stack.Screen name="MyCourses" component={MyCourses} />    
      <Stack.Screen name="InviteFriends" component={InviteFriends} />
      <Stack.Screen name="ReportProblem" component={ReportProblem} />
      <Stack.Screen name="HelpDesk" component={HelpDesk} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditLanguage" component={EditLanguage} />
      <Stack.Screen name="EditAccountInformation" component={EditAccountInformation} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditLiveClass" component={EditLiveClass} />
      <Stack.Screen name="CancelledCourseDetails" component={CancelledCourseDetails} />
      <Stack.Screen name="AddLiveClass" component={AddLiveClass} />
    </Stack.Navigator>
  )
}
export default function TeacherTabScreen() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
      initialRouteName="Home"
      
      screenOptions={{
        tabBarActiveTintColor: '#380E86',
        headerShown: false,

      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard" color={color} size={size} />
          ),
          tabBarBadge: 3
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3
          
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <Icon name="inbox" color={color} size={size} />
          ),
          tabBarBadge: 3
        }}
      />
       <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}
