import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens tab
import Chat_bot from "./Screens/chat_bot";
import Consulta_alarmas from "./Screens/consulta_alarmas";
import Mis_procesos from "./Screens/mis_procesos";
import Editar_usuario from "./Screens/editar_usuario";

//screens no tab
import Log_in from "./Screens/Log_in";
import alta_alarmas from "./Screens/alta_alarmas";
import cambio_password from "./Screens/cambio_password";
import mis_procesos from "./Screens/mis_procesos";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const stack = createNativeStackNavigator();

function MyStack(){
  return(
    <stack.Navigator  initialRouteName="Chat_bot_stack">
      <stack.Screen
      name = "Chat_bot_stack"
      component={Chat_bot}
     
      />
        
      <stack.Screen       
      name = "Log_in"
      component={Log_in} 
      />
    </stack.Navigator>

  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
     <Tab.Navigator 
     initialRouteName="chat_bot"
     screenOptions= {{
      tabBarActiveTintColor: 'purple',
      
      
  }}
     >
     <Tab.Screen name="chat_bot" component={MyStack} options={{tabBarLabel: 'CHAT', tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="android-messages" color={color} size={30} /> ),headerShown: false, }}/>
     <Tab.Screen name="consulta_alarmas" component={Consulta_alarmas} options={{tabBarLabel: 'ALARM', tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="bell" color={color} size={30} /> ),headerShown: false, }}/>
     <Tab.Screen name="mis_procesos" component={Mis_procesos} options={{tabBarLabel: 'PROCES', tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="clipboard-list" color={color} size={30} /> ),headerShown: false, }}/>
     <Tab.Screen name="editar_usuario" component={Editar_usuario} options={{tabBarLabel: 'USER', tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="account-cog" color={color} size={30} /> ),headerShown: false, }}/>
     </Tab.Navigator>
    );
}


export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}