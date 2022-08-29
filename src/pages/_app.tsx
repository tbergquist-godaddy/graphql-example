import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { ChakraProvider, ColorModeProvider, extendTheme, Box } from '@chakra-ui/react';

import environment from '@/relay/Environment';
import Navbar from '@/modules/navbar/Navbar';

const fonts = {
  body: `'Roboto', sans-serif`,
  heading: '',
};
fonts.heading = fonts.body;

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <RelayEnvironmentProvider environment={environment}>
          <>
            <Box mb={4}>
              <Navbar />
            </Box>
            <Suspense fallback="loading...">
              <Component {...pageProps} />
            </Suspense>
          </>
        </RelayEnvironmentProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
