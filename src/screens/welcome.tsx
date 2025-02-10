import { ImageBackground, View } from 'react-native';

import { Button, Text, useThemeMode } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from '@components/logo';

export const Welcome = () => {
  const darkModeImage = require('../assets/welcome-bg-dark.png');
  const lightModeImage = require('../assets/welcome-bg-light.png');
  const { mode } = useThemeMode();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={mode === 'dark' ? darkModeImage : lightModeImage}
        style={{
          flex: 1,
          width: null,
          height: null,
          padding: 16,
          paddingTop: 45,
          paddingBottom: 70,
          gap: 90,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Logo />

        <View
          style={{ flexDirection: 'column', gap: 140, alignItems: 'center' }}
        >
          <Text subHeader>Welcome to kCal!</Text>

          <Text
            style={{
              fontFamily: 'Roboto_300Light',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            To offer our best service we need {'\n'} more information from you.
          </Text>
        </View>

        <Button textButton>Let's get started</Button>
      </ImageBackground>
    </SafeAreaView>
  );
};
