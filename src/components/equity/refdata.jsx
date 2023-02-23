import { Table, TableCell, TableHead, TableRow,TableBody, Button, TableContainer, Stack } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allequity, deleteequtiydata} from "../../service-api/api"


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



const EqReferenceData=() => {

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
                    <TableCell>IssueCountry</TableCell>
                    <TableCell>Exchange</TableCell>
                    <TableCell>Issuer</TableCell>
                    <TableCell>IssueCurrency</TableCell>
                    <TableCell>TradingCurrency</TableCell>
                    <TableCell>BBG_Industry_Subgroup</TableCell>
                    <TableCell>BBG_Industry_Group</TableCell>
                    <TableCell>BBG_Industry_Sector</TableCell>
                    <TableCell>RiskCurrency</TableCell>
                </THead>
            </TableHead>
            

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.issueCountry}</TableCell>
                            <TableCell>{bond.exchange}</TableCell>
                            <TableCell>{bond.issuer}</TableCell>
                            
                            <TableCell>{bond.issueCurrency}</TableCell>
                            <TableCell>{bond.tradingCurrency}</TableCell>
                            <TableCell>{bond.bbgIndustrySubGroup}</TableCell>
                            <TableCell>{bond.bloombergIndustryGroup}</TableCell>
                            <TableCell>{bond.bloombergSector}</TableCell>
                            <TableCell>{bond.riskCurrency}</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>

        </TableContainer>
     );
    }
    
    export default EqReferenceData