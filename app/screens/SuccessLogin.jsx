import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SuccessLogin = ({navigation, route}) => {
  const {token} = route.params;

  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.iconContainer}>
        <Icon source="check-circle-outline" size={150} color="#09C5A4" />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>¡Haz iniciado sesión exitosamente!</Text>
        <Text style={styles.titleToken}>
          Tu token de autenticación es el siguiente.
        </Text>
      </View>
      <View style={styles.tokenContainer}>
        <Text>{token}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="login"
          mode="contained"
          buttonColor="#000000"
          contentStyle={{
            width: 300,
          }}
          labelStyle={{fontSize: 18}}
          onPress={() => navigation.navigate('Home')}>
          Cerrar sesión
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontFamily: 'bold',
  },
  titleToken: {
    fontSize: 18,
    fontFamily: 'bold',
    marginTop: 30,
  },
  tokenContainer: {
    marginTop: 20,
    width: 280,
    alignSelf: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 150,
  },
});
