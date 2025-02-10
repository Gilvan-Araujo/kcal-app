import { Image, ImageBackground, View } from 'react-native';

import { Text } from '@rneui/themed';

export const Logo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../assets/logo.png')}
        style={{
          width: 150,
          height: 150,
        }}
      />

      <Text appName>kCal</Text>
    </View>
  );
};
