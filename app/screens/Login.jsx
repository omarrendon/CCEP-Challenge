import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Modal,
  Portal,
  TextInput,
} from 'react-native-paper';
import {gql, useMutation} from '@apollo/client';
import {ModalError} from '../components/ModalError';
const HOME_IIMAGE = require('../assets/images/logo.png');

// Define mutation
const LOGIN_QUERY = gql`
  mutation loginQuery($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

export const Login = ({navigation}) => {
  let TOKEN = '';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [login, {data, loading, error}] = useMutation(LOGIN_QUERY);

  useEffect(() => {
    if (error) {
      setShowModal(true);
      setPassword('');
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      TOKEN = data.generateCustomerToken.token;
      return navigation.navigate('SuccessLogin', {token: TOKEN});
    }
  }, [data]);

  const handleLogin = () => {
    Keyboard.dismiss();
    if (!email && !password) return;
    login({variables: {email, password}});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'iros' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View>
            <Image style={styles.imageContainer} source={HOME_IIMAGE} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={{
                width: 300,
              }}
              outlineColor="#000000"
              value={email}
              mode="outlined"
              label={'Email'}
              keyboardType="email-address"
              autoCorrect={false}
              right={<TextInput.Icon icon={'email'} />}
              onChangeText={email => setEmail(email)}
            />
            <TextInput
              style={{
                width: 300,
                marginTop: 10,
              }}
              outlineColor="#000000"
              value={password}
              mode="outlined"
              label={'Contraseña'}
              autoCapitalize="none"
              secureTextEntry={showPassword ? true : false}
              autoCorrect={false}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye-off' : 'eye'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              onChangeText={password => setPassword(password)}
            />
          </View>
          {loading && (
            <Portal>
              <Modal visible>
                <ActivityIndicator animating />
              </Modal>
            </Portal>
          )}
          <View style={styles.buttonContainer}>
            <Button
              icon="login"
              mode="contained"
              buttonColor="#000000"
              contentStyle={{
                width: 300,
              }}
              labelStyle={{fontSize: 18}}
              disabled={email && password ? false : true}
              onPress={handleLogin}>
              Iniciar sesión
            </Button>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.helperText}>
              No tienes una cuenta? Registrate!
            </Text>
          </View>
          <ModalError
            showModal={showModal}
            setShowModal={setShowModal}
            message={error}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  inputContainer: {
    marginTop: -90,
    marginBottom: 50,
    alignItems: 'center',
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
