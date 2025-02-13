import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigation } from '@react-navigation/native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';

import { Header } from '@components/header';
import { RHFInput } from '@components/rhf/rhf--input';
import { RHFPasswordInput } from '@components/rhf/rhf-password-input';
import { SocialLoginOrSignUp } from '@components/social-login-or-sign-up';

const schema = z
  .object({
    email: z
      .string()
      .nonempty({ message: 'Email required' })
      .email({ message: 'Invalid email address' }),
    password: z
      .string()
      .nonempty({ message: 'Password required' })
      .min(8, { message: 'Password must be have at least 8 characters' }),
    confirmPassword: z
      .string()
      .nonempty({ message: 'Confirm password required' })
      .min(8, { message: 'Password must be have at least 8 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type FormData = z.infer<typeof schema>;

export const SignUp = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
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
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
      }}
    >
      <Header title="Sign up" />

      <View style={{ flexDirection: 'column', gap: 32 }}>
        <RHFInput
          name="email"
          control={control}
          errorMessage={errors.email?.message}
          placeholder="Email"
        />

        <RHFPasswordInput
          control={control}
          errorMessage={errors.password?.message}
          name="password"
          placeholder="Password"
        />

        <RHFPasswordInput
          control={control}
          errorMessage={errors.confirmPassword?.message}
          name="confirmPassword"
          placeholder="Confirm password"
        />

        <Button title={'Sign up'} textButton onPress={handleSubmit(onSubmit)} />
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
