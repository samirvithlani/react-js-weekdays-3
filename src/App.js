import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Content } from './components/Content';

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
      <Content student ={student} email = {email}/>
      <Footer/>
    </div>
  );
}

export default App;
