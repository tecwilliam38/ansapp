import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" hidden={true} />
      <View>
        <Text>Welcome to the App!</Text>
      </View>
    </NavigationContainer>
  );
}

