import React from 'react';
import './NavBar.css'
import {LayoutDashboard} from 'lucide-react';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import {QuizOutlined,quiz} from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className="navbar">
     
   <div>
   <div className="dashboard">
    <div>  <LayoutDashboard className='style'/></div>
    <div>  <p className='name'>Dashboard</p></div>
    </div>
    <div className="dashboard"  id="select">
      <div><NoteAltOutlinedIcon className='style'/></div>
    <div>  <p className='name'>Assessment</p></div>
    </div>
    <div className="dashboard">
     <div> <QuizOutlined className='style'/></div>
     <div> <p className='name'>My Library</p></div>
    </div>
   </div>
    <div className='port2'>
    <div>
       <div className="separator" />
       </div>
       <div className="dashboard">
        <button>Admin</button>
       </div>
       <div className="dashboard">
    <div>  <LayoutDashboard className='style'/></div>
    <div>
    <p className='name'>Round</p>
      <p className='name'>Status</p>
    </div>
    </div>
    </div>

    </div>
  );
};

// const NavItem = ({ icon, text }) => {
//   return (
//     <div className="nav-item">
//       <div className={`icon ${icon}`}>{/* Insert icon component or image here */}</div>
//       <div className="text">{text}</div>
//     </div>
//   );
// };

export default Navbar;
