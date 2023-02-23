import { Table, TableCell, TableHead, TableRow,TableBody, Button, TableContainer } from "@mui/material"
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



const EqRegulatoryDetails=() => {

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
        <TableContainer>
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>PF_AssetClass</TableCell>
                    <TableCell>PF_Country</TableCell>
                    <TableCell>PF_Credit_Rating</TableCell>
                    <TableCell>PF_Currency</TableCell>
                    <TableCell>PF_Instrument</TableCell>
                    <TableCell>PF_Liquidity_Profile</TableCell>
                    <TableCell>PF_Maturity</TableCell>
                    <TableCell>PF_NAICS_Code</TableCell>
                    <TableCell>PF_Region</TableCell>
                    <TableCell>PF_Sector</TableCell>
                    <TableCell>PF_Sub_AssetClass</TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.pfAssetClass}</TableCell>
                            <TableCell>{bond.pfCountry}</TableCell>
                            <TableCell>{bond.pfCreditRating}</TableCell>
                            
                            <TableCell>{bond.pfCurrency}</TableCell>
                            <TableCell>{bond.pfInstrument}</TableCell>
                            <TableCell>{bond.pfLiquidityProfile}</TableCell>
                            <TableCell>{bond.pfMaturity}</TableCell>
                            <TableCell>{bond.pfNaicsCode}</TableCell>
                            <TableCell>{bond.pfRegion}</TableCell>
                            <TableCell>{bond.pfSector}</TableCell>
                            <TableCell>{bond.pfSubAssetClass}</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>

        </TableContainer>
     );
    }
    
    export default EqRegulatoryDetails