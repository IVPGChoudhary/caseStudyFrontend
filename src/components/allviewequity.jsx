import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListIcon from '@mui/icons-material/List';
import DetailsIcon from '@mui/icons-material/Details';
import HistoryIcon from '@mui/icons-material/History';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DataArrayRoundedIcon from '@mui/icons-material/DataArrayRounded';
import {  useParams,useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { AlignHorizontalLeft } from '@mui/icons-material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import DangerousRoundedIcon from '@mui/icons-material/DangerousRounded';
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import { Divider } from '@mui/material';




const NewList =styled(List)`
width:50%;
margin:1% auto 0 auto;
`

export default function AllView() {
  const {id}=useParams();
  const [open, setOpen] = React.useState(false);
  const navigate= useNavigate();

  const handleClick = () => {
    setOpen(!open);

  }

    const SummaryEquity = () => {
        navigate(`/summary/equity/${id}`);
    }

    const DividendHistory = () => {
      navigate('/dividend/equity');
  }

  const DetailsEquity= () => {
    navigate('/details/equity');
}


const IdentifierEquity = () => {
  navigate('/identifier/equity');
}

const PricingEquity = () => {
  navigate('/pricing/equity');
}


const RegulatoryDataEQuity = () => {
  navigate('/referencedata/equity');
}

const RegulatoryDetailsEquity = () => {
  navigate('/regulatorydetails/equity');
}

const RiskEquity = () => {
  
  navigate('/risk/equity');
}


  return (
    <div style={{display:'flex',justifyContent:'flex-start'}}>
      <NewList 
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'white'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ListIcon/>
        </ListItemIcon>
        <ListItemText primary="Select Equity Tabs" />
        {open ? <ExpandLess /> : <ExpandMore />}

      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <Divider/>
          <ListItemButton onClick={() => SummaryEquity()} sx={{ pl: 1}}>
            <ListItemIcon>
            <SummarizeIcon style={{color:'#1976d2'}}/>
            </ListItemIcon>
            <ListItemText primary=" SUMMARY" />
          </ListItemButton>
          <Divider/>

          <ListItemButton onClick={() => DividendHistory()} sx={{ pl: 1 }}>
          <ListItemIcon>
            <HistoryIcon style={{color:'#1976d2'}}/>
            </ListItemIcon>
            <ListItemText primary="Dividend History" />
          </ListItemButton>
          <Divider/>

          <ListItemButton onClick={() => DetailsEquity()} sx={{ pl: 1 }}>
          <ListItemIcon>
            <DetailsIcon style={{color:'#1976d2'}}/>
            </ListItemIcon>
            <ListItemText primary="Details" />
          </ListItemButton>
          <Divider/>

          <ListItemButton onClick={() => IdentifierEquity()} sx={{ pl: 1 }}>
            <ListItemIcon>
              <LabelImportantRoundedIcon style={{color:'#1976d2'}}/>
            </ListItemIcon>
            <ListItemText primary="Identifier" />
          </ListItemButton>
          <Divider/>

          <ListItemButton onClick={() => PricingEquity()} sx={{ pl: 1 }}>
          <ListItemIcon>
            <PriceChangeIcon style={{color:'#1976d2'}}/>
            </ListItemIcon>
            <ListItemText primary="Pricing Details" />
          </ListItemButton>
          <Divider/>


          <ListItemButton onClick={() => RegulatoryDataEQuity()} sx={{ pl: 1 }}>
            <ListItemIcon>
            <DataArrayRoundedIcon style={{color:'#1976d2'}}/>
            </ListItemIcon>

            <ListItemText primary="Reference Data" />
          </ListItemButton>
          <Divider/>

          <ListItemButton onClick={() => RegulatoryDetailsEquity()} sx={{ pl: 1 }}>
            <ListItemIcon>
              <AssuredWorkloadRoundedIcon style={{color:'#1976d2'}}/>
            </ListItemIcon>
            <ListItemText primary="Regulatory Details" />
          </ListItemButton>
          <Divider/>

          <ListItemButton onClick={() => RiskEquity()} sx={{ pl: 1 }}>
            <ListItemIcon>
              <DangerousRoundedIcon style={{color:'#1976d2'}}/>
            </ListItemIcon>
            <ListItemText primary="Risk" />
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse>
    </NewList>
    </div>
  );
}
