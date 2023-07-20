import React,{useState} from 'react'
import './ContentTwo.css';
import { Plus } from 'lucide-react'; 
import GetForm from './GetForm';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';

function ContentTwo({callForm}) {
  const [getState,setGetState] = useState(false);
  const handleForm=()=>{
    console.log("hdksk");
    setGetState(true);
  }
  return (
    <> 
   <div className="container">
    <h3>My Assessments</h3>
    <div className="aligning-items">
    <div id="plus" onClick={()=>{handleForm()}}>
    <Plus  id="p"/>
    <h3 id="bgcol">New Assessment</h3>
    <p id="bgcol">prom here you can add questios of multiple types like</p>
    <p id="bgcol">MCQs, subjective(text or paragraph)!</p>
    </div>
    <div className="mathassignment">
    <div className="top-ele">
    <div>
      < BusinessCenterOutlinedIcon  className="b"/>
    </div>
    <div className="m">
      <MoreVertIcon/>
    </div>
    </div>
    <div className="mid-ele">
      <div className="mid">
      <p className="math-text">Math Assignment</p>
      </div>
      <div className="job-cal">
      <div className="job">
        <h4>Job</h4>
      </div>
      <div className="cal">
      <div className="calicon">
        <CalendarMonthIcon  />
      </div>
      <div className="date">
        <p>20 Apr 2023</p>
      </div>
            </div>
      </div>
    </div>
    <div className="bot-ele">
      <div className="left">
        <div className="left-in">
          <div className="time">
            00
          </div>
          <div className="dur">
            Duration
          </div>
        </div>
        <div className="left-out">
          <div className="time">
            00
          </div>
          <div className="dur">
            Question
          </div>
        </div>
      </div>
      <div className="right">
        <div className="share">
          <div className="lnk">
              <LinkIcon />
          </div>
          <div className="shr">
            Share
          </div>
        </div>
        <button className="lp">LP</button>
      </div>
    </div>
    </div>
    <div> 

    </div>
    <div className="mathassignment">
    <div className="top-ele">
    <div>
      < BusinessCenterOutlinedIcon  className="b"/>
    </div>
    <div className="m">
      <MoreVertIcon/>
    </div>
    </div>
    <div className="mid-ele">
      <div className="mid">
      <p className="math-text">Math Assignment</p>
      </div>
      <div className="job-cal">
      <div className="job">
        <h4>Job</h4>
      </div>
      <div className="cal">
      <div className="calicon">
        <CalendarMonthIcon  />
      </div>
      <div className="date">
        <p>20 Apr 2023</p>
      </div>
            </div>
      </div>
    </div>
    <div className="bot-ele">
      <div className="left">
        <div className="left-in">
          <div className="time">
            00
          </div>
          <div className="dur">
            Duration
          </div>
        </div>
        <div className="left-out">
          <div className="time">
            00
          </div>
          <div className="dur">
            Question
          </div>
        </div>
      </div>
      <div className="right">
        <div className="share">
          <div className="lnk">
              <LinkIcon />
          </div>
          <div className="shr">
            Share
          </div>
        </div>
        <button className="lp">LP</button>
        <button className="lp1">LP</button>
        <button className="lp2">LP</button>
      </div>
    </div>
    </div>
    <div> 
    </div>
    </div>
   </div>
   <div className={getState?'show-form':'hide-form'}><GetForm /></div>
  </>
  )
}

export default ContentTwo;