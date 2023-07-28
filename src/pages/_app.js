import '@/styles/globals.css';
import '@/styles/custom-fonts.css';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/common/Header/Header';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <AnimatePresence
        mode="wait"
        initial="false"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
