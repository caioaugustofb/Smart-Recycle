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


function PerfScreen ()  {
  return (
    
  <View style={styles.all}>
    <View style={{height:"10%", backgroundColor:"#fff" }}>

    </View>
    <ScrollView >
    <View style={styles.top}> 
       
        <View style={styles.Image}>
            <Text style={{fontWeight: "bold",color:'#000', marginTop: "40%",  }}>Icone</Text>
        </View>
       <Text style={{fontWeight: "bold",color:'#000', marginTop: "6%",marginLeft: '5%',  }}>
          Empresa ltda. S.A. 
       </Text>
    </View>

       <Text style={{fontWeight: "bold",color:'#000', marginTop: "10%",marginLeft: '5%',  }}>
            Metas a cumprir
       </Text>


       <View style={styles.mid2}>
            <Text style={{color:'#000', marginTop: "3%",marginLeft: '3.5%',  }}>
              Ultima semana:
            </Text>
            <Text style={{color:'#000', marginTop: "3%",marginLeft: '4%',  }}>
              Ultimo Metas:
            </Text>
            <Text style={{color:'#000', marginTop: "3%",marginLeft: '5%',  }}>
              Ultimo ano:
            </Text>
       </View>


    <View style={styles.mid}> 
       
        <View style={styles.Image2}>
            <Text style={{fontWeight: "bold",color:'#fff', marginTop: "20%",width: "50%"  }}>50KG de 100KG</Text>
        </View>
        <View style={styles.Image2}>
            <Text style={{fontWeight: "bold",color:'#fff', marginTop: "20%", width: "50%" }}>50KG de 100KG</Text>
        </View>
        <View style={styles.Image2}>
            <Text style={{fontWeight: "bold",color:'#fff', marginTop: "20%", width: "50%" }}>50KG de 100KG</Text>
        </View>
    </View>

    <Text style={{fontWeight: "bold",color:'#000', marginTop: "10%",marginLeft: '5%',  }}>
            Premiacoes:
       </Text>



    <View style={styles.bottom}>
        <Image 
        style={styles.Image3}
        source={require('./trofeu.png')}/>
        <Image 
        style={styles.Image3}
        source={require('./trofeu.png')}/>
        <Image 
        style={styles.Image3}
        source={require('./trofeu.png')}/>
    </View>
    <View style={styles.mid2}>
            <Text style={{color:'#000', marginLeft: '7.5%', width:"10%", }}>
              Mais kg por dia
            </Text>
            <Text style={{color:'#000', marginLeft: '8%', width:"11%", }}>
              Mais KG reutilizados
            </Text>
            <Text style={{color:'#000', marginLeft: '7%', width:"10%", }}>
              Mais KG por ano
            </Text>
       </View>




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
//mostrador de cima
Image: {
  width: 100,
  alignItems: 'center',
  backgroundColor: '#fff',
  marginBottom: 50,
  height: 100,
  borderRadius: 100,
  borderColor: '#000',
  borderWidth:1,
  marginLeft: '8%',
},
top: {
  flexDirection: 'row',
  borderBottomWidth:1,
  width: "175%"
},
// mostrador do meio
mid: {
  flexDirection: 'row',
  borderBottomWidth:1,
  width: "175%"
},
mid2: {
  flexDirection: 'row',
  width: "175%",
  marginBottom:10,
},
Image2: {
  width: 100,
  alignItems: 'center',
  backgroundColor: '#000',
  marginBottom: 20,
  height: 100,
  borderRadius: 10,
  borderWidth:1,
  marginLeft: '3.5%',
  marginBottom: 50,
},
//ultimo mostrador
bottom: {
  flexDirection: 'row',
  width: "175%",
},
Image3: {
  width: 100,
  alignItems: 'center',
  marginBottom: 5,
  height: 100,
  marginLeft: '3.5%',
  marginTop: "3%",
},
});

export default PerfScreen;