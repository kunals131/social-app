import '@/styles/globals.css';
import '@/styles/custom-fonts.css';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/common/Header/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <AnimatePresence
          mode="wait"
          initial="false"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </QueryClientProvider>
    </>
  );
}
