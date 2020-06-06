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
 import Cad2Screen from './Cad2';



 //style={{marginBottom: 10,}}
 //onPress={Keyboard.dismiss}

function CadScreen({ navigation }) {

  return (

    


<View style={styles.all}>
    
    <ScrollView>
    <KeyboardAvoidingView>  

      <Image
        style={styles.stretch}
        source={require('./NUM1.png')}/>

            <Text style={{fontWeight: "bold", marginTop: "10%",}}>Nome da Empresa ou Comprador:</Text>  
       <TextInput style={styles.Tinput}/> 

            <Text style={{fontWeight: "bold", }}>Endereco:</Text> 
       <TextInput style={styles.Tinput}/>




       <View style={styles.subText}>
           
        <Text style={{fontWeight: "bold", marginRight: 60, }}>Complemento:</Text>  
        <Text style={{fontWeight: "bold", marginLeft: 33, }}>CNPJ ou CPF:</Text> 
        
       </View>



    <View style={{flexDirection: 'row',}}>
        <TextInput style={styles.subInput}/>
        <TextInput style={styles.subInput}/>
    </View>



    <Text style={{fontWeight: "bold",}}>Celular:</Text>  
       <TextInput style={styles.phone}/> 

            <Text style={{fontWeight: "bold",}}>Telefone:</Text> 
       <TextInput style={styles.phone}/>

       


        <TouchableOpacity onPress={() => navigation.navigate(name="Cad2", component={Cad2Screen})}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>Proximo</Text>
             </View>

        </TouchableOpacity>

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
    marginLeft: 100,
    marginTop: "15%"
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
    width: 120,
    marginBottom: 12,
    height: 30,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#000000",
    borderRadius: 7,
    flexDirection: 'row',
    marginRight: 60,
    
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
phone: {
    width: 180,
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