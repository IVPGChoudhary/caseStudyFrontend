import { Table, TableCell, TableHead, TableRow,TableBody, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { allbond, deletebonddata } from "../../service-api/api"


const StyledTable=styled(Table)`
width:65%;
margin:50px auto 0 auto;
`

const THead=styled(TableRow)`
 background:white;

& > th{
    font-size:20px;
    color:white;
    background-color:#1976d2;
}
`
const TBody=styled(TableRow)`
& > td {

    font-size:19px;
}
`



const Callschedule=() => {

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
                    <TableCell> Call Date </TableCell>
                    <TableCell> Call Price </TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    bonds.map(bond => (
                        <TBody>
                            <TableCell>{bond.callDate }</TableCell>
                            <TableCell>{bond.callPrice  }</TableCell>
                        </TBody>
                    ))
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default Callschedule