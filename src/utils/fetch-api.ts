import { API_URL } from "@/constants/enviroment";
import { DEFAULT_API_ERROR } from "@/constants/api-error";
import { ApiResponse, Fetcher } from "@/typings/fetch-api";

const fetchApi = async <T extends object, TT extends object>(
  url: string,
  options: Fetcher<T>
) => {
  const endpointUrl = new URL(url, API_URL);

  try {
    const request = await fetch(endpointUrl, {
      method: options.method || "GET",
      body: JSON.stringify(options.body || {}),
      headers: {
        ...options?.headers,
        "Content-Type": "application/json",
      },
    });

    return (await request.json()) as ApiResponse<TT>;
  } catch (error) {
    return DEFAULT_API_ERROR;
  }
};

export { fetchApi };
