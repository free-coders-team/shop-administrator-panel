import "@/styles/index.scss";

import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPageWithLayout } from "@/typings/web/next-page";

import store from "@/store";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider>
      <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
    </ChakraProvider>
  );
};

export default MyApp;
