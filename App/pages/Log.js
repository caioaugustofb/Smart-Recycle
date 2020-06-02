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
   Header,
} from 'react-native';
import CadScreen from './Cad';
import HomeScreen from '../tabs/HomeScreen';

 //onPress={Keyboard.dismiss}

function LogScreen({ navigation }) {
  return (



<View style={styles.all}>
    
    <ScrollView style={styles.container}>
    <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>  

        <View style={styles.Image}>
            <Text style={{fontWeight: "bold",color:'#ffffff', marginTop: "45%",  }}>Icone</Text>
        </View>

            <Text style={{fontWeight: "bold", marginTop: "25%", marginLeft: "20%",}}>E-mail</Text>  
       <TextInput style={styles.Tinput}/> 

            <Text style={{fontWeight: "bold", marginLeft: "20%",}}>Senha</Text> 
       <TextInput secureTextEntry={true} textContentType="password"  style={styles.Tinput}/>

        <TouchableOpacity onPress={() => navigation.navigate(name="Home", component={HomeScreen})}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>LOGIN</Text>
             </View>

        </TouchableOpacity>

        <Button
            onPress={() => {
                alert('N tem ainda');
            }}
            title="Esqueceu a senha?"
            style={{fontSize:1,}}
            />

    
        <Text style={{marginLeft: "30%",}}>
            Ainda nao tem seu produto?
        </Text>

    <View style={styles.subText}>
        <Text style={{marginTop:11,}}>
            adquira ja e faca seu cadastro 
        </Text>
        <Button
            onPress={() => {
                navigation.navigate(name="Cad", component={CadScreen});
            }}
            title="aqui"
            style={{fontSize:1,}}
            />
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
    width: "100%",
},
  buttons: {
    marginTop: 10,
    width: "30%",
    alignItems: 'center',
    backgroundColor: '#000000',
    marginBottom: 20,
    height: 30,
    borderRadius: 7,
    marginLeft: "35%",
},
  buttonText: {
    marginTop: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
},
subText: {
    marginLeft: 65,
    width: 250,
    height: 250,
    flexDirection: 'row',
    marginLeft: "23%",   
},
Tinput: {
    width: "60%",
    alignItems: 'center',
    marginBottom: 12,
    height: 30,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#000000",
    borderRadius: 7,
    marginLeft: "20%",
},
Image: {
    marginTop: "40%",
    width: 150,
    alignItems: 'center',
    backgroundColor: '#000000',
    marginBottom: 20,
    height: 150,
    borderRadius: 7,
    marginLeft: 100,
    borderRadius: 100,
    marginLeft: "32.5%",
},
    
});
export default LogScreen;