import { FC, PropsWithChildren } from "react";
import { Button as ChakraButton, ChakraProps } from "@chakra-ui/react";

type Props = Partial<{
  sx: ChakraProps;
  type: "button" | "submit";
  isLoading: boolean;
  isDisabled: boolean;
}>;

const Button: FC<PropsWithChildren<Props>> = ({
  sx,
  type,
  children,
  isLoading,
  isDisabled,
}) => (
  <ChakraButton
    h={12}
    sx={sx}
    w="full"
    type={type}
    borderRadius="lg"
    isLoading={isLoading}
    isDisabled={isDisabled}
    colorScheme="messenger"
  >
    {children}
  </ChakraButton>
);

Button.defaultProps = {
  type: "button",
};

export default Button;
