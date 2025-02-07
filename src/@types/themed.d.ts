import { StyleProp, TextStyle } from 'react-native';

import '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    smallText?: boolean;
    smallTextStyle?: StyleProp<TextStyle>;
  }
}
