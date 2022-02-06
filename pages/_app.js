import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis'
function MyApp({ Component, pageProps }) {

  return (
  <MoralisProvider
  appId={process.env.NEXT_APP_ID}
  serverUrl={process.env.NEXT_SERVER_URL}>{
<Component {...pageProps} />
}
  </MoralisProvider>
  )
}

export default MyApp
