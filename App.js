// PROGRAMA PRINCIPAL
// FECHA DE INICIO DEL PROYECTO: 28/4/2022
// FECHA ULTIMA MODIF          : 21/5/2022
// VENCIMIENTOS DE REVITE 
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Agregar from './screens/Agregar';
import Configuracion from './screens/Configuracion';
import AcercaDe from './screens/AcercaDe';
import Revite from './screens/Revite';

import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

import { useState } from 'react';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();



function VistaGeneral( props ) {

  console.log("props en Vista general :", props.route.params.cliente );

  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('Agregar');
            }}
          />
        ),
      })}
    >

      {/* PRIMER PANTALLA        */}

      <BottomTabs.Screen
        name="Configuracion"
        component={Configuracion}
        options={{
          title: 'Configuración',
          tabBarLabel: 'Config',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />



      {/* SEGUNDA PANTALLA        */}

      <BottomTabs.Screen
        name="Revité"
        component={Revite}
        initialParams={{  cliente: props.route.params.cliente   }}        
        options={{
          title: 'Vencimientos',
          tabBarLabel: 'Vencimientos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bus" size={size} color={color} />
          ),
        }}
      />

      {/* TERCERA PANTALLA        */}

      <BottomTabs.Screen
        name="AcercaDe"
        component={AcercaDe}
        options={{
          title: 'Acerca de',
          tabBarLabel: 'Acerca de',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />


    </BottomTabs.Navigator>
  );
}

export default function App() {

  const [cCuit, setCcuit] = useState('12345678901');  

  console.log("Estado en App", cCuit );

  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name="VistaGeneral"
              component={VistaGeneral}
              options={{ headerShown: false  }}
              initialParams={{  cliente: cCuit    }}
              
            />
            <Stack.Screen
              name="Agregar"
              component={Agregar}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
