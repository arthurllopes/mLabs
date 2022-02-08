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
import { PostContextProvider } from '../contexts/PostContext';
import { Provider } from 'react-redux'
import store from '../redux/configureStore'


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
  return (
    <Provider store={store}>
      <PostContextProvider>
        <Component {...pageProps} />
      </PostContextProvider>
    </Provider>
    )
}

export default MyApp
