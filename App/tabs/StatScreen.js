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
import { BarChart, Grid, YAxis, XAxis, PieChart } from 'react-native-svg-charts'


function StatScreen ()  {

  const fill = 'blue'
  const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]


  const data2 = [50, 10, 40, 95, -30]

  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

  const pieData = data2
      .filter((value) => value > 0)
      .map((value, index) => ({
          value,
          svg: {
              fill: randomColor(),
              onPress: () => console.log('press', index),
          },
          key: `pie-${index}`,
      }))



  return (
    <View style={styles.all}>

    <View style={styles.tab}>
        <Image 
        style={styles.tabimage}
        source={require('./tab.png')}/>
    </View>

  <ScrollView style={{ width: '100%', }}>
  <View style={styles.allIn}>

                  <YAxis
                    style={{ height: 140,marginTop: '9%' }}
                    data={data} 
                    svg={{
                        fill: 'black',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}`}
                />  
            <BarChart style={{ height: 200, width: '70%' }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>

  </View>
                <XAxis
                    style={{ paddingLeft: '20%',  width: '83%', }}
                    data={data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
      <View style={styles.allText}>
          <Text style={{fontWeight: "bold",color:'#000', marginTop: "10%",marginLeft: '5%',  }}>
              PARTES RECICLADAS QUANTIDADE DE{'\n'}     CADA TIPO DE  LIXO PELO TEMPO
          </Text>
      </View>

            <PieChart style={{ height: 200, paddingTop:'10%', innerRadius: '0%' }} data={pieData} />

      <View style={styles.allText}>
          <Text style={{fontWeight: "bold",color:'#000', marginTop: "10%",marginLeft: '5%',  }}>
          PARTES RECICLADAS
          </Text>
      </View>


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
//grafico 1
allIn: {
  flex: 1,
  color: '#000000',
  flexDirection: 'row',
  paddingLeft: '20%',
  marginTop: '10%',
  },
allText: {
  flex: 1,
  backgroundColor: "#7EEED9",
  alignItems: 'center', 
  //marginTop: '5%',
},
//imagem
tab: {
  height: '20%',
  backgroundColor: '#000',
  paddingLeft: '40%',
},
tabimage: {
  marginTop: '20%',
},
});
export default StatScreen;