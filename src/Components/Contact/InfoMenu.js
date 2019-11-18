import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import OferGilboaCV from '../../files/OferGilboaCV.pdf'


export default function InfoMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };


   return (
      <div >
         <Button className="links" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} onclick={handleClick} >
            info
         </Button >
         <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onMouseLeave={handleClose}
         >
            <MenuItem onClick={handleClose}>ofer1gilboa@gmail.com</MenuItem>
            <MenuItem onClick={handleClose}>0528283312</MenuItem>
            <MenuItem onClick={handleClose}>Tel Aviv</MenuItem>
         </Menu>
      </div>
   );
}