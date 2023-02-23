import { Table, TableCell, TableHead, TableRow,TableBody, Button, Stack } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allbond,deletebonddata } from "../service-api/api"
import { Link } from "react-router-dom"

const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto;
`

const THead=styled(TableRow)`
 background:#000;

& > th{
    font-size:17px;
    color:white;
    background-color:#1976d2;
}
`
const TBody=styled(TableRow)`
& > td {
    font-size:17px;
}
`



const AllBond =() => {

    const[bonds,setBonds]=useState([]);

    useEffect(() => {
        getBond();
    },[]);

    const getBond= async() => {
        let response=await allbond();
        console.log(response);
        setBonds(response.data);
    }

    const deleteBond= async (id) => {
        await deletebonddata(id);
        getBond();
    }


    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>BondId</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Cusip</TableCell>
                    <TableCell>BBG Ticker</TableCell>
                    <TableCell>Coupon Rate</TableCell>
                    <TableCell>BidPrice</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.bondId}</TableCell>
                            <TableCell>{bond.securityDescription}</TableCell>
                            <TableCell>{bond.cusip}</TableCell>
                            <TableCell>{bond.bbgTicker}</TableCell>
                            <TableCell>{bond.couponRate}</TableCell>
                            <TableCell>{bond.bidPrice}</TableCell>
                            <TableCell>
                                <Stack direction={'row'}>
                                <Button variant="contained" style={{marginRight:10}} component ={Link} to={'/allviewsbond'}>More Info</Button>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/editbond/${bond.bondId}`}>Edit</Button>
                                <Button variant="contained" onClick={() => deleteBond(bond.bondId)}>Delete</Button>
                                </Stack>
                                
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default AllBond

    