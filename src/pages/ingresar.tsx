import { NextPage } from "next";
import { Box, Flex, Grid, Heading, useTheme } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

import { IcMail, IcKey } from "@/icons";

import Form from "@/components/form";
import Button from "@/components/button";

import useLoginPage from "@/hooks/use-login-page";

const LoginPage: NextPage = () => {
  const theme = useTheme();

  const { control, onSubmit, error, isLoading } = useLoginPage();

  return (
    <Flex justifyContent="center">
      <Box py={16}>
        <Heading textAlign="center">Organization Name</Heading>
        <Box as="form" onSubmit={onSubmit} w={96} maxW={96} mt={32} mx="auto">
          <Grid rowGap={10}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onBlur, name, onChange, ref } }) => (
                <Form.Control
                  ref={ref}
                  name={name}
                  type="email"
                  onBlur={onBlur}
                  onChange={onChange}
                  error={error.email?.message}
                  isError={Boolean(error.email)}
                  label={{
                    text: "Correo Electronico",
                    icon: <IcMail style={{ transform: "scale(0.8)" }} />,
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onBlur, name, onChange, ref } }) => (
                <Form.Control
                  ref={ref}
                  name={name}
                  type="password"
                  onBlur={onBlur}
                  onChange={onChange}
                  error={error.password?.message}
                  isError={Boolean(error.password)}
                  label={{
                    text: "Contraseña",
                    icon: <IcKey style={{ transform: "scale(0.8)" }} />,
                  }}
                />
              )}
            />
          </Grid>
          <Box mt={16}>
            <Button type="submit" isLoading={isLoading}>
              Ingresar
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        w={80}
        h={80}
        right={-32}
        bottom={-32}
        position="fixed"
        borderRadius="full"
        backgroundColor={theme.base.default}
      />
    </Flex>
  );
};

export default LoginPage;
