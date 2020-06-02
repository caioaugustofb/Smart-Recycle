import React from 'react';
import { View,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from './MenuScreen';
import StatScreen from './StatScreen';
import PerfScreen from './PerfScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      
        <Tab.Navigator>

           <Tab.Screen 
           name="Menu" 
           component={MenuScreen} 
           independent={true} 
           style={{ tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),}}
           />



           <Tab.Screen name="Stat" component={StatScreen} independent={true} /> 
           <Tab.Screen name="Perf" component={PerfScreen} independent={true} />        

        </Tab.Navigator>
    

    );
  }


export default HomeScreen;