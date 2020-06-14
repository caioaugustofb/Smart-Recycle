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
   ActivityIndicator,

 } from 'react-native';
import Cad2Screen from './Cad2';
import  Firebase  from 'react-native-firebase';



function CadScreen({ navigation }) {
  const userId = Firebase.auth().currentUser.uid;
  console.log('cad:',userId);
  
  const config = {
    apiKey: "AIzaSyATmgRvqUsACU5vOu30bXuRt4j_-bk4FM0",
    authDomain: "smrcle.firebaseapp.com",
    databaseURL: "https://smrcle.firebaseio.com",
    projectId: "smrcle",
    storageBucket: "smrcle.appspot.com",
    messagingSenderId: "2074052194",
    appId: "1:2074052194:web:c569f54b174f6619d8733b",
    measurementId: "G-H1SJZVM1L6"
};

if (!Firebase.apps.length) {
  Firebase.initializeApp(config);
}
 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [activity, setActivity] = React.useState(false);
  
  async function handleSubmit(){
    setActivity(false);
    try {
      setActivity(true);
         await Firebase.auth()
         .createUserWithEmailAndPassword( email, password )
          
         Firebase.auth()
         .signInWithEmailAndPassword( email, password )
         navigation.navigate(name="Cad2", component={Cad2Screen})
        console.log('usuario logado')
     } catch (err) {
         alert(err)
         setActivity(false);
     }
    } 
    

  return (
<View style={styles.all}>
    
    <ScrollView>
    <KeyboardAvoidingView>  

      <Image
      
        style={styles.stretch}
        source={require('./NUM1.png')}/>

        <Text style={{fontWeight: "bold", marginTop: "10%",}}>Endereco de email:</Text>  
       <TextInput value={email} onChangeText={setEmail} keyboardType={'email-address'} style={styles.Tinput}/> 

            <Text style={{fontWeight: "bold", }}>Senha:</Text> 
       <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} textContentType="password" style={styles.Tinput}/>


        <TouchableOpacity onPress={() => handleSubmit()}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>Proximo</Text>
                 <ActivityIndicator animating={activity} style={{marginTop: 19,}} size="large" color="#0000ff" />
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
    backgroundColor: "#7EEED9",
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