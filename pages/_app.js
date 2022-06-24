import '../styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';

import { ligthTheme, darkTheme } from '../themes';

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider >
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}

export default MyApp
