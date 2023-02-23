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



const EqSecurityDetails=() => {

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
                    <TableCell>ISADR</TableCell>
                    <TableCell>ADRUnderlyingTicker</TableCell>
                    <TableCell>SharesperADR</TableCell>
                    <TableCell>IPODate</TableCell>
                    <TableCell>PriceCurrency</TableCell>
                    <TableCell>SettleDays</TableCell>
                    <TableCell>TotalSharesOutstanding</TableCell>
                    <TableCell>VotingRights</TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.isAdrFlag}</TableCell>
                            <TableCell>{bond.adrUnderlyingTicker}</TableCell>
                            <TableCell>{bond.sharesPerAdr}</TableCell>
                            
                            <TableCell>{bond.ipoDate}</TableCell>
                            <TableCell>{bond.pricingCurrency}</TableCell>
                            <TableCell>{bond.settleDays}</TableCell>
                            <TableCell>{bond.totalSharesOutstanding}</TableCell>
                            <TableCell>{bond.votingRightsPerShare}</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default EqSecurityDetails