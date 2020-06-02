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
                  <TouchableOpacity onPress={() => alert("nada ainda")}>

                      <View style={styles.buttons}>
                          <Text style={styles.buttonText}>Verificar</Text>
                      </View>

                  </TouchableOpacity>




            <View style={styles.mostradores}>
              <TouchableOpacity onPress={() => alert("nada ainda")}>

                <View style={styles.button1}>
                   <Text style={styles.buttonsText}>VIDRO</Text>
                </View>

              </TouchableOpacity>                                    




              <TouchableOpacity onPress={() => alert("nada ainda")}>

                <View style={styles.button2}>
                   <Text style={styles.buttonsText}>METAL</Text>
                </View>

              </TouchableOpacity>                                   




              <TouchableOpacity onPress={() => alert("nada ainda")}>

                <View style={styles.button3}>
                   <Text style={styles.buttonsText}>PLASTICO</Text>
                </View>

              </TouchableOpacity>                                   
              


              <TouchableOpacity onPress={() => alert("nada ainda")}>

                <View style={styles.button4}>
                   <Text style={styles.buttonsText}>PAPEL</Text>
                </View>

              </TouchableOpacity>                                        
                                                 
            </View>

    <View style={styles.mostradores2}>
            <View style={styles.Indicador}/>
            <View style={styles.Indicador}/>
            <View style={styles.Indicador}/>
            <View style={styles.Indicador}/>
    </View>

    <Text style={{ 
    marginTop: 60,
    textAlign: 'center',
    color: '#000000',
    fontSize: 15,
    fontWeight: "bold",
    }}>
      CONTACTAR TRANSPORTE
    </Text>
    <Image
    style={styles.stretch}
    source={require('./Phone.png')}/>

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
  topBar: {
    flex: 1,
    height: "20%",
    width: "100%",
    backgroundColor: "#000000",
  },
  //verificar
  buttons: {
    marginTop: 10,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#ff0000',
    marginBottom: 20,
    height: 50,
    borderRadius: 7,
    marginLeft: "33%",
    marginTop: "15%"
},
  buttonText: {
    marginTop: "8%",
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
  }, 
  //mostradores
  mostradores: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: "2.5%",
  },
  
  button1: {
    backgroundColor: "#27AE60",
    marginTop: 20,
    width: 80,
    alignItems: 'center',
    marginBottom: 20,
    height: 170,
    borderRadius: 7,
    marginLeft: "5%",
    marginTop: "15%"
},
button2: {
  backgroundColor: "#F1C40F",
  marginTop: 20,
  width: 80,
  alignItems: 'center',
  marginBottom: 20,
  height: 170,
  borderRadius: 7,
  marginLeft: "5%",
  marginTop: "15%"
},
button3: {
  backgroundColor: "#ff0000",
  marginTop: 20,
  width: 80,
  alignItems: 'center',
  marginBottom: 20,
  height: 170,
  borderRadius: 7,
  marginLeft: "5%",
  marginTop: "15%"
},
button4: {
  backgroundColor: "#2E86C1",
  marginTop: 20,
  width: 80,
  alignItems: 'center',
  marginBottom: 20,
  height: 170,
  borderRadius: 7,
  marginLeft: "5%",
  marginTop: "15%"
},
  buttonsText: {
    marginTop: "100%",
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: "bold",
},
//indicador    
Indicador: {
  width: 25,
  backgroundColor: '#ff0000',
  height: 25,
  borderRadius: 7,
  borderRadius: 100,
  marginLeft: 75,
},
mostradores2: {
  flexDirection: 'row',
  marginLeft: -32,
},
stretch: {
  width: 100,
  height: 60,
  resizeMode: 'stretch',
  marginTop: "5%",
  borderRadius: 20,
  marginLeft: 160,
},
});


export default MenuScreen;