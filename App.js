import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen'
import SelectLanguge from './screens/SelectLanguge'
import UserType from './screens/UserType'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import SignUpCongrats from './screens/SignUpCongrats'
import ForgotPassword from './screens/ForgotPassword'
import ForgotPassSuccess from './screens/ForgotPassSucess'
import CreateNewPass from './screens/CreateNewPass'
import ForgotPassMobile from './screens/ForgotPassMobile'
import ForgotPassMobileSuccess from './screens/ForgotPassMobileSuccess'
import PasswordSetSuccess from './screens/PasswordSetSuccess'
import PhoneVerification from './screens/PhoneVerification'
import PhoneVerificationSuccess from './screens/PhoneVerificationSuccess'
import UploadProfile from './screens/UploadProfile'
import IdVerification from './screens/IdVerification'
import IdVerificationSuccess from './screens/IdVerificationSuccess'

import TermsConditions from './screens/TermsConditions';
import { AuthContext } from './components/context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import TeacherDrawerContent from './screens/TeacherDrawerContent';
import TeacherTabScreen from './screens/TeacherTabScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  
  const [isLoading,setIsLoading]=React.useState(true);
  const [userToken,setUserToken]=React.useState(null);
  const [isFirst,setIsFirst]=React.useState(true)
 const [user,setUser]=React.useState({
   username:'',
   email:'',
   phone:'',
   password:'',
   confirm_password:'',
   userType:'teacher'
 })
  const authContext=React.useMemo(() => {
    return {
      SignIn: () => {
        setIsLoading(false);
        setUserToken('abcd');
      },
      SignUp: () => {
        setIsLoading(false);
        setUserToken('abcd');
      },
      SignOut: () => {
        
        setUserToken(null);
        setIsFirst(false);
        

      }
    }
  },[])
  
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      
    },2000)
  },[])

    if(isLoading){
      return <SplashScreen/>
    }
    return (
      
      <AuthContext.Provider value={authContext}>

      <NavigationContainer>
        {userToken?(
          
         [ (user.userType==='teacher'?
          <Drawer.Navigator drawerContent={props => <TeacherDrawerContent {...props}/>} screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Dashboard" component={TeacherTabScreen}  />      
          </Drawer.Navigator>:
          
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Dashboard" component={MainTabScreen}  />      
          </Drawer.Navigator>)]

          
        ):(
          
          <Stack.Navigator >
            {isFirst?(
              <Stack.Screen
              name="SelectLanguage"
              component={SelectLanguge}
              options={{headerShown: false}}
              
            />
            ):(({ navigation })=>navigation.push('SignIn'))}
            
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="UserType"
              component={UserType}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="TeacherSignUp"
              component={SignUp}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="CreateNewPass"
              component={CreateNewPass}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="ForgotPassSuccess"
              component={ForgotPassSuccess}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="ForgotPassMobile"
              component={ForgotPassMobile}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="ForgotPassMobileSuccess"
              component={ForgotPassMobileSuccess}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="PhoneVerification"
              component={PhoneVerification}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="PhoneVerificationSuccess"
              component={PhoneVerificationSuccess}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="UploadProfile"
              component={UploadProfile}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="IdVerification"
              component={IdVerification}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="IdVerificationSuccess"
              component={IdVerificationSuccess}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="TermsConditions"
              component={TermsConditions}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="PasswordSetSuccess"
              component={PasswordSetSuccess}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="SignUpCongrats"
              component={SignUpCongrats}
              options={{headerShown:false}}
            />
            
            

          </Stack.Navigator>
        )
        }
      </NavigationContainer>
      </AuthContext.Provider>
      
    )
  
}

export default App;
