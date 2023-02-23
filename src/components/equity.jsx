import { Table, TableCell, TableHead, TableRow,TableBody, Button, Stack, Grid } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allequity,deleteequtiydata } from "../service-api/api"
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
    font-size:15px;
}
`



const AllEquity =() => {

    const[equity,setEquity]=useState([]);

    useEffect(() => {
        getEquity();
    },[]);

    const getEquity= async() => {
        let response=await allequity();
        console.log(response.data);
        setEquity(response.data);
    }

    const deleteEquity= async (id) => {
        await deleteequtiydata(id);
        getEquity();
    }


    return(
        <container>
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>EqutiyId</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>DividendType</TableCell>
                    <TableCell>BidPrice</TableCell>
                    <TableCell>BBGTicker</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    equity.map(eq => (
                        <TBody>
                            <TableCell>{eq.securityId}</TableCell>
                            <TableCell>{eq.securityDescription}</TableCell>
                            <TableCell>{eq.securityName}</TableCell>
                            <TableCell>{eq.dividendType}</TableCell>
                            <TableCell>{eq.bidPrice}</TableCell>
                            <TableCell>{eq.bloombergTicker}</TableCell>
                            <TableCell>
                                <Stack direction={'row'}>
                                <Button variant="contained" style={{marginRight:10}} component ={Link} to={`/allviewsequity/${eq.securityId}`}>More Info</Button>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/editequtiy/${eq.securityId}`}>Edit</Button>
                                <Button variant="contained" onClick={() => deleteEquity(eq.securityId)}>Delete</Button>
                                </Stack>
                                
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
        </container>
     );
    }
    
    export default AllEquity

    