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
import { faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(fab,faLinkedin,
  faInstagram,
  faFacebook,
  faYoutube,
  faPinterest,
  faTwitter,
  faCalendarDay,
  faClock
)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
