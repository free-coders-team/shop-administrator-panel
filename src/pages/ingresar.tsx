import { NextPage } from "next";
import { Controller } from "react-hook-form";
import { Box, Flex, Grid, Heading, useTheme } from "@chakra-ui/react";

import { IcMail, IcKey } from "@/icons";

import useLoginPage from "@/hooks/use-login-page";

import Form from "@/components/form";
import Button from "@/components/button";
import AlertMessage from "@/components/alert-message";

const LoginPage: NextPage = () => {
  const theme = useTheme();

  const { control, serverError, onSubmit, formError, loading, onClearServerError } =
    useLoginPage();

  return (
    <Flex justifyContent="center">
      <Box py={16}>
        <Heading textAlign="center" fontSize="4xl" letterSpacing={2}>
          Freelancer Coders
        </Heading>
        <Box
          as="form"
          p="12"
          w="md"
          mt={16}
          mx="auto"
          borderRadius={16}
          onSubmit={onSubmit}
          boxShadow="0 5px 15px rgba(0,0,0,0.1)"
        >
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
                  error={formError.email?.message}
                  isError={Boolean(formError.email)}
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
                  error={formError.password?.message}
                  isError={Boolean(formError.password)}
                  label={{
                    text: "Contraseña",
                    icon: <IcKey style={{ transform: "scale(0.8)" }} />,
                  }}
                />
              )}
            />
          </Grid>
          <Box mt={16}>
            <Button type="submit" isLoading={loading}>
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

      <AlertMessage
        open={serverError !== undefined}
        onClickDone={onClearServerError}
        title={String(serverError?.title)}
        description={String(serverError?.description)}
      />
    </Flex>
  );
};

export default LoginPage;
