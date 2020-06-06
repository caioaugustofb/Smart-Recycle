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
    <ScrollView>
    <View style={styles.all}>
      
     
      <Text>
        GRAFICOS AQUI
      </Text>
   
    </View>
   </ScrollView>  
    
  );
}
const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#40F1C6",
    alignItems: 'center',
},
  Image: {
    height: '10%',
    width: '100%',
    marginTop: '7%',
    backgroundColor: "#000",
    paddingTop: 10, 
},
});
export default StatScreen;