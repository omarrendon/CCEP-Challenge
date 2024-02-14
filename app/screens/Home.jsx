import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const HOME_IIMAGE = require('../assets/images/logo.png');

export const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.imageContainer} source={HOME_IIMAGE} />
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
          onPress={() => navigation.navigate('Login')}>
          Iniciar sesión
        </Button>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.helperText}>No tienes una cuenta? Registrate!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  titleContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  helperText: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
