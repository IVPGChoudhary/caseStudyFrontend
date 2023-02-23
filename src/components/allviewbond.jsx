import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Divider } from '@mui/material';

const NewList =styled(List)`
width:50%;
margin:1% auto 0 auto
;
`

export default function AllView() {
  const [open, setOpen] = React.useState(true);
  const navigate= useNavigate();

  const handleClick = () => {
    setOpen(!open);

  }

    const summarybond = () => {
        navigate('/summarybond');
    }

    const CallSchedule = () => {
      navigate('/callschudle');
  }

  const Details= () => {
    navigate('/details');
}


const Identifier = () => {
  navigate('/identifier');
}

const Pricing = () => {
  navigate('/pricing');
}

const PutSchedule = () => {
  navigate('/putschedule');
}

const RegulatoryData = () => {
  navigate('/regulatorydata');
}

const RegulatoryDetails = () => {
  navigate('/regulatorydetails');
}

const Risk = () => {
  navigate('/risk');
}


  return (
    <NewList
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Select Bond Tabs" />
        {open ? <ExpandLess /> : <ExpandMore />}

      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Divider />

          <ListItemButton onClick={() => summarybond()} sx={{ pl: 1 }}>
            <ListItemText primary="Summary" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => CallSchedule()} sx={{ pl: 1 }}>
            <ListItemText primary="Call Schedule" />
          </ListItemButton>
          <Divider />

          <ListItemButton onClick={() => Details()} sx={{ pl: 1 }}>
            <ListItemText primary="Details" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => Identifier()} sx={{ pl: 1 }}>
            <ListItemText primary="Identifier" />
          </ListItemButton>
          <Divider />

          <ListItemButton onClick={() => Pricing()} sx={{ pl: 1 }}>
            <ListItemText primary="Pricing And Analytics" />
          </ListItemButton>
          <Divider />

          <ListItemButton onClick={() => PutSchedule()} sx={{ pl: 1 }}>
            <ListItemText primary="Put Schedule" />
          </ListItemButton>
          <Divider />

          <ListItemButton onClick={() => RegulatoryData()} sx={{ pl: 1 }}>
            <ListItemText primary="Reference Data" />
          </ListItemButton>
          <Divider />

          <ListItemButton onClick={() => RegulatoryDetails()} sx={{ pl: 1 }}>
            <ListItemText primary="Regulatory Details" />
          </ListItemButton>
          <Divider />

          <ListItemButton onClick={() => Risk()} sx={{ pl: 1 }}>
            <ListItemText primary="Risk" />
          </ListItemButton>
          <Divider />
        </List>
      </Collapse>
    </NewList>
  );
}
