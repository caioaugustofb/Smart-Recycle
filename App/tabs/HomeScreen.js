import React from 'react';
import { View,Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuScreen from './MenuScreen';
import StatScreen from './StatScreen';
import PerfScreen from './PerfScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

const Tab = createMaterialBottomTabNavigator();


function HomeScreen() {
  
    return (
      
        <Tab.Navigator
            initialRouteName="Menu"
            activeColor="#ffffff"
            inactiveColor="#708090"
            barStyle={{ backgroundColor: '#000',height: "12%", }}
        >

           <Tab.Screen 
              name="Menu" 
              component={MenuScreen} 
              independent={true} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="home" color={color} size={30} />
                ),
              }}         
           />
           <Tab.Screen 
              name="Stat" 
              component={StatScreen} 
              independent={true} 
              options={{
                tabBarLabel: 'Info',
                tabBarIcon: ({ color }) => (
                  <Icon name="assessment" color={color} size={30} />
                ),
              }} 
           /> 
           <Tab.Screen 
              name="Perf" 
              component={PerfScreen} 
              independent={true} 
              options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color }) => (
                  <Icon name="person" color={color} size={30} />
                ),
              }} />        
           
        </Tab.Navigator>
    

    );
  }
 

export default HomeScreen;
