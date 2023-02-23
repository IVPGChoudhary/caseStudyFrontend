import { Table, TableCell, TableHead, TableRow,TableBody, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allbond,deletebonddata  } from "../../service-api/api"

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



const RegulatoryDetail=() => {

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
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell> PF_AssetClass</TableCell>
                    <TableCell> PF_Country </TableCell>
                    <TableCell> PF_CreditRating </TableCell>
                    <TableCell> PFCurrency </TableCell>
                    <TableCell> PFInstrument </TableCell>
                    <TableCell> PFLiquidity_Profile</TableCell>
                    <TableCell> PFMaturity </TableCell>
                    <TableCell> PF_NAICSCode </TableCell>
                    <TableCell> PFRegion </TableCell>
                    <TableCell> PFSector </TableCell>
                    <TableCell> PFSubAsset_Class</TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.pfAssetClass }</TableCell>
                            <TableCell>{bond.pfCountry}</TableCell>
                            <TableCell>{bond.pfCreditRating  }</TableCell>
                            <TableCell>{bond.pfCurrency  }</TableCell>
                            <TableCell>{bond.pfInstrument  }</TableCell>
                            <TableCell>{bond.pfLiquidityProfile }</TableCell>
                            <TableCell>{bond.pfMaturity }</TableCell>
                            <TableCell>{bond.pfNaicsCode }</TableCell>
                            <TableCell>{bond.pfRegion  }</TableCell>
                            <TableCell>{bond.pfSector  }</TableCell>
                            <TableCell>{bond.pfSubAssetClass }</TableCell>
                            
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default RegulatoryDetail