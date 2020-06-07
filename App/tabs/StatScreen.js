import React from 'react';
import {   
  View, 
  Header, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  Button,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Image,
} from 'react-native';


function StatScreen ()  {
  return (
    <View style={styles.all}>

    <View style={styles.tab}>
        <Image 
        style={styles.tabimage}
        source={require('./tab.png')}/>
    </View>

<ScrollView >


</ScrollView>  
</View>  
);
}
const styles = StyleSheet.create({
all: {
flex: 1,
backgroundColor: "#40F1C6",
alignItems: 'center',
color: '#000000',
},
//mostrador de cima
Image: {
width: 100,
alignItems: 'center',
backgroundColor: '#fff',
marginBottom: 30,
height: 100,
borderRadius: 100,
borderColor: '#000',
borderWidth:1,
marginLeft: '8%',
marginTop: '1%',
},
top: {
flexDirection: 'row',
borderBottomWidth:1,
width: "175%"
},
// mostrador do meio
mid: {
flexDirection: 'row',
borderBottomWidth:1,
width: "175%"
},
mid2: {
flexDirection: 'row',
width: "175%",
marginBottom:10,
},
Image2: {
width: 100,
alignItems: 'center',
backgroundColor: '#000',
marginBottom: 20,
height: 100,
borderRadius: 10,
borderWidth:1,
marginLeft: '3.5%',
marginBottom: 50,
},
//ultimo mostrador
bottom: {
flexDirection: 'row',
width: "175%",
},
Image3: {
width: 100,
alignItems: 'center',
marginBottom: 5,
height: 100,
marginLeft: '3.5%',
marginTop: "3%",
},
//imagem
tab: {
height: '20%',
backgroundColor: '#000',
paddingLeft: '40%',
},
tabimage: {
marginTop: '20%',
},
});
export default StatScreen;