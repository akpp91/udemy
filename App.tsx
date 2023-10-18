

import React from 'react';

import {
  Text
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Components from './src/Components';
import ListScreen from './src/Screens/ListScreen';
import ImageView from './src/Screens/ImageScreen';
import CounterScreen from './src/Screens/CounterScreen';
import Color from './src/Screens/Color';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name='Components' component={Components} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='ListScreen' component={ListScreen} />
      <Stack.Screen name='ImageView' component={ImageView} />
      <Stack.Screen name='CounterScreen' component={CounterScreen} />
      <Stack.Screen name='Color' component={Color} />
      </Stack.Navigator>
      
    </NavigationContainer>
      
    );
}

const Home =() => {
  return (
    
      <Text>In Home</Text>
    
  )
}

export default App;
