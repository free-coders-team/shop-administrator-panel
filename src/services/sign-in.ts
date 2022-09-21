import { fetchApi } from "@/utils/fetch-api";
import { AUTH_ENDPOINTS } from "@/constants/api-endpoints";

type SignInBody = {
  email: string;
  password: string;
};

type SignInResponse = {
  token: string;
};

const signInService = async ({ email, password }: SignInBody) => {
  const responseData = await fetchApi<SignInBody, SignInResponse>(AUTH_ENDPOINTS.SIGN_IN, {
    method: "POST",
    body: {
      email,
      password,
    },
  });

  return responseData;
};

export default signInService;
