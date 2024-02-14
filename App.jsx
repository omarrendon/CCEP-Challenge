/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppNavigator} from './app/navigators/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';

import {ApolloProvider} from '@apollo/client';
import {clientQueryConsult} from './app/services/api';

function App() {
  return (
    <ApolloProvider client={clientQueryConsult}>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}

export default App;
