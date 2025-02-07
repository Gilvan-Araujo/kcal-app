import { TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button, Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <View>
        <Text
          style={{
            fontSize: 64,
            fontFamily: 'RobotoMono_700Bold',
            textAlign: 'center',
          }}
        >
          kCal
        </Text>
      </View>

      <View style={{ gap: 10, width: '100%' }}>
        <Button
          containerStyle={{ width: '100%' }}
          buttonStyle={{ paddingTop: 14, paddingBottom: 14, borderRadius: 10 }}
          title="Log in"
          titleStyle={{ fontFamily: 'Roboto_900Black', fontSize: 20 }}
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
