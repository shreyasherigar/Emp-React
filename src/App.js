
import { useEffect } from 'react';
import EmployeForm from './Emp/EmpForm';
import Emps from './Emp/Emps';
import NewEmploye from './Emp/NewEmp';
// import {useState}from 'react';
// import { EmpContext } from './emp-context';
import EmpContextProvider from './Emp/emp-context';
import {useSelector,useDispatch} from 'react-redux';
import { sendEmpData } from './Store';


const App=() =>{
  const items=useSelector(state=>state.items);
  const dispatch=useDispatch();


  useEffect(
    ()=>{
      dispatch(sendEmpData(items))

      // fetch('https://empreact-default-rtdb.firebaseio.com/emp.json',{
      //   method:'PUT',
      //   body:JSON.stringify(items)
      // })
    },
    [items,dispatch]
  );

  return (
    <EmpContextProvider>
      <div>
        <h1> Let's get started</h1>
        <NewEmploye >
          <EmployeForm />
        </NewEmploye>
        <Emps/>
      </div>
    </EmpContextProvider>
  );
}

export default App;
