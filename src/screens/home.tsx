import { TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button, Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from '@components/logo';

export const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 142,
      }}
    >
      <Logo />

      <View style={{ gap: 10, width: '100%' }}>
        <Button
          title="Log in"
          onPress={() => navigation.navigate('login')}
          containerStyle={{ width: '100%' }}
          textButton
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20 }}>Don't have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{ fontSize: 20, fontFamily: 'Roboto_700Bold' }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
