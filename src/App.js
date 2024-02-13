import Emps from './Emps';

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
    </div>
  );
}

export default App;
