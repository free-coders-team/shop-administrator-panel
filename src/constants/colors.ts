import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";

const theme = extendTheme({
  base: {
    default: defaultTheme.colors.messenger[600],
  },
  text: {
    regular: defaultTheme.colors.gray["600"],
    default: defaultTheme.colors.gray["700"],
  },
});

export default theme;
