import '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    smallText?: boolean;
    subHeader?: boolean;
    appName?: boolean;
    errorText?: boolean;
  }

  export interface ButtonProps {
    textButton?: boolean;
  }
}
