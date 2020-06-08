
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
   useState,
   ActivityIndicator
} from 'react-native';
import CadScreen from './Cad';
import HomeScreen from '../tabs/HomeScreen';
import  Firebase  from 'react-native-firebase';


 
function LogScreen({ navigation }) {
    
     const userId = Firebase.auth().currentUser.uid;
        console.log('login:',userId);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [activity, setActivity] = React.useState(false);
    

 async function handleSubmit(){

    
    setActivity(false);

    try {
        setActivity(true);
     console.log('try:',activity);

         await Firebase.auth().signInWithEmailAndPassword( email, password )
       
         navigation.navigate(name="Home", component={HomeScreen});
         
     } catch (err) {
         setActivity(false);
         alert('Email ou Senha Incorretos')
         console.log('try2:',activity);
     }
    }

  return (
<View style={styles.all}>
    
    <ScrollView style={styles.container}>
    <KeyboardAvoidingView>  

        <View style={styles.Image}>
            <Text style={{fontWeight: "bold",color:'#ffffff', marginTop: "45%",  }}>Icone</Text>
        </View>

            <Text style={{fontWeight: "bold", marginTop: "25%", marginLeft: "20%",}}>E-mail</Text>  
            <TextInput value={email} onChangeText={setEmail} keyboardType={'email-address'} style={styles.Tinput}/>

            <Text style={{fontWeight: "bold", marginLeft: "20%",}}>Senha</Text> 
       <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} textContentType="password"   style={styles.Tinput}/>

        <TouchableOpacity onPress={() => handleSubmit()}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>LOGIN</Text>
                 <ActivityIndicator animating={activity} style={{marginTop: 19,}} size="large" color="#0000ff" />
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
    marginBottom: 30,
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
    marginTop: "35%",
    width: 150,
    alignItems: 'center',
    backgroundColor: '#000000',
    marginBottom: 5,
    height: 150,
    borderRadius: 7,
    marginLeft: 100,
    borderRadius: 100,
    marginLeft: "30%",
},
    
});
export default LogScreen;