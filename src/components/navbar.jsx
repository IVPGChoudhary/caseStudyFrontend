import {AppBar,Toolbar ,Typography,styled, Tab, IconButton} from '@mui/material'

import { NavLink, Link } from 'react-router-dom';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddIcon from '@mui/icons-material/Add';

const Headers =styled(AppBar)`
background color: blue;
`;

const Tabs=styled(NavLink)`
font-size:15px;
margin-right:40px;
color:white;
text-decoration: none
`
const Name=styled(Typography)`
margin-right:680px;
`

const Navbar= () => {
    return(
        <Headers position='static'>
            <Toolbar>
                <IconButton component={Link} to={"/"}>
                <CurrencyExchangeIcon style={{color:'white'}}/>
                </IconButton>
            
                <Name variant='h5'><b>SECMASTER</b> </Name>
                <Tabs to="/"><b>EQUITIES</b></Tabs>
                <AddIcon />
                <Tabs to="/addequity"><b>ADD EQUITY</b></Tabs>
                <Tabs to="/bond"><b>BONDS</b></Tabs>
                <AddIcon />
                <Tabs to="/addbond"><b>ADD BOND</b></Tabs>
            </Toolbar>
        </Headers>
    )
}

export default Navbar