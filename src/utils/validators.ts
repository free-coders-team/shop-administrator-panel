import { NODE_ENV } from "@/constants/enviroment";
import { ApiErrorResponse, ApiResponse } from "@/typings/fetch-api";

export const isErrorResponse = (data: unknown): data is ApiErrorResponse => {
  return (
    typeof (data as ApiErrorResponse)?.message !== "undefined" &&
    typeof (data as ApiResponse)?.payload === "undefined"
  );
};

export const isProduction = () => NODE_ENV === "production";
export const isDevelopment = () => NODE_ENV === "development";
