import '@/styles/globals.css'
import { cacheExchange, fetchExchange } from '@urql/core'
import { Provider, createClient} from 'urql';
import Nav from '@/components/nav';
import { StateContext } from '@/lib/context';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';

const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API, exchanges: [cacheExchange, fetchExchange]} );

export default function App({ Component, pageProps }) {
  return(
    <UserProvider>
      <StateContext>
      <Provider value={client}>
        <Toaster/>
        <Nav/>
        <Component {...pageProps} />
        <Footer/>
      </Provider>
      </StateContext>
    </UserProvider>
  )
}
