import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from '@expo-google-fonts/roboto';
import { defaultTheme } from '@rneui/base';
import { ThemeProvider } from '@rneui/themed';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={defaultTheme}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Universal React with Expo</Text>
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
