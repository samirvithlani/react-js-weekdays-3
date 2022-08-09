import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Content } from './components/Content';
import { Employees } from './crud/Employees';
import { FormDemo } from './crud/FormDemo';
import { EmployeeRegistration } from './crud/EmployeeRegistration';
import { StudentRegistration } from './forms/StudentRegistration';

function App() {

  var userName = "Harsh"
  var email = "harsh@gmail.com"
  
  var student = {
    name: "raj",
    age: "20",
    email:"raj@gmail.com",
    class:"java"
  
  }
  return (
    <div className="App">
      <Header uName = {userName} email = {email}/>
      
      
      <StudentRegistration/>
      <Footer/>
    </div>
  );
}

export default App;
