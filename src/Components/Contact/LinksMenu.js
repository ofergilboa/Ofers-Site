import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import OferGilboaCV from '../../files/OferGilboaCV.pdf'


export default function ContactMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div>
         <Button className="links" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Links
         </Button>
         <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onMouseLeave={handleClose}
         >
            <MenuItem onClick={handleClose}><a href={OferGilboaCV} download="Ofer Gilboa CV">Download CV</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="https://www.linkedin.com/in/ofer-gilboa" target="blank">LinkedIn</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="https://github.com/ofergilboa" target="blank">GitHub</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="https://www.codewars.com/users/ofergilboa" target="blank">CodeWars</a></MenuItem>
         </Menu>
      </div>
   );
}