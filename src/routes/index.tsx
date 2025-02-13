import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';

import { Home } from '@screens/home';
import { Login } from '@screens/login';
import { SignUp } from '@screens/sign-up';
import { Welcome } from '@screens/welcome';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors?.background }}>
      <Stack.Navigator
        id={undefined}
        screenOptions={(props) => ({
          headerShown: false,
          contentStyle: {
            flex: 1,
            backgroundColor: theme.colors?.background,
            padding: 16,
            ...(props.route.name === 'welcome' && { padding: 0 }),
          },
          animation: 'slide_from_bottom',
        })}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="welcome" component={Welcome} />
      </Stack.Navigator>
    </View>
  );
};
