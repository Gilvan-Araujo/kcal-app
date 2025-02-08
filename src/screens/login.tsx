import { useState } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Input, Text, useTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SocialLoginOrSignUp } from '@components/social-login-or-sign-up';

export const Login = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(true);

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <SafeAreaView
      style={{
        padding: 8,
        paddingBottom: 70,
        gap: 70,
        height: '100%',
        width: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <Button
          icon={
            <Icon name="chevron-left" color={theme.colors.grey3} size={40} />
          }
          type="clear"
          size="sm"
          onPress={() => navigation.navigate('home')}
        />

        <Text subHeader>Log in</Text>
      </View>

      <View style={{ flexDirection: 'column', gap: 32 }}>
        <Input
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          placeholder="Email"
        />

        <Input
          value={password}
          onChangeText={onChangePassword}
          rightIcon={
            <Icon
              onPress={() => {
                setPasswordVisible((prevState) => !prevState);
              }}
              type="material-community"
              name={passwordVisible ? 'eye' : 'eye-off'}
              size={20}
            />
          }
          placeholder="Password"
          secureTextEntry={passwordVisible}
        />

        <Button
          title="Log in"
          buttonStyle={{
            paddingTop: 14,
            paddingBottom: 14,
            borderRadius: 10,
          }}
        />
      </View>

      <SocialLoginOrSignUp variant="login" style={{ marginTop: 30 }} />
    </SafeAreaView>
  );
};
