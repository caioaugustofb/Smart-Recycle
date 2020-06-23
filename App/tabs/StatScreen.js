import React from 'react';
import {   
  View,  
  Text, 
  StyleSheet, 
  ScrollView,
  Image,
} from 'react-native';
import { BarChart, Grid, YAxis, XAxis,  } from 'react-native-svg-charts'
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

function StatScreen ()  {

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const data = [
    {
      name: "KG de Vidro",
      KGs: 215,
      color: "#27AE60",
      legendFontColor: "#000",
      legendFontSize: 15
    },
    {
      name: "KG de Metal",
      KGs: 280,
      color: "#F1C40F",
      legendFontColor: "#000",
      legendFontSize: 15
    },
    {
      name: "KG de Plastico",
      KGs: 152,
      color: "#ff0000",
      legendFontColor: "#000",
      legendFontSize: 15
    },
    {
      name: "KG de Papel",
      KGs: 253,
      color: "#2E86C1",
      legendFontColor: "#000",
      legendFontSize: 15
    },
  ];



  const fill = 'blue'
  const data1 = [0, 20, 30, 40, 59, 44, 54, 30, 35, 40, 35, 53, 53, 24, 50,]
  



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
                    data={data1} 
                    svg={{
                        fill: 'black',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}`}
                />  
            <BarChart style={{ height: 200, width: '70%' }} data={data1} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>

  </View>
                <XAxis
                    style={{ paddingLeft: '20%',  width: '85%', }}
                    data={data1}
                    formatLabel={(value) => `${value}`}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
      <View style={styles.allText}>
          <Text style={{fontWeight: "bold",color:'#000', marginTop: "10%",marginLeft: '2%',marginBottom:'5%'  }}>
              PARTES RECICLADAS QUANTIDADE DE{'\n'}     CADA TIPO DE  LIXO PELO TEMPO
          </Text>
      </View>

           

            <PieChart
              data={data}
              width={screenWidth}
              height={210}
              chartConfig={chartConfig}
              accessor="KGs"
              backgroundColor="transparent"
              paddingLeft="5"
              absolute
            />

      <View style={styles.allText}>
          <Text style={{fontWeight: "bold",color:'#000', marginTop: "10%",marginLeft: '2%',  }}>
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