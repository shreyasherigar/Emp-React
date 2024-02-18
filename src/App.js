import Emps from './Emps';
<<<<<<< HEAD

function App() {
  const emp=[
    {id:'e1',name:'Shreya',doj:new Date(2020,8,12),exp:5},
    {id:'e2',name:'Swecha',doj:new Date(2021,1,14),exp:5},
    {id:'e3',name:'Sharavi',doj:new Date(2021,10,10),exp:2},
    {id:'e4',name:'Yakshitha',doj:new Date(2021,7,1),exp:2},
]


  return (
    <div>
    <h1> Let's get started</h1>
    <Emps items={emp}/>
=======
import NewEmploye from './NewEmp';
import {useState}from 'react';



const DUMP_EMPS=[
  {id:'e1',Name:'Shreya',DOJ:new Date(2020,8,12),Experience:5},
  {id:'e2',Name:'Swecha',DOJ:new Date(2021,1,14),Experience:5},
  {id:'e3',Name:'Sharavi',DOJ:new Date(2021,10,10),Experience:2},
  {id:'e4',Name:'Yakshitha',DOJ:new Date(2021,7,1),Experience:2},
]


const App=() =>{

  const[emps,setEmps]=useState(DUMP_EMPS);



  const addEmpHandler=(emp)=>{
    console.log(emp)

    setEmps((previousEmp)=>{
      return [emp,...previousEmp];
  });
}

  return (
    <div>
    <h1> Let's get started</h1>
    <NewEmploye onEmpAdded={addEmpHandler}/>
    <Emps items={emps}/>
>>>>>>> 20797b8 (added use state)
    </div>
  );
}

export default App;
