import { Table, TableCell, TableHead, TableRow,TableBody, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allbond, deletebonddata } from "../../service-api/api"


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



const SummaryBond=() => {

    const[bonds,setBonds]=useState([]);

    useEffect(() => {
        getBond();
    },[]);

    const getBond= async() => {
        let response=await allbond();
        console.log(response.data);
        setBonds(response.data);
    }

    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>SecurityDescription </TableCell>
                    <TableCell> SecurityName </TableCell>
                    <TableCell> AssetType </TableCell>
                    <TableCell> InvestmentType </TableCell>
                    <TableCell> TradingFactor </TableCell>
                    <TableCell> PricingFactor </TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.securityDescription }</TableCell>
                            <TableCell>{bond.securityName }</TableCell>
                            <TableCell>{bond.assetType }</TableCell>
                            <TableCell>{bond.investmentType  }</TableCell> 
                            <TableCell>{bond.tradingFactor }</TableCell>
                            <TableCell>{bond.pricingFactor}</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default SummaryBond