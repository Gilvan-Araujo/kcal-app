import { useState } from 'react';
import { View } from 'react-native';

import { Link, useNavigation } from '@react-navigation/native';
import { Button, Icon, Input, Text, useTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SocialLoginOrSignUp } from '@components/social-login-or-sign-up';

export const SignUp = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');

  return (
    <SafeAreaView
      style={{
        padding: 8,
        paddingBottom: 70,
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 68,
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

        <Text subHeader>Sign up</Text>
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

        <Input
          value={confirmPassword}
          onChangeText={onChangeConfirmPassword}
          rightIcon={
            <Icon
              onPress={() => {
                setConfirmPasswordVisible((prevState) => !prevState);
              }}
              type="material-community"
              name={confirmPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
            />
          }
          placeholder="Confirm password"
          secureTextEntry={confirmPasswordVisible}
        />

        <Button title={'Sign up'} textButton />
      </View>

      <View style={{ alignItems: 'center', marginTop: 70, gap: 70 }}>
        <SocialLoginOrSignUp variant="sign-up" />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text style={{ fontSize: 20 }}>Already have an account</Text>
          <Link
            screen="login"
            style={{ fontSize: 20, fontFamily: 'Roboto_700Bold' }}
          >
            Log in
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};
