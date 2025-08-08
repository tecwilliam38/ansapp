import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import { AuthProvider } from './src/contexts/auth.js';
import { AuthProvider } from './src/context/auth.js';
// import Routes from './src/routes/routes';
import Routes from './src/routes/index.js';

import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();


export default function App() {
  //  const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });
  useEffect(() => {
    const prepare = async () => {
      // Simula carregamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync();
    };
    prepare();
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}

