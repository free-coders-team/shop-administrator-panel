import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { queryParse } from "@/utils/next-query";

const useNextParams = <T>(): [boolean, Partial<T>] => {
  const router = useRouter();

  const query = router.query as unknown as T;

  const [queryParams, setQueryParams] = useState<Partial<T>>({});
  const [routerLoaded, setRouterLoaded] = useState<boolean>(false);

  useEffect(() => {
    setRouterLoaded(() => true);
    setQueryParams(() => queryParse<T>(query));

    router.replace(router.pathname, undefined, {
      shallow: true,
    });
  }, []);

  return [routerLoaded, queryParams];
};

export default useNextParams;
