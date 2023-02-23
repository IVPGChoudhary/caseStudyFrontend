import { Table, TableCell, TableHead, TableRow,TableBody, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allequity,deleteequtiydata } from "../../service-api/api"

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



const EqPricingDeatils=() => {

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
                    <TableCell>OpenPrice</TableCell>
                    <TableCell>ClosePrice</TableCell>
                    <TableCell>Volume</TableCell>
                    <TableCell>LastPrice</TableCell>
                    <TableCell>AskPrice</TableCell>
                    <TableCell>Bidprice</TableCell>
                    <TableCell>PERatio</TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.openPrice}</TableCell>
                            <TableCell>{bond.closePrice}</TableCell>
                            <TableCell>{bond.volume}</TableCell>
                            
                            <TableCell>{bond.lastPrice}</TableCell>
                            <TableCell>{bond.askPrice}</TableCell>
                            <TableCell>{bond.bidPrice}</TableCell>
                            <TableCell>{bond.peRatio}</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default EqPricingDeatils