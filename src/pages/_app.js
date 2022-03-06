import '../../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
