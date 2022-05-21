import { useContext } from "react";
import { UIContext } from "../../context/ui";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

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
          <MenuOutlinedIcon/>
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
