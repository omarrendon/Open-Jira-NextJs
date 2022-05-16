import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css';

const basicTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
