import React from 'react';
import './GetForm.css'
function GetForm(){
   return (
    <div className="form">
    <h1>Create new assessment</h1> 


    <div className="file">
        <label>Name of assessment</label><br/><br/>
      <input type="text" className="type" value="Type Here" /><br/><br/>
       <label>purpose of the set is</label><br/><br/>
       <select className="select">
        <option value="select" className="type">select</option>
       </select><br/><br/>
       <label>Description</label><br/><br/>
       <select className="select">
        <option value="select" className="type">select</option>
       </select><br/><br/>
       <div>
        <label>skills</label><br/><br/>
       <div className="grid-container">
         <div className="grid">
            <p className="item">UI/UX and Design X</p>
         <p className="item">No of Question X</p>
         <p className="item"> Web Devlopment X</p>
         <p className="item">  UI/UX and Design X</p>
         <p className="item"> Web Devlopment X</p>
         </div>
         <p className="para">Type here</p>
       </div><br />
       <label>Duration of assessment</label><br/><br/>
       <input type="datetime" className="type" id="input" value="HH:MM:SS" disabled /><br/><br/>
       <p className="save">save</p>
       </div>
    </div>
</div>
   )
}
export default GetForm