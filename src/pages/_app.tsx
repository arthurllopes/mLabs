import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  fab,
  faLinkedin,
  faInstagram,
  faFacebook,
  faYoutube,
  faPinterest,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

library.add(fab,faLinkedin,
  faInstagram,
  faFacebook,
  faYoutube,
  faPinterest,
  faTwitter
)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
