import React from "react";
import TextField from '@material-ui/core/TextField';
import { HeaderStyle } from './styles';


function Header() {
   
    return (
        <HeaderStyle> 
            <h2>MySocial</h2>
            <TextField id="searchBox" type="text" variant="filled" placeholder="Search" />
        </HeaderStyle>
    )
    
}

export default Header;