type FetchApiMethod = "POST" | "GET" | "PUT" | "DELETE";

export type ApiErrorResponse = {
  code: number;
  message: string;
};

export type ApiResponse<TT extends object = object> = {
  code: number;
  payload: TT;
};

export type Fetcher<T extends object> = Partial<{
  body: T;
  method: FetchApiMethod;
  headers: Record<string, string>;
}>;
