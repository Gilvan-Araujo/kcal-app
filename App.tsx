import { ActivityIndicator, StatusBar } from 'react-native';

import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from '@expo-google-fonts/roboto';
import { RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { NavigationContainer } from '@react-navigation/native';
import { defaultTheme } from '@rneui/base';
import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from '@theme/theme';

import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
    RobotoMono_700Bold,
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" />

          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
