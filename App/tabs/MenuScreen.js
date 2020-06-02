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


function MenuScreen ()  {
  return (

     
     <View style={styles.all}>
      <ScrollView style={{flex: 1,}}>
       <Text>
         pirocajhafhskadfhkjaslfhalskjdfhalkjsdhfalksdjhf
       </Text>
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

    
});


export default MenuScreen;