import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon, Modal, Portal, Text} from 'react-native-paper';

export const ModalError = ({showModal, message, setShowModal}) => {
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const recivedMessage = message?.toString();
    if (recivedMessage) {
      cleanedMessage(recivedMessage);
    }
  }, [message]);

  const cleanedMessage = message => {
    const formatMessage = message.slice(13);
    setNewMessage(formatMessage);
  };

  return (
    <Portal>
      <Modal visible={showModal} contentContainerStyle={styles.modalContainer}>
        <View>
          <View style={styles.errorTextModalContainer}>
            <Text style={styles.errorTextTitle}>Sesión fallida</Text>
          </View>
          <View style={styles.IconModalContainer}>
            <Icon source="account-cancel" size={90} color="#E6200E" />
          </View>
          <View style={styles.errorTextModalContainer}>
            <Text style={styles.errorText}>{newMessage}</Text>
          </View>
          <View style={styles.buttonModalContainer}>
            <Button
              icon="login"
              onPress={() => setShowModal(false)}
              mode="contained"
              buttonColor="#000000"
              contentStyle={{
                width: 300,
              }}
              labelStyle={{fontSize: 18}}>
              Cerrar
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 25,
    margin: 10,
    height: 430,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  closeIconContainer: {
    alignItems: 'flex-end',
  },
  IconModalContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  errorTextModalContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    justifyContent: 'center',
  },
  errorTextTitle: {
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
  },
  buttonModalContainer: {
    marginTop: 30,
  },
});
