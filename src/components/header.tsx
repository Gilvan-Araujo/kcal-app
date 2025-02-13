import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Text, useTheme } from '@rneui/themed';

type Props = {
  title: string;
  navigateTo: keyof ReactNavigation.RootParamList;
};

export const Header = ({ title }: Props) => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <Button
        icon={<Icon name="chevron-left" color={theme.colors.grey3} size={40} />}
        type="clear"
        size="sm"
        onPress={() => navigation.goBack()}
      />

      <Text subHeader>{title}</Text>
    </View>
  );
};
