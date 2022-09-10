import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";

const theme = extendTheme({
  base: {
    default: defaultTheme.colors.messenger[600],
  },
  text: {
    light: defaultTheme.colors.gray["500"],
    default: defaultTheme.colors.gray["600"],
  },
});

export default theme;
