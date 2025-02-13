import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';

import { RHFInput } from '@components/rhf/rhf--input';
import { RHFPasswordInput } from '@components/rhf/rhf-password-input';
import { SocialLoginOrSignUp } from '@components/social-login-or-sign-up';

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email required' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .nonempty({ message: 'Password required' })
    .min(8, { message: 'Password must be have at least 8 characters' }),
});

export const Login = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    isValid && navigation.navigate('welcome');
  };

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
        <RHFInput
          control={control}
          name="email"
          placeholder="Email"
          errorMessage={errors.email?.message}
        />

        <RHFPasswordInput
          control={control}
          name="password"
          placeholder="Password"
          errorMessage={errors.password?.message}
        />

        <Button title="Log in" textButton onPress={handleSubmit(onSubmit)} />
      </View>

      <SocialLoginOrSignUp variant="login" style={{ marginTop: 30 }} />
    </SafeAreaView>
  );
};
