import { defaultTheme } from '@rneui/base';
import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  mode: 'dark',
  darkColors: {
    primary: '#0080ff',
    disabled: '#A9ABAF',
    grey3: '#666666',
  },
  components: {
    Text: {
      style: {
        fontFamily: 'Roboto_400Regular',
        color: defaultTheme.colors.white,
        fontWeight: 'regular',
      },
      h1Style: {
        fontSize: 32,
        color: defaultTheme.colors.white,
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'regular',
      },
      smallTextStyle: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
      },
    },
    Button: {
      titleStyle: { fontFamily: 'Roboto_900Black', fontSize: 20 },
    },
    Input: {
      placeholderTextColor: '#A9ABAF',
      containerStyle: { paddingLeft: 0, paddingRight: 0 },
      inputContainerStyle: {
        borderWidth: 1,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 10,
      },
    },
  },
});
