import { Table, TableCell, TableHead, TableRow,TableBody, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allbond,deletebonddata} from "../../service-api/api"
import { Link } from "react-router-dom"

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



const PricingAndAnalytics=() => {

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
                    <TableCell>Ask Price</TableCell>
                    <TableCell> High Price </TableCell>
                    <TableCell> Low Price </TableCell>
                    <TableCell> Open Price </TableCell>
                    <TableCell> Volume </TableCell>
                    <TableCell> Bid Price</TableCell>
                    <TableCell> Last Price</TableCell>
                    
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.askPrice }</TableCell>
                            <TableCell>{bond.highPrice}</TableCell>
                            <TableCell>{bond.lowPrice }</TableCell>
                            <TableCell>{bond.openPrice  }</TableCell>
                            <TableCell>{bond.volume  }</TableCell>
                            <TableCell>{bond.bidPrice }</TableCell>
                            <TableCell>{bond.lastPrice }</TableCell>
                            
                            
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default PricingAndAnalytics