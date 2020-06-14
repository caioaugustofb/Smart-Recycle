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
 import Cad3Screen from './Cad3';
 import  Firebase  from 'react-native-firebase';
 

 

function CadScreen({ navigation }) {

  const userId = Firebase.auth().currentUser.uid;
  console.log('CAD2:',userId);
  
  const [empresa, setEmpresa] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [complemento, setComplemento] = React.useState('');
  const [coc, setCoc] = React.useState('');
  const [cel, setCel] = React.useState('');
  const [tel, setTel] = React.useState('');
  const [activity, setActivity] = React.useState(false);
 

  async function writeUserdata() {
    
    try{
      setActivity(true);
 const userId = Firebase.auth().currentUser.uid;
     Firebase.database().ref(`UserList/${userId}`).set({
        userId,
        empresa,
        endereco,
        complemento,
        coc,
        cel,
        tel,
      })
      navigation.navigate(name="Cad3", component={Cad3Screen})
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
        source={require('./NUM2.png')}/>

<Text style={{fontWeight: "bold", }}>Nome da Empresa ou Comprador:</Text>  
       <TextInput value={empresa} onChangeText={setEmpresa} style={styles.Tinput}/> 

            <Text style={{fontWeight: "bold", }}>Endereco:</Text> 
       <TextInput value={endereco} onChangeText={setEndereco} style={styles.Tinput}/>



       <View style={styles.subText}>
           
        <Text style={{fontWeight: "bold", marginRight: 60, }}>Complemento:</Text>  
        <Text style={{fontWeight: "bold", marginLeft: 33, }}>CNPJ ou CPF:</Text> 
        
       </View>



    <View style={{flexDirection: 'row',}}>
        <TextInput value={complemento} onChangeText={setComplemento} style={styles.subInput}/>
        <TextInput value={coc} onChangeText={setCoc} keyboardType={'number-pad'} style={styles.subInput}/>
    </View>



    <Text style={{fontWeight: "bold",}}>Celular:</Text>  
       <TextInput value={cel} onChangeText={setCel} keyboardType={'number-pad'} style={styles.phone}/> 

            <Text  style={{fontWeight: "bold",}}>Telefone:</Text> 
       <TextInput value={tel} onChangeText={setTel} keyboardType={'number-pad'} style={styles.phone}/>

       
<View style={{flexDirection: 'row',}}>

        <TouchableOpacity onPress={() => navigation.navigate(name="Cad", component={CadScreen})}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>Anterior</Text>
             </View>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => writeUserdata()}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>Proximo</Text>               
             </View>

        </TouchableOpacity>
<ActivityIndicator animating={activity} style={{marginTop: 19,}} size="large" color="#0000ff" />
</View>

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
});
export default CadScreen;