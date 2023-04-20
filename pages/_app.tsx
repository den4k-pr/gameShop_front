import { store } from '@/app/store/store'
import '@/styles/globals.css'
import '@/styles/style.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}