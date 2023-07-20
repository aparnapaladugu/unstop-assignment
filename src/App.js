import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Content from './components/Content';
import ContentTwo from './components/ContentTwo';
import ContentOne from './components/ContentOne';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ContentOne />

    
    </div>
  );
};

export default App;



// import React from 'react';
// import './App.css';
// import Content from './components/Content';

// const App = () => {
//   return (
//   <div>
//       <div className="app">
//       <div className="sidebar">
//         <div className="dashboard">
//           <div className="icon">Dashboard Icon</div>
//           <div className="text">Dashboard</div>
//         </div>
//         <div className="assessment">
//           <div className="icon">Assessment Icon</div>
//           <div className="text">Assessment</div>
//         </div>
//         <div className="my-library">
//           <div className="icon">MyLibrary Icon</div>
//           <div className="text">My Library</div>
//         </div>
//         <div className="separator" />
//         <div className="admin">
//           <div className="icon">Admin Icon</div>
//           <div className="text">Admin</div>
//         </div>
//         <div className="round-status">
//           <div className="icon">RoundStatus Icon</div>
//           <div className="text">Round Status</div>
//         </div>
//       </div>
     
//     </div>
//     <Content />
//   </div>
//   );
// };

// export default App;
