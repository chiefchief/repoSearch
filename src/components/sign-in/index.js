import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { navigateTo } from 'src/navigation';
import { authRequest } from 'services/requests';
//styles
import styles from './styles';

export default function SignIn({ componentId }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const encode = async () => {
    const base64 = btoa(`${username.toLowerCase()}:${password}`);
    try {
      await authRequest(base64);
      await navigateTo(componentId, 'Main');
    } catch (e) {
      Alert.alert(
        'error',
        e,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your github username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Enter your github password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={encode}>
        <Text style={styles.button_text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
