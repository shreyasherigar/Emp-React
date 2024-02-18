<<<<<<< HEAD
import EmpDetails from "./EmpDetails";
import './Emps.css';

function Emps(props){

    return(
    <div className='Emps'>
    <h1>Employee Details</h1>
      <EmpDetails name={props.items[0].name} doj={props.items[0].doj} exp={props.items[0].exp}></EmpDetails>
      <EmpDetails name={props.items[1].name} doj={props.items[1].doj} exp={props.items[1].exp}></EmpDetails>
      <EmpDetails name={props.items[2].name} doj={props.items[2].doj} exp={props.items[2].exp}></EmpDetails>
      <EmpDetails name={props.items[3].name} doj={props.items[3].doj} exp={props.items[3].exp}></EmpDetails>
    </div>

    );
}
export default Emps;
=======
import React, { useState } from 'react';
import EmpList from "./EmpList";
import EmpFilter from "./EmpFilter";

import './Emps.css';

const Emps = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredEmps = props.items.filter(emp => {
    return emp.DOJ.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='Emps'>
      <EmpFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <EmpList items={filteredEmps}/>

    </div>
  );
}
export default Emps;
>>>>>>> 20797b8 (added use state)
