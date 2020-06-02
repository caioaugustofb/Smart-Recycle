import * as React from 'react';
import 'react-native-gesture-handler';
import { View,
   TextInput,
   Keyboard,
   StyleSheet,
   TouchableOpacity,
   Text,
   ScrollView,
   Button,
   TouchableWithoutFeedback,
   KeyboardAvoidingView,
   Image,
 

 } from 'react-native';
 import Cad3Screen from './Cad3';
 
 //style={{marginBottom: 10,}}
 //onPress={Keyboard.dismiss}

function CadScreen({ navigation }) {
  return (



<View style={styles.all}>
    
    <ScrollView>
    <KeyboardAvoidingView>  

      <Image
        style={styles.stretch}
        source={require('./NUM2.png')}/>

            <Text style={{fontWeight: "bold", marginTop: "10%",}}>Numero do cartao:</Text>  
       <TextInput style={styles.Tinput}/> 

            <Text style={{fontWeight: "bold",}}>Nome do proprietario:</Text> 
       <TextInput style={styles.Tinput}/>




       <View style={styles.subText}>
           
        <Text style={{fontWeight: "bold", marginRight: 30, }}>Validade:</Text>  
         
        
       </View>



    <View style={{flexDirection: 'row',}}>
        <TextInput style={styles.subInput}/>
        <TextInput style={styles.subInput}/>
    </View>



    <Text style={{fontWeight: "bold",}}>Codigo de seguranca:</Text>  
       <TextInput style={styles.trdinput}/> 

            <Text style={{fontWeight: "bold",}}>Quantidade de sensores:</Text> 
       <TextInput style={styles.trdinput}/>

       
<View style={{flexDirection: 'row',}}>

        <TouchableOpacity onPress={() => navigation.navigate(name="Cad", component={CadScreen})}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>Anterior</Text>
             </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(name="Cad3", component={Cad3Screen})}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>Proximo</Text>
             </View>

        </TouchableOpacity>

</View>

     </KeyboardAvoidingView> 
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
  container: {
    flex: 1,
},
  buttons: {
    marginTop: 10,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#000000',
    marginBottom: 20,
    height: 30,
    borderRadius: 7,
    marginLeft: 15,
},
  buttonText: {
    marginTop: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
},
subText: {
    width: 170,
    marginBottom: 1,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",     
    flexDirection: 'row',  
},
subInput: {
    width: 50,
    marginBottom: 12,
    height: 30,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#000000",
    borderRadius: 7,
    flexDirection: 'row',
    marginRight: 5,
    
},
Tinput: {
    width: 350,
    alignItems: 'center',
    marginBottom: 12,
    height: 30,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#000000",
    borderRadius: 7,
},
trdinput: {
    width: 50,
    alignItems: 'center',
    marginBottom: 12,
    height: 30,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#000000",
    borderRadius: 7,
},
stretch: {
  width: 350,
  height: 90,
  resizeMode: 'stretch',
  marginTop: "10%",
},
    
});
export default CadScreen;