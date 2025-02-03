import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  mode: 'dark',
  darkColors: {
    primary: '#0080ff',
  },
  components: {
    Text: {
      style: {
        fontFamily: 'Roboto_400Regular',
        color: '#fff',
      },
    },
  },
});
