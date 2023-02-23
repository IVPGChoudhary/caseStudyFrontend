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



const EqRisk=() => {

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
                    <TableCell>Avg_Vol_Days</TableCell>
                    <TableCell>Beta</TableCell>
                    <TableCell>Short_Interest</TableCell>
                    <TableCell>YTD_Return</TableCell>
                    <TableCell>Volatility_90Days</TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.averageVolume20d}</TableCell>
                            <TableCell>{bond.beta}</TableCell>
                            <TableCell>{bond.shortInterest}</TableCell>
                            
                            <TableCell>{bond.returnYtd}</TableCell>
                            <TableCell>{bond.volatility90d}</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default EqRisk