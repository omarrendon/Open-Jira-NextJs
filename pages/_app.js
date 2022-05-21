import '../styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ligthTheme, darkTheme } from '../themes';
import { UIProvider } from '../context/ui';


function MyApp({ Component, pageProps }) {
  return (
    <UIProvider >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}

export default MyApp
