import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {signInWithGoogle} from '../lib/auth';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Definisikan tipe navigasi
type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'LoginScreen'>;

export default function LoginScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      const session = await signInWithGoogle();
      if (!session) {
        console.error('Login failed: No session returned');
        return;
      }
      console.log('Login Success:', session);
      navigation.replace('HomeScreen');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Login with Google"
        onPress={() => {
          console.log('🔘 Button Pressed');
          handleLogin();
        }}
      />
    </View>
  );
}
