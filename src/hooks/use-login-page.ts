import { useState } from "react";
import { useForm } from "react-hook-form";
import { useBoolean } from "@chakra-ui/react";

import useNavigate from "@/hooks/use-navigate";
import signInService from "@/services/sign-in";

import { createCookie } from "@/utils/cookie";
import { isErrorResponse } from "@/utils/validators";
import { COOKIE_TOKEN_NAME, COOKIE_TOKEN_LIFE } from "@/constants/cookies";

type FormState = {
  email: string;
  password: string;
};

type ServerError = {
  title: string;
  description: string;
};

const useLoginPage = () => {
  const [loading, setLoading] = useBoolean();
  const [serverError, setServerError] = useState<ServerError>();

  const { navigate } = useNavigate();
  const { control, handleSubmit, formState, setError } = useForm<FormState>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const hasInvalidFieldForm = (email: string, password: string) => {
    if (!email || !password) {
      !email &&
        setError("email", {
          message: "Este campo es requerido.",
        });

      !password &&
        setError("password", {
          message: "Este campo es requerido.",
        });

      return true;
    }

    return false;
  };

  const onClearServerError = () => setServerError(undefined);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    if (hasInvalidFieldForm(email, password)) {
      return;
    }

    setLoading.on();

    const responseData = await signInService({
      email,
      password,
    });

    setLoading.off();

    if (isErrorResponse(responseData)) {
      setServerError({
        title: "Error de autenticación",
        description: responseData.message,
      });
      return;
    }

    const token = responseData.payload.token;

    createCookie(COOKIE_TOKEN_NAME, `Bearer ${token}`, COOKIE_TOKEN_LIFE);
    navigate("HOME");
  });

  return {
    control,
    loading,
    onSubmit,
    onClearServerError,
    serverError,
    formError: {
      email: formState.errors.email,
      password: formState.errors.password,
    },
  };
};

export default useLoginPage;
