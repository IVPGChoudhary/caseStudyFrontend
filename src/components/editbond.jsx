import { useState ,useEffect } from "react";
import { FormControl, FormGroup, Input, InputLabel,Typography,Button,styled } from "@mui/material";
import { getbond,editbond } from "../service-api/api";
import { useParams,useNavigate } from "react-router-dom";


const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
    margin-top:20px;
}
`

const EditBond = () =>{


    const[bond,setBond]=useState({})
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(() => {
        getBondData();
    },[]);

    const getBondData = async() =>{
        let response=await getbond(id);
        console.log(response);
        setBond(response.data);
    }
  
    const onValueChange = (e) => {
      setBond({...bond, [e.target.name]: e.target.value})
    }
  
    const editBond = async () => {
       await editbond(bond,id);
       navigate('/bond');
    }

    return(
        <Container>
        <Typography variant="h4">Edit Bond Bond</Typography>
        
    <FormControl>
              <InputLabel>Security_Description</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="securityDescription" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Security_Name</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="securityName" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Asset_type</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="assetType" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Investment_type</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="investmentType" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Trading_factor</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="tradingFactor" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Pricing_factor</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pricingFactor" />
          </FormControl>
    
    <FormControl>
              <InputLabel>ISIN</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="isin" />
          </FormControl>
    
    <FormControl>
              <InputLabel>BBG_Ticker</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="bbgTicker" />
          </FormControl>
    
    <FormControl>
              <InputLabel>BBG_UniqueID</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="bbgUniqueID" />
          </FormControl>
    
    <FormControl>
              <InputLabel>CUSIP</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="cusip" />
          </FormControl>
    
    <FormControl>
              <InputLabel>SEDOL</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="sedol" />
          </FormControl>
    
    <FormControl>
              <InputLabel>First_couponDate</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="firstCouponDate" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Coupon_Cap</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="couponCap" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Coupon_Floor</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="couponFloor" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Coupon_frqeuency</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="couponFrqeuency" />
          </FormControl>
    <FormControl>
              <InputLabel>Coupon_Rate</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="couponRate" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Coupon_Type</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="couponType" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Float_Spread</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="floatSpread" />
          </FormControl>
    
    <FormControl>
              <InputLabel>IS_Callable</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="isCallable" />
          </FormControl>
    
    <FormControl>
              <InputLabel>IsFixToFloat</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="isFixToFloat" />
          </FormControl>
    
    <FormControl>
              <InputLabel>IsPutable</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="isPutable" />
          </FormControl>
    
    <FormControl>
              <InputLabel>IssueDate</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="issueDate" />
          </FormControl>
    
    <FormControl>
              <InputLabel> LastResetDate</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="lastResetDate" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Maturity</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="maturity" />
          </FormControl>
    
    <FormControl>
              <InputLabel>MaxCallNoticeDays</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="maxCallNoticeDays" />
          </FormControl>
    
    <FormControl>
              <InputLabel>MaxPutNoticeDays</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="maxPutNoticeDays" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Penultimate_CouponDate</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="penultimateCouponDate" />
          </FormControl>
    
    <FormControl>
              <InputLabel>ResetFrequency</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="resetFrequency" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Has_Position</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="hasPosition" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Macaulay_Duration</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="macaulayDuration" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Volatility_30Days</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="volatility30days" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Volatility_90Days</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="volatility90days" />
          </FormControl>
    
    <FormControl>
              <InputLabel>Convexity</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="convexity" />
          </FormControl>
    
    <FormControl>
              <InputLabel>AvgVolume_30days</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="avgVolume30days" />
          </FormControl>
    
    <FormControl>
              <InputLabel>PF_AssetClass</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfAssetClass" />
          </FormControl>
    
    <FormControl>
              <InputLabel> PF_Country</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfCountry" />
          </FormControl>
    
    <FormControl>
              <InputLabel>PF_CreditRating</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfCreditRating" />
          </FormControl>
    
    <FormControl>
              <InputLabel>PF_Currency:</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfCurrency:" />
          </FormControl>
    
    <FormControl>
              <InputLabel>PF_Instrument</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfInstrument" />
          </FormControl>
    <FormControl>
              <InputLabel>PF_LiquidityProfile</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfLiquidityProfile" />
          </FormControl>
    <FormControl>
              <InputLabel>PF_Maturity</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfMaturity" />
          </FormControl>
    <FormControl>
              <InputLabel>PF_NAICS_Code</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfNaicsCode" />
          </FormControl>
    <FormControl>
              <InputLabel>PF_Region</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfRegion" />
          </FormControl>
    <FormControl>
              <InputLabel>PF_Sector</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfSector" />
          </FormControl>
    <FormControl>
              <InputLabel>PF_SubAssetClass</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="pfSubAssetClass" />
          </FormControl>
    <FormControl>
              <InputLabel>BBG_Industry_Group</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="bbgIndustryGroup" />
          </FormControl>
    <FormControl>
              <InputLabel>BBG_Industry_SubGroup</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="bbgIndustrySubGroup" />
          </FormControl>
    <FormControl>
              <InputLabel>BBG_Industry_Sector</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="bbgIndustrySector" />
          </FormControl>
    <FormControl>
              <InputLabel>Issue_Country</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="issueCountry" />
          </FormControl>
    <FormControl>
              <InputLabel>Issue_Currency</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="issueCurrency" />
          </FormControl>
    <FormControl>
              <InputLabel>Issuer</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="issuer" />
          </FormControl>
    <FormControl>
              <InputLabel>Risk_Currency</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="riskCurrency" />
          </FormControl>
    <FormControl>
              <InputLabel>Put_Date</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="putDate" />
          </FormControl>
    <FormControl>
              <InputLabel>Put_Price</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="putPrice" />
          </FormControl>
    <FormControl>
              <InputLabel>Ask_Price</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="askPrice" />
          </FormControl>
    <FormControl>
              <InputLabel>High_Price</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="highPrice" />
          </FormControl>
    <FormControl>
              <InputLabel>Low_Price</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="lowPrice" />
          </FormControl>
    <FormControl>
              <InputLabel>Open_Price</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="openPrice" />
          </FormControl>
    <FormControl>
              <InputLabel>Volume</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="volume" />
          </FormControl>
    <FormControl>
              <InputLabel>Bid_Price</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="bidPrice" />
          </FormControl>
    <FormControl>
              <InputLabel>Last_Price</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="lastPrice" />
          </FormControl>
    <FormControl>
              <InputLabel>CallDate</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="callDate" />
          </FormControl>
    <FormControl>
              <InputLabel>CallPrice</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="callPrice" />
          </FormControl>
    
          <FormControl>
              <Button onClick={() => editBond()} variant="contained">Edit Bond</Button>
          </FormControl>
    
    </Container>
    
    );
}

export default EditBond