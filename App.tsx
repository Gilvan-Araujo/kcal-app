import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from '@expo-google-fonts/roboto';
import { RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { ThemeProvider } from '@rneui/themed';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Login } from '@screens/login';

import { theme } from '@theme/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
    RobotoMono_700Bold,
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.darkColors.background,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Login />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
