import '../styles/globals.css'

import SocialMedia from "../components/HomeMenu/SocialMedia"

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <SocialMedia/>
  </>
  )
}

export default MyApp
