import { Table, TableCell, TableHead, TableRow,TableBody,TableContainer} from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allbond,deletebonddata } from "../../service-api/api"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const StyledTable=styled(Table)`
width:100%;
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



const Detailsbond=() => {

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
        <TableContainer component={Paper}>
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>FirstCoupon_Date</TableCell>
                    <TableCell> CouponCap </TableCell>
                    <TableCell> CouponFloor </TableCell>
                    <TableCell> CouponFrequency </TableCell>
                    <TableCell> CouponRate </TableCell>
                    <TableCell> CouponType</TableCell>
                    <TableCell> FloatSpread </TableCell>
                    <TableCell> IsCallable </TableCell>
                    <TableCell> IsFixtoFloat </TableCell>
                    <TableCell> IsPutable </TableCell>
                    <TableCell> IssueDate </TableCell>
                    <TableCell> Last_ResetDate</TableCell>
                    <TableCell> Maturity </TableCell>
                    <TableCell> MaxCallNoticeDays </TableCell>
                    <TableCell> MaxPutNoticeDays </TableCell>
                    <TableCell> PenultimateCouponDate </TableCell>
                    <TableCell> ResetFrequency</TableCell>
                    <TableCell> HasPosition </TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.firstCouponDate }</TableCell>
                            <TableCell>{bond.couponCap}</TableCell>
                            <TableCell>{bond.couponFloor  }</TableCell>
                            <TableCell>{bond.couponFrequency  }</TableCell>
                            <TableCell>{bond.couponRate  }</TableCell>
                            <TableCell>{bond.couponType }</TableCell>
                            <TableCell>{bond.floatSpread }</TableCell>
                            <TableCell>{bond.isCallable  }</TableCell>
                            <TableCell>{bond.isFixToFloat  }</TableCell>
                            <TableCell>{bond.isPutable  }</TableCell>
                            <TableCell>{bond.issueDate }</TableCell>
                            <TableCell>{bond.lastResetDate }</TableCell>
                            <TableCell>{bond.maturity}</TableCell>
                            <TableCell>{bond.maxCallNoticeDays }</TableCell>
                            <TableCell>{bond.maxPutNoticeDays  }</TableCell>
                            <TableCell>{bond.penultimateCouponDate }</TableCell>
                            <TableCell>{bond.resetFrequency }</TableCell>
                            <TableCell>{bond.hasPosition  }</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>

        </TableContainer>
     );
    }
    
    export default Detailsbond