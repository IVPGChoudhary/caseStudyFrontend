import { Table, TableCell, TableHead, TableRow,TableBody, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allbond,deletebonddata } from "../../service-api/api"

const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto;
`

const THead=styled(TableRow)`
 background:#000;

& > th{
    font-size:20px;
    color:white;
    background-color:#1976d2;
}
`
const TBody=styled(TableRow)`
& > td {
    font-size:15px;
}
`



const Riskbond=() => {

    const[bonds,setBonds]=useState([]);

    useEffect(() => {
        getBond();
    },[]);

    const getBond= async() => {
        let response=await allbond();
        console.log(response.data);
        setBonds(response.data);
    }

    const deleteBond= async (id) => {
        await deletebonddata(id);
        getBond();
    }


    return(
        <box>
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Macaulay Duration</TableCell>
                    <TableCell> Volatility 30 Days </TableCell>
                    <TableCell> Volatility 90 Days </TableCell>
                    <TableCell> Convexity </TableCell>
                    <TableCell> Avg. Volume 30 Days </TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.macaulayDuration }</TableCell>
                            <TableCell>{bond.volatility30days}</TableCell>
                            <TableCell>{bond.volatility90days  }</TableCell>
                            <TableCell>{bond.convexity }</TableCell>
                            <TableCell>{bond.avgVolume30days  }</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
        </box>
     );
    }
    
    export default Riskbond