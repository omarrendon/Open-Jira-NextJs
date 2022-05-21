import Head from 'next/head';
import { Navbar, SideBar } from '../ui';
import { Box } from '@mui/material';

export const  Layout = ({ title = 'OpenJira - APP ', children }) => {
  return (
    <Box sx={{
      flexFlow: 1
    }}>
      <Head>
        <title>{ title }</title>
      </Head>
      <Navbar />
      <SideBar />
      <Box sx={{
        padding: '10px 20px'
      }}>
        {children}
      </Box>
    </Box>
  )
}
