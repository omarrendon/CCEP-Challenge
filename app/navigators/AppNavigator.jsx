import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Login} from '../screens/Login';
import {SuccessLogin} from '../screens/SuccessLogin';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'withe',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Iniciar Sesión',
        }}
      />
      <Stack.Screen
        name="SuccessLogin"
        component={SuccessLogin}
        options={{
          headerShown: false,
          title: 'Exitoso!',
        }}
      />
    </Stack.Navigator>
  );
};
