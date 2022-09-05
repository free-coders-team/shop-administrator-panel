import { useForm } from "react-hook-form";
import { useBoolean } from "@chakra-ui/react";

type FormState = {
  email: string;
  password: string;
};

const useLoginPage = () => {
  const [isLoading, setLoading] = useBoolean();

  const { control, handleSubmit, formState, setError } = useForm<FormState>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(({ password, email }) => {
    if (!email || !password) {
      !email &&
        setError("email", {
          message: "Este campo es requerido.",
        });

      !password &&
        setError("password", {
          message: "Este campo es requerido.",
        });

      return;
    }

    setLoading.on();
  });

  return {
    control,
    onSubmit,
    isLoading,
    error: {
      email: formState.errors.email,
      password: formState.errors.password,
    },
  };
};

export default useLoginPage;
