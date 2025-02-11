import { useState } from 'react';
import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigation } from '@react-navigation/native';
import { Button, Icon, Input, Text, useTheme } from '@rneui/themed';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';

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

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

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
        <View>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                placeholder="Email"
              />
            )}
            name="email"
          />

          {errors.email && <Text errorText>{errors.email.message}</Text>}
        </View>

        <View>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
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
            )}
            name="password"
          />

          {errors.password && <Text errorText>{errors.password.message}</Text>}
        </View>

        <View>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
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
            )}
            name="confirmPassword"
          />

          {errors.confirmPassword && (
            <Text errorText>{errors.confirmPassword.message}</Text>
          )}
        </View>

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
