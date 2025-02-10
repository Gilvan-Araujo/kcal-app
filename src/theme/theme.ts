import { defaultTheme } from '@rneui/base';
import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  // ...defaultTheme,
  mode: 'dark',
  darkColors: {
    primary: '#0080ff',
    disabled: '#A9ABAF',
    grey3: '#666666',
  },
  components: {
    Text: (props, theme) => ({
      style: {
        fontFamily: 'Roboto_400Regular',
        color: theme.colors.black,
        fontWeight: 'regular',
        ...(props.subHeader && {
          fontSize: 32,
          fontFamily: 'Roboto_400Regular',
          color: theme.colors.black,
          fontWeight: 'regular',
        }),
        ...(props.smallText && {
          fontSize: 16,
          fontFamily: 'Roboto_400Regular',
        }),
        ...(props.appName && {
          fontSize: 64,
          fontFamily: 'RobotoMono_700Bold',
          textAlign: 'center',
          letterSpacing: -8,
        }),
      },
    }),
    Button: (props) => ({
      titleStyle: { fontFamily: 'Roboto_900Black', fontSize: 20 },
      buttonStyle: {
        borderRadius: 10,
        ...(props.textButton && {
          paddingTop: 14,
          paddingBottom: 14,
        }),
      },
    }),
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
        borderColor: '#A9ABAF',
      },
    },
  },
});
