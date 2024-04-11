import './App.css';
import BST_ClassComp from './components/BST_ClassComp';
import BST_FuncDemo from './components/BST_FuncDemo';

function App() {
  const users= {
    userName:"k22cnt3",
    password:"123123",
    fistName:"bui son",
    lastName:"tung"
  }

  function formatName(users){
    return  <h2>xin chao, {users.fistlName} {users.lastName}</h2>
  }

  return (
    <div className="App">
      <div>
        <p>FullName: {users.fistlName} {users.lastName}</p>
        {formatName(users)}
      </div>

      <div>
        <BST_FuncDemo />
        <BST_FuncDemo userName="BST" fullName="bui son tung" age="24" />
      </div>
      <div>
        {/* dung khong su dung props */}
        <BST_ClassComp />
        {/* su dung props */}
        <BST_ClassComp company="Fit-NTU1" course="Reactjs1" />
        <BST_ClassComp company="Fit-NTU2" course="Reactjs2" />
        <BST_ClassComp company="Fit-NTU3" course="Reactjs3" />
        <BST_ClassComp company="Fit-NTU4" course="Reactjs4" />

      </div>
    </div>
  );
}

export default App;
