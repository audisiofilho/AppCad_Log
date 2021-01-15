import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/Pages/Login';
import Logado from "./src/Pages/Logado";
import Cadastro from './src/Pages/Cadastro';

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Login" screenOptions={{cardStyle:{
       backgroundColor: "#ccc"
     }}}>
       <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
       <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
       <Stack.Screen name="Logado" component={Logado} options={{headerShown: false}}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}