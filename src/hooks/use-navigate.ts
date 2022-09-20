import { useRouter } from "next/router";

import { PAGE_ROUTES } from "@/constants/page-routes";

const useNavigate = () => {
  const router = useRouter();

  const back = () => router.back();
  const navigate = (keyPath: keyof typeof PAGE_ROUTES) => router.push(PAGE_ROUTES[keyPath]);

  return {
    back,
    navigate,
  };
};

export default useNavigate;
