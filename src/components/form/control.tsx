import { ChangeEvent, forwardRef } from "react";
import { Input, useTheme } from "@chakra-ui/react";

import FormLayout, { FormLayoutProps } from "@/components/form-layout";

type Type = "text" | "password" | "email";
type Props = FormLayoutProps & {
  type?: Type;
  name?: string;
  onBlur?(): void;
  onFocus?(): void;
  onChange?(ev: ChangeEvent<HTMLInputElement>): void;
};

const Control = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const theme = useTheme();

  const { label, isRequired, error, isError, type, onBlur, onFocus, onChange } = props;

  return (
    <FormLayout label={label} error={error} isError={isError} isRequired={isRequired}>
      <Input
        ref={ref}
        type={type}
        autoComplete="none"
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        sx={{
          mt: 1,
          paddingX: 1,
          borderRadius: 0,
          borderX: "none",
          borderTop: "none",
          textColor: theme.text.regular,
        }}
        _invalid={{
          boxShadow: "none",
          borderBottomWidth: 2,
          borderColor: "red.500",
        }}
        _focus={{
          boxShadow: "none",
          borderBottomWidth: 2,
          borderColor: theme.base.default,
        }}
      />
    </FormLayout>
  );
});

Control.defaultProps = {
  type: "text",
};

export default Control;
