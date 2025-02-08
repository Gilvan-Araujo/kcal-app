import { ActivityIndicator, StatusBar } from 'react-native';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from '@expo-google-fonts/roboto';
import { RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from '@screens/home';
import { Login } from '@screens/login';
import { SignUp } from '@screens/sign-up';

import { theme } from '@theme/theme';

const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator
            id={undefined}
            screenOptions={{
              headerShown: false,
              contentStyle: {
                flex: 1,
                backgroundColor: theme.darkColors?.background,
                padding: 16,
              },
              animation: 'slide_from_bottom',
            }}
            initialRouteName="home"
          >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
