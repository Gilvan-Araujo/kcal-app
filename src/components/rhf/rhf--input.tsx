import { View } from 'react-native';

import { Input, InputProps, Text } from '@rneui/themed';
import { Control, Controller } from 'react-hook-form';

type Props = {
  control: Control<any>;
  errorMessage?: string;
  name: 'email';
} & InputProps;

export const RHFInput = ({ name, control, errorMessage, ...rest }: Props) => {
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
            {...rest}
          />
        )}
        name={name}
      />

      {errorMessage && <Text errorText>{errorMessage}</Text>}
    </View>
  );
};
