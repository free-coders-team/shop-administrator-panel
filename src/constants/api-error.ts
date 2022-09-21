import { ApiErrorResponse } from "@/typings/fetch-api";

export const DEFAULT_API_ERROR: ApiErrorResponse = {
  code: 404,
  message: "Ocurrio un error inesperado en el servidor",
};
