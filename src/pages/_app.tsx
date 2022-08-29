import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import environment from '@/relay/Environment';

export default function MyApp({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="loading...">
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
