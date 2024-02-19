import {createContext, useReducer } from "react";

export const EmpContext=createContext({
    items:[],
    onSaveEmpData:()=>[],
});

function empReducer(state,action){
    const updatedEmps=[...state]

    if(action.type==="ADD_EMP"){
        const empData={
            ...action.payload,
            id: Math.random().toString(),
        };
        updatedEmps.push(empData)
      
        //   setEmps((previousEmp)=>{
        //     return [empData,...previousEmp];
        //   });
    }
        return updatedEmps;
    
}

export default function EmpContextProvider({children}){
    const DUMP_EMPS=[
        {id:'e1',Name:'Shreya',DOJ:new Date(2020,8,12),Experience:5},
        {id:'e2',Name:'Swecha',DOJ:new Date(2021,1,14),Experience:5},
        {id:'e3',Name:'Sharavi',DOJ:new Date(2021,10,10),Experience:2},
        {id:'e4',Name:'Yakshitha',DOJ:new Date(2021,7,1),Experience:2},
      ];
    
    
    const [emps,dispatch]=useReducer(empReducer,DUMP_EMPS)
    // const[emps,setEmps]=useState(DUMP_EMPS);

    const addEmpHandler=(emp)=>{
        dispatch(
            {
                type:'ADD_EMP',
                payload:emp
            }
        )
    }


    const contextValue={
        items:emps,
        onSaveEmpData:addEmpHandler
      }
      return <EmpContext.Provider value={contextValue}>
        {children}
      </EmpContext.Provider>
    
}