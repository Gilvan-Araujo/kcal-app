import React from 'react';
import { TouchableOpacity, View, ViewProps } from 'react-native';

import { Text, useTheme } from '@rneui/themed';

import AppleLogo from '@assets/apple-logo.svg';
import FacebookLogo from '@assets/facebook-logo.svg';
import GoogleLogo from '@assets/google-logo.svg';

type SocialLoginOrSignUpProps = {
  variant: 'login' | 'sign-up';
} & ViewProps;

export const SocialLoginOrSignUp = ({
  variant,
  style,
  ...props
}: SocialLoginOrSignUpProps) => {
  const { theme } = useTheme();

  return (
    <View style={[{ alignItems: 'center', gap: 20 }, style]} {...props}>
      <Text smallText>Or</Text>
      <Text smallText>{variant === 'login' ? 'Log in' : 'Sign up'} with</Text>
      <View style={{ flexDirection: 'row', gap: 24 }}>
        <TouchableOpacity>
          <AppleLogo width={40} height={40} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity>
          <GoogleLogo width={40} height={40} color={theme.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FacebookLogo width={40} height={40} fill={theme.colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
