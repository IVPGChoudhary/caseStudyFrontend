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



const ReferenceData=() => {

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
                    <TableCell>BBG IndustryGroup</TableCell>
                    <TableCell> BBGIndustrySubGroup </TableCell>
                    <TableCell> BBG IndustrySector </TableCell>
                    <TableCell> IssueCountry </TableCell>
                    <TableCell> IssueCurrencyProfile</TableCell>
                    <TableCell> Issuer </TableCell>
                    <TableCell> RiskCurrency </TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.bbgIndustryGroup }</TableCell>
                            <TableCell>{bond.bbgIndustrySubGroup}</TableCell>
                            <TableCell>{bond.bbgIndustrySector }</TableCell>
                            <TableCell>{bond.issueCountry  }</TableCell>
                            <TableCell>{bond.issueCurrency  }</TableCell>
                            <TableCell>{bond.issuer }</TableCell>
                            <TableCell>{bond.riskCurrency }</TableCell>
                            <TableCell>{bond.pf }</TableCell>
                            
                            
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default ReferenceData