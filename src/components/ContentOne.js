import React from 'react'
import './ContentOne.css';
import Content from './Content';
import ContentTwo from './ContentTwo';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LinkIcon from '@mui/icons-material/Link';

function ContentOne() {
  return (
       <div className='aligning'>
        <Content />
       
        <div className="fit">
        <h3 className="ao">Assessments Overview</h3>
        <div className="app">
           
           <section className="section1 section3">
             <h5>Total Assessment</h5>
             <div className="info1">
             <i className="fa-sharp fa-regular fa-user" style={{color:'#6548EE'}}><ViewAgendaOutlinedIcon/></i>
             <h2>34</h2>
           </div>
           </section>
         <section>
         <h5>Candidates</h5>
         <div className="sub-info">
           <i className="fa-sharp fa-regular fa-user" style={{color:'#6548EE'}}><PeopleAltOutlinedIcon/></i>
           <div className="info2">
           <h2>11,145 <span>+89</span></h2>
           <p>Total Candidate</p>
         </div>
        
         <div className="info">
           
           <h2>1,14 <span>+89</span></h2>
           <p>Who Attemped</p>
         </div>
       </div>
           </section> 
           <section>
           <h5>Candidates Score</h5>
           <div className="sub-info">
             <i className="fa-sharp fa-regular fa-user"  style={{color:'#E9407A'}}><LanguageIcon/></i>
           <div className="info2">
            
               <h2>11,000<span>+89</span></h2>
               <p>E-mail</p>
             </div>
             <div className="info">
               
               <h2>145 <span>+89</span></h2>
               <p>Social Share</p>
             </div>
             <div className="info">
               
               <h2>145 <span>+89</span></h2>
               <p>Uniquoe Link</p>
             </div>
           </div>
           </section>
           <section className="section3">
           <h5>Total Purpose</h5>
           <div className="info1">
               <i className="fa-sharp fa-regular fa-user" style={{color:'#0073E6'}}>< LinkIcon/></i>
               <h2>11</h2>
             </div>
           </section>
   </div>
   <ContentTwo />
        </div>
  
            
       </div>
  )
}

export default ContentOne;