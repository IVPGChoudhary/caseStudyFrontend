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
`
const TBody=styled(TableRow)`
& > td {
    font-size:15px;
}
`



const EqDivHistory=() => {

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
                    <TableCell>Declared_Date</TableCell>
                    <TableCell>Ex_Date</TableCell>
                    <TableCell>Record_Date</TableCell>
                    <TableCell>PayDate</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Frequency</TableCell>
                    <TableCell>Dividend_Type</TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.dividendDeclaredDate}</TableCell>
                            <TableCell>{bond.dividendExDate}</TableCell>
                            <TableCell>{bond.dividendRecordDate}</TableCell>
                            
                            <TableCell>{bond.dividendPayDate}</TableCell>
                            <TableCell>{bond.dividendAmount}</TableCell>
                            <TableCell>{bond.frequency}</TableCell>
                            <TableCell>{bond.dividendType}</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default EqDivHistory