import React,{useState} from 'react';
import { ScrollView,View,Text,ImageBackground, StyleSheet, TouchableOpacity,Dimensions, Image, SafeAreaView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AuthContext } from '../components/context';
const image = require("../components/images/background-overlay.png");

export default function TermsConditions({ navigation }) {
  const [isSelected, setSelection] = useState(true);
  const { SignIn } = React.useContext(AuthContext);
    return (

            <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bimage}>
            <View style={{flex: 1,flexDirection: 'row'}}>
            <TouchableOpacity
                    style={{marginTop: 30,marginLeft: 20}}
                    onPress={()=>{navigation.goBack()}}
                >
                    <Image
                        source={require('../components/images/Vector.png')}
                        
                        
                    />
                </TouchableOpacity>
                
                <Text
                    style={styles.text}
                    onPress={()=> SignIn()}
                >
                    Terms & Conditions
                </Text>  
            </View>
            <View style={{flex: 5,backgroundColor: '#EEF4F6'}}>
                <ScrollView>
                <Paragraph style={{margin: 25,marginTop:25,fontSize: 12,lineHeight: 22,fontFamily: 'Montserrat'}}>If your website or app has the option to recieve payments then including a Terms & Conditions is required by law. We will make sure that your Terms & Conditions ensures that you stay in line with your legal obligations. For any app you are developing you will need a Terms & Conditions to launch it. Termify can help you generate the best for the case and get your app ready for review. Many platforms like facebook are requiring users that are submitting their official apps to submit a Terms & Conditions even if you are not collecting any data from your users. Generate your Terms & Conditions and get your unique link to submit to those platforms. Some third party services require you to have a Terms & Conditions The use of ads, analytics or third party payments usually ask you for a Terms & Conditions. Google Ads might be the one asking for your Terms & Conditions, or Amazon, and many more If you want to host your customized Terms & Conditions on your site, you can just download the Terms & Conditions and give them the use you want. We will create your customized Terms & Conditions in a variety of formats: PDF, DOCX, TXT & HTML files.</Paragraph>
                </ScrollView>
                
            </View>
            <View style={{flex:1.5,backgroundColor: '#FFFFFF'}}>
              <View style={{marginBottom: 20,marginTop: 20,marginLeft: 25}}>
              <BouncyCheckbox
                size={25}
                fillColor="#380E86"
                unfillColor="#FFFFFF"
                text="I’m agree with this terms & conditions"
                iconStyle={{ borderColor: "black" }}
                textStyle={{ fontFamily: "Montserrat",fontSize: 12, lineHeight: 22,color: 'black'}}
                
                onPress={()=>setSelection(!isSelected)}
                
              />
                    {/* <Text style={styles.remember}>I’m agree with this terms & conditions</Text> */}
                </View>
                <View style={{flexDirection: 'row',marginTop: 10}}>
                  {isSelected?(
                  <TouchableOpacity
                  style={styles.button3}
                  
                  disabled={true}
                >

                  <Text style={{color: '#FFFFFF'}}>Accept & Get Started</Text>
                </TouchableOpacity>
                  ):
                  (
                    <TouchableOpacity
                    style={styles.button1}
                    onPress={()=>SignIn()}
                    
                  >

                    <Text style={{color: '#FFFFFF'}}>Accept & Get Started</Text>
                  </TouchableOpacity>
                  )
                  }
                  
                  <TouchableOpacity
                    style={styles.button2}
                  >
                    <Text>Disagree</Text>
                  </TouchableOpacity>
                </View>
            </View>           
            </ImageBackground> 
            </SafeAreaView>
        
        
    )
}

const styles=StyleSheet.create({
    
      bimage: {
        flex:1,
        
        
        
        
      },
      checkbox: {
        marginLeft: 25,
        marginTop: 13,
        
    },
    remember: {
      color: '#111111',
      fontSize: 12,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      lineHeight: 22,
      fontWeight: "normal",
      marginTop: 20,
     
      
    },
      text: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 30,
        fontWeight: "normal",
        marginLeft: 20,
        marginTop: 20,
       
        
      },
      button1: {
        
            
            marginLeft: 25,
            borderRadius: 7,
            backgroundColor: '#380E86',
            justifyContent: 'center',
            alignItems: 'center',
            width: 170,
            height: 50,
            
            
    
          },
          button3: {
        
            
            marginLeft: 25,
            borderRadius: 7,
            backgroundColor: '#D6D6D6',
            justifyContent: 'center',
            alignItems: 'center',
            width: 170,
            height: 50,
            
            
    
          },
          button2: {
        
            
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 7,
            backgroundColor: '#EEF4F6',
            width: 125,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            
    
          },
          
          
      
      
     
});