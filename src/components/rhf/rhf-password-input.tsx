import { useState } from 'react';
import { View } from 'react-native';

import { Icon, Input, InputProps, Text } from '@rneui/themed';
import { Control, Controller, FieldErrors } from 'react-hook-form';

type Props = {
  control: Control<any>;
  errorMessage?: string;
  name: 'password' | 'confirmPassword';
} & InputProps;

export const RHFPasswordInput = ({
  name,
  control,
  errorMessage,
  ...rest
}: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
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
                style={{ height: 48, width: 48, justifyContent: 'center' }}
                onPress={() => setSecureTextEntry((prevState) => !prevState)}
                type="material-community"
                name={secureTextEntry ? 'eye' : 'eye-off'}
                size={20}
              />
            }
            secureTextEntry={secureTextEntry}
            {...rest}
          />
        )}
        name={name}
      />

      {errorMessage && <Text errorText>{errorMessage}</Text>}
    </View>
  );
};
