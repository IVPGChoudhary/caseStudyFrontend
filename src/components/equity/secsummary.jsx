import { Table, TableCell, TableHead, TableRow,TableBody, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect,useState } from "react"
import { getequity,allequity,deleteequtiydata} from "../../service-api/api"
import {  useParams,useNavigate } from 'react-router-dom';

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
    font-size:17px;
    background-color:white;
}
`



const EqSecuritysummary=() => {
    const {id}=useParams();

    const[bonds,setBonds]=useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData= async() => {
        let response=await getequity(id);
        console.log(response.data);
        setBonds(response.data);
    }

    const deleteEquity= async (id) => {
        await deleteequtiydata(id);
        getData();
    }


    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Security_Id</TableCell>
                    <TableCell>Security_Name</TableCell>
                    <TableCell>Security_Description</TableCell>
                    <TableCell>Has_Posistion</TableCell>
                    <TableCell>IsActive</TableCell>
                    <TableCell>RoundLotSize</TableCell>
                    <TableCell>BBGUniqueName</TableCell>
                </THead>
            </TableHead>

            <TableBody>
                {
                    
                        <TBody>
                            <TableCell>{bonds.securityId}</TableCell>
                            <TableCell>{bonds.securityName}</TableCell>
                            <TableCell>{bonds.securityDescription}</TableCell>
                            
                            <TableCell>{bonds.hasPosition}</TableCell>
                            <TableCell>{bonds.isActiveSecurity}</TableCell>
                            <TableCell>{bonds.lotSize}</TableCell>
                            <TableCell>{bonds.bbgUniqueName}</TableCell>
                        </TBody>
                
                }
            </TableBody>

        </StyledTable>
     );
    }
    
    export default EqSecuritysummary