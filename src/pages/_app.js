import 'bootstrap/dist/css/bootstrap.css';
import "../../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={client}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
