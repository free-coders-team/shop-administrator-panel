export const queryParse = <T>(query: T) => {
  const params = {} as T;
  const keys = Object.keys(query as unknown as object);

  keys.forEach((v) => {
    const key = v as keyof T;
    const keyValue = query[key];

    if (typeof keyValue !== "string") {
      params[key] = keyValue;
      return;
    }

    try {
      params[key] = JSON.parse(keyValue);
    } catch (error) {
      params[key] = keyValue;
    }
  });

  return params;
};
