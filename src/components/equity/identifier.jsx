import { Table, TableCell, TableHead, TableRow,TableBody, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allequity,deleteequtiydata  } from "../../service-api/api"

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



const EqSecurityIdentifier=() => {

    const[bonds,setBonds]=useState([]);

    useEffect(() => {
        getEquity();
    },[]);

    const getEquity= async() => {
        let response=await allequity();
        console.log(response.data);
        setBonds(response.data);
    }

    const deleteEquity= async (id) => {
        await deleteequtiydata(id);
        getEquity();
    }


    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>CUSIP</TableCell>
                    <TableCell>ISIN</TableCell>
                    <TableCell>SEDOL</TableCell>
                    <TableCell>BBG_Ticker</TableCell>
                    <TableCell>BBG_UniqueID</TableCell>
                    <TableCell>BBG_GlobalID</TableCell>
                    <TableCell>Ticker_N_Exchange</TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.cusip}</TableCell>
                            <TableCell>{bond.isin}</TableCell>
                            <TableCell>{bond.sedol}</TableCell>
                            
                            <TableCell>{bond.bloombergTicker}</TableCell>
                            <TableCell>{bond.bloombergUniqueId}</TableCell>
                            <TableCell>{bond.bbgGlobalId}</TableCell>
                            <TableCell>{bond.tickerAndExchange}</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default EqSecurityIdentifier