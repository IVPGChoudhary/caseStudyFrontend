import { useState } from "react";
import { FormControl, FormGroup, Input, InputLabel,Typography,Button,styled } from "@mui/material";

import { addBond, addEquity } from "../service-api/api";
import { useNavigate } from "react-router-dom";


const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
    margin-top:20px;
}
`

const NewButton=styled(Button)`
text-decoration: none;
`

const AddBond= () => 
{
  const[user,setUser]=useState({});
  const navigate=useNavigate(); 

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const addUserDetails = async () => {
    await addEquity(user);
    navigate('/');
  }

  return(

    <Container>
    <Typography variant="h4"  color='white' bgcolor='#1976d2' align="center">Add Equity</Typography>
    

    <FormControl>
                <InputLabel>securityId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="securityId" />
            </FormControl>

<FormControl>
                <InputLabel>securityName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="securityName" />
            </FormControl>

<FormControl>
                <InputLabel>securityDescription</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="securityDescription" />
            </FormControl>

<FormControl>
                <InputLabel>hasPosistion</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="hasPosistion" />
            </FormControl>

<FormControl>
                <InputLabel>isActive</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="isActive" />
            </FormControl>

<FormControl>
                <InputLabel>roundLotSize</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="roundLotSize" />
            </FormControl>

<FormControl>
                <InputLabel>bloombergUniqueName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="bloombergUniqueName" />
            </FormControl>

<FormControl>
                <InputLabel>cusip</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="cusip" />
            </FormControl>

<FormControl>
                <InputLabel>sedol</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="sedol" />
            </FormControl>

<FormControl>
                <InputLabel>bloombergTicker</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="bloombergTicker" />
            </FormControl>

<FormControl>
                <InputLabel>bbgUniqueId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="bbgUniqueId" />
            </FormControl>

<FormControl>
                <InputLabel>bbgGlobalId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="bbgGlobalId" />
            </FormControl>

<FormControl>
                <InputLabel>tickerAndExcahnge</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="tickerAndExcahnge" />
            </FormControl>

<FormControl>
                <InputLabel>isAdr</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="isAdr" />
            </FormControl>

<FormControl>
                <InputLabel>adrUnderlyingTicker</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="adrUnderlyingTicker" />
            </FormControl>
<FormControl>
                <InputLabel>adrUnderlyingCurrency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="adrUnderlyingCurrency" />
            </FormControl>

<FormControl>
                <InputLabel>sharesPerAdr</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="sharesPerAdr" />
            </FormControl>

<FormControl>
                <InputLabel>ipoDate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="ipoDate" />
            </FormControl>

<FormControl>
                <InputLabel>priceCurrency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="priceCurrency" />
            </FormControl>

<FormControl>
                <InputLabel>settleDays</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="settleDays" />
            </FormControl>

<FormControl>
                <InputLabel>totalSharesOutstading</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="totalSharesOutstading" />
            </FormControl>

<FormControl>
                <InputLabel>IvotingRightPerShaBre</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="votingRightPerShaBre" />
            </FormControl>

<FormControl>
                <InputLabel> avgVol20days</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="avgVol20days" />
            </FormControl>

<FormControl>
                <InputLabel>beta</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="beta" />
            </FormControl>

<FormControl>
                <InputLabel>shortIntrest</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="shortIntrest" />
            </FormControl>

<FormControl>
                <InputLabel>ytdReturn</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="ytdReturn" />
            </FormControl>

<FormControl>
                <InputLabel>volatility90days</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="volatility90days" />
            </FormControl>

<FormControl>
                <InputLabel>pfAssetClass</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfAssetClass" />
            </FormControl>

<FormControl>
                <InputLabel>pfCountry</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfCountry" />
            </FormControl>

<FormControl>
                <InputLabel>pfCreditRating</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfCreditRating" />
            </FormControl>

<FormControl>
                <InputLabel>pfCurrency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfCurrency" />
            </FormControl>

<FormControl>
                <InputLabel>pfInstrument</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfInstrument" />
            </FormControl>

<FormControl>
                <InputLabel>pfLiquidityProfile</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfLiquidityProfile" />
            </FormControl>

<FormControl>
                <InputLabel>pfMaturity</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfMaturity" />
            </FormControl>

<FormControl>
                <InputLabel>pfNaicsCode</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfNaicsCode" />
            </FormControl>

<FormControl>
                <InputLabel> pfRegion</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfRegion" />
            </FormControl>

<FormControl>
                <InputLabel>pfSector</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfSector" />
            </FormControl>

<FormControl>
                <InputLabel>pfSubAssetClass</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="pfSubAssetClass" />
            </FormControl>

<FormControl>
                <InputLabel>issueCountry</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="issueCountry" />
            </FormControl>
<FormControl>
                <InputLabel>exchange</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="exchange" />
            </FormControl>
<FormControl>
                <InputLabel>issuer</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="issuer" />
            </FormControl>
<FormControl>
                <InputLabel>issueCurrency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="issueCurrency" />
            </FormControl>
<FormControl>
                <InputLabel>tradingCurrency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="tradingCurrency" />
            </FormControl>
<FormControl>
                <InputLabel>bbgIndustrySubGroup</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="bbgIndustrySubGroup" />
            </FormControl>
<FormControl>
                <InputLabel>bbgIndustryGroup</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="bbgIndustryGroup" />
            </FormControl>
<FormControl>
                <InputLabel>bbgIndistrySector</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="bbgIndistrySector" />
            </FormControl>
<FormControl>
                <InputLabel>countryOfIncorp</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="countryOfIncorp" />
            </FormControl>
<FormControl>
                <InputLabel>riskCurrency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="riskCurrency" />
            </FormControl>
<FormControl>
                <InputLabel>openPrice</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="openPrice" />
            </FormControl>
<FormControl>
                <InputLabel>closePrice</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="closePrice" />
            </FormControl>
<FormControl>
                <InputLabel>volume</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="volume" />
            </FormControl>
<FormControl>
                <InputLabel>lastPrice</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="lastPrice" />
            </FormControl>
<FormControl>
                <InputLabel>askPrice</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="askPrice" />
            </FormControl>
<FormControl>
                <InputLabel>bidPrice</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="bidPrice" />
            </FormControl>
<FormControl>
                <InputLabel>peRatio</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="peRatio" />
            </FormControl>
<FormControl>
                <InputLabel>declaredDate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="declaredDate" />
            </FormControl>
<FormControl>
                <InputLabel>exDate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="exDate" />
            </FormControl>
<FormControl>
                <InputLabel>recordDate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="recordDate" />
            </FormControl>
<FormControl>
                <InputLabel>payDate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="payDate" />
            </FormControl>
<FormControl>
                <InputLabel>amount</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="amount" />
            </FormControl>
<FormControl>
                <InputLabel>frequency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="frequency" />
            </FormControl>
<FormControl>
                <InputLabel>dividendType</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="dividendType" />
            </FormControl>

      <FormControl>
          <NewButton onClick={() => addUserDetails()} variant="contained"><b>Add Equity</b></NewButton>
      </FormControl>

</Container>

  );

}


export default AddBond
    