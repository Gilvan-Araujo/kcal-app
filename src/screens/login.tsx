import { useState } from 'react';
import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Input, Text, useTheme } from '@rneui/themed';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';

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

  const [passwordVisible, setPasswordVisible] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    isValid && navigation.navigate('welcome');
    console.log(data);
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

        <Button title="Log in" textButton onPress={handleSubmit(onSubmit)} />
      </View>

      <SocialLoginOrSignUp variant="login" style={{ marginTop: 30 }} />
    </SafeAreaView>
  );
};
