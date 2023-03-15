import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import '../styles/Navbar.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
      
    </>
  )
}

export default MyApp