import { FC, PropsWithChildren } from "react";
import { FormControl, FormErrorMessage, FormLabel, useTheme } from "@chakra-ui/react";

type Props = {
  error?: string;
  isError?: boolean;
  isRequired?: boolean;
  label: {
    text: string;
    icon?: JSX.Element;
  };
};

const FormLayout: FC<PropsWithChildren<Props>> = ({
  label,
  error,
  children,
  isError,
  isRequired,
}) => {
  const theme = useTheme();

  return (
    <FormControl isInvalid={isError} isRequired={isRequired}>
      <FormLabel
        sx={{
          gap: 2,
          margin: 0,
          display: "flex",
          alignItems: "center",
          color: theme.text.default,
        }}
      >
        {label.icon}
        {label.text}
      </FormLabel>
      {children}
      {isError && error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export type { Props as FormLayoutProps };

export default FormLayout;
