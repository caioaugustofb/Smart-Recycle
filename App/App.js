import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, none } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LogScreen from './pages/Log';
import CadScreen from './pages/Cad';
import Cad2Screen from './pages/Cad2';
import Cad3Screen from './pages/Cad3';
import HomeScreen from './tabs/HomeScreen';

const Stack = createStackNavigator();




function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="Log" component={LogScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Cad" component={CadScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Cad2" component={Cad2Screen} options={{ headerShown:false }}/>
        <Stack.Screen name="Cad3" component={Cad3Screen} options={{ headerShown:false }}/>
        <Stack.Screen name="Home" component={HomeScreen} independent={true} headerStyle={{ backgroundColor: '#000000' }}/>
         
      </Stack.Navigator>
    </NavigationContainer>
    


  );
}

export default App;