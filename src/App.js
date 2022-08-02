import logo from './logo.svg';
import './App.css';

function App() {

  var age = 25;
  var name = 'John';
  var isActive = true;
  var salary = 12345.56

  var employee = {
    name:"raj",
    email:"raj@gmail.com",
  }


  return (
    <div className="App">

      <h1>Name={name}</h1>
      <h2>age = {age}</h2>
      <h3>salary  ={salary}</h3>
      <h4>isActive = {isActive?"Active":"Not Active"}</h4>

      <h1>Emp Name = {employee.name}</h1>
      <h2>Emp Email = {employee.email}</h2>
    </div>
  );
}

export default App;
