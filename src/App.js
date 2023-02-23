import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import AddEquity from './components/addequity';
import AllBond from './components/bond';
import AddBonds from './components/addbond';
import AllEquity from './components/equity';
import EditBond from './components/editbond';
import AllView from './components/allviewbond';
import EditEquity from './components/editequity';
import AllViewEquity from './components/allviewequity';

import SummaryBond from './components/bonds/secsummarybond';
import Callschedule from './components/bonds/callschedule';
import Detailsbond from './components/bonds/details';
import Identifierbond from './components/bonds/identifier';
import PricingAndAnalytics from './components/bonds/pricing';
import PutSchedule from './components/bonds/putschedule';
import ReferenceData from './components/bonds/referencedata';
import RegulatoryDetail from './components/bonds/regdetails';
import Riskbond from './components/bonds/risk';

import EqSecuritysummary from './components/equity/secsummary';
import EqSecurityDetails from './components/equity/details';
import EqDivHistory from './components/equity/history';
import EqSecurityIdentifier from './components/equity/identifier';
import EqPricingDeatils from './components/equity/pricingdetails';
import EqReferenceData from './components/equity/refdata';
import EqRegulatoryDetails from './components/equity/regdetails';
import EqRisk from './components/equity/risk';


import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
     
      <Route path="/" element={<AllEquity />} />
      <Route path="/addequity" element={<AddEquity />} />
      <Route path="/bond" element={<AllBond />} />
      <Route path="/addbond" element={<AddBonds/>} />
      <Route path="/editbond/:id" element={<EditBond />} />
      <Route path="/allviewsbond" element={<AllView/>} />
      <Route path="/editequtiy/:id" element={<EditEquity/>} />
      <Route path="/allviewsequity/:id" element={<AllViewEquity/>} />


      <Route path="/summarybond" element={<SummaryBond/>}/>
      <Route path="/callschudle" element={<Callschedule/>}/>
      <Route path="/details" element={<Detailsbond/>} />
      <Route path="/identifier" element={<Identifierbond/>} />
      <Route path="/pricing" element={<PricingAndAnalytics/>} />
      <Route path="/putschedule" element={<PutSchedule/>} />
      <Route path="/regulatorydata" element={<ReferenceData/>} />
      <Route path="/regulatorydetails" element={<RegulatoryDetail/>} />
      <Route path="/risk" element={<Riskbond/>} />

      <Route path="/summary/equity/:id" element={<EqSecuritysummary/>}/>
      <Route path="/details/equity" element={<EqSecurityDetails/>}/>
      <Route path='/dividend/equity' element={<EqDivHistory/>}/>
      <Route path='/identifier/equity' element={<EqSecurityIdentifier/>}/>
      <Route path='/pricing/equity' element={<EqPricingDeatils/>}/>
      <Route path='/referencedata/equity' element={<EqReferenceData/>}/>
      <Route path='/regulatorydetails/equity' element={<EqRegulatoryDetails/>}/>
      <Route path='/risk/equity' element={<EqRisk/>}/>


    </Routes>
  </BrowserRouter>
  );
}

export default App;