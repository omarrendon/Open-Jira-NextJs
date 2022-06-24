import { useContext } from "react";
import { UIContext } from "../../context/ui";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NextLink from "next/link";

export const Navbar = () => {

  const { openSideBarUI } = useContext(UIContext);


  return (
    <AppBar position="sticky" >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color="inherit"
          onClick={openSideBarUI}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href='/' passHref>
          <Link underline="none" color='white'>
            <Typography variant="h6" sx={{ cursor: 'pointer' }}>
              OpenJira
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
