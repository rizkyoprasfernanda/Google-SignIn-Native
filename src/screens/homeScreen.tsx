import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {supabase} from '../lib/supabase';

type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined; // Ditambahkan agar bisa navigasi ke login saat logout
};

type Props = StackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({navigation}: Props) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.replace('LoginScreen'); // Arahkan user ke LoginScreen setelah logout
  };

  return (
    <View>
      <Text>Welcome to Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
