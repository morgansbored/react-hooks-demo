import { AppProps } from "next/app";
import theme from "../theme";
import Layout from "../components/layout";
import { store } from "../store"
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
    </>
  );
};

export default App;
