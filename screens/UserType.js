import React,{useState} from 'react';
import { View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image } from 'react-native';

// var width = Dimensions.get('window').width;

const image = require("../components/images/background-overlay.png");

export default function UserType({ navigation }) {
    const[clicked,setClicked]=useState(null)
    const [userType, setUserType] = React.useState();

    return (
        <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={{flex:2}}>
                        <Text style={styles.text}>Select who you are</Text>
                    </View>
                        
                    
                
                <View style={styles.userType}>
                    <View style={{flexDirection:'row',marginTop:70,justifyContent:'center'}}>
                    
                    <TouchableOpacity
                        
                        onPress={()=>setClicked(0)}
                        key={0}
                        style={{marginRight:20,}}
                    >
                        
                        <Image
                            source={require('../components/images/TeacherGroup.png')}
                            
                            style={0===clicked?{borderRadius:15,borderWidth:1.5,borderColor:'#FFFFFF'}:{}}
                        />
                        {0===clicked?<Image source={require('../components/images/userType.png')} style={{position:'absolute',top:-7,alignSelf:'center'}}/>:<View></View>}
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        
                        onPress={()=>setClicked(1)}
                        key={1}
                        
                    >
                        <Image
                            source={require('../components/images/StudentGroup.png')}
                            
                            style={1===clicked?{borderRadius:15,borderWidth:1.5,borderColor:'#FFFFFF'}:{}}
                        />
                        {1===clicked?<Image source={require('../components/images/userType.png')} style={{position:'absolute',top:-7,alignSelf:'center'}}/>:<View></View>}
                    </TouchableOpacity>
                    </View>
                    {null===clicked?<View></View>:<TouchableOpacity
                        style={styles.button}
                        onPress={() => {setUserType('student');navigation.push('SignUp')}}
                    >
                        <Text style={{color:'#380E86',fontSize:14}}>Continue</Text>
                    </TouchableOpacity>
                    }
                    
                </View>
                
                
                
                </ImageBackground>       
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        
        
      },
      image: {
        flex: 1,
        
        
      },
      text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 22,
        fontWeight: "normal",
        marginTop: 100,
        alignSelf:'center'
       
        
      },
      button: {
        
        marginTop: 200,
        
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#380E86'

      },
      userType: {
          flex: 6,
          
          backgroundColor: '#380E86',
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
         
          paddingLeft:30,
          paddingRight:30,
          
         
          
          

      }
      
     
});