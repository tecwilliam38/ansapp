import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/auth';
import Routes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" hidden={true} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

