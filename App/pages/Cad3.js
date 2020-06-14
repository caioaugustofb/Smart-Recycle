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
   backgroundImage,
   ActivityIndicator,

 } from 'react-native';
 import LogScreen from './Log';
 import ImagePicker from 'react-native-image-picker';


function Cad3Screen({ navigation }) {

  const [image, setImage] = React.useState('');
  const [activity, setActivity] = React.useState(false);

  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
  
 function pickImage()  {
  setActivity(true);
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        setActivity(false);
        alert('You cancelled image picker 😟');
      } else if (response.error) {
        setActivity(false);
        alert('And error occured: ', response.error);
      } else {
        setActivity(true);
        const source = { uri: response.uri };
        setImage({
          imgSource: source
        });
        console.log(source);
      }
    });
  };

  return (


<View style={styles.all}>
    
    <ScrollView>
    <KeyboardAvoidingView>  

    <Image
        style={styles.stretch}
        source={require('./NUM3.png')}/>

   <Image
        style={styles.img}
        />


        <TouchableOpacity onPress={() => (pickImage())} style={styles.Image}>
            <Text style={{fontWeight: "bold",color:'#ffffff', marginTop: "45%",  }}>Icone</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() =>  navigation.navigate(name="Log", component={LogScreen} && alert('Cadastro Concluido') )}>

             <View style={styles.buttons}>
                 <Text style={styles.buttonText}>Concluir</Text>
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
    marginTop: "10%",
    width: 150,
    alignItems: 'center',
    backgroundColor: '#000000',
    marginBottom: 20,
    height: 30,
    borderRadius: 7,
    marginLeft: "30%",
},
  buttonText: {
    marginTop: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
},
stretch: {
  width: 350,
  height: 90,
  resizeMode: 'stretch',
  marginTop: "10%",
},
Image: {
  marginTop: "10%",
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
img: {
  width: 150,
  height: 150,

}
});
export default Cad3Screen;