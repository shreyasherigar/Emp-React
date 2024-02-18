<<<<<<< HEAD
=======
import React, { useState } from 'react';
>>>>>>> 20797b8 (added use state)
import EmpDate from './EmpDate';
import './EmpDetails.css'


<<<<<<< HEAD
function EmpDetails(props){

    return(
        <div>
        <div className="Emp-details">
        <div className='Emp-details-doj'>
        <EmpDate date={props.doj}/>
        </div>
        <div><h2>{props.name}</h2></div>
        <div className='Emp-details-exp'>{props.exp}</div>
        
    </div>
        </div>
=======
const EmpDetails=(props)=>{

    // let name=props.name;

    const[name,setName]=useState(props.name);
    const clickHandler=()=>{
        console.log("clicked!");
        setName("changed");

    }

    return(
            <div className="Emp-details">
                <EmpDate date={props.doj}/>
                <div><h2>{name}</h2></div>
                <div className='Emp-details-exp'>{props.exp}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>


>>>>>>> 20797b8 (added use state)
    );
}
export default EmpDetails