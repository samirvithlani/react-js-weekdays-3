import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Content } from './components/Content';
import { Employees } from './crud/Employees';
import { FormDemo } from './crud/FormDemo';
import { EmployeeRegistration } from './crud/EmployeeRegistration';
import { StudentRegistration } from './forms/StudentRegistration';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Aboutus } from './components/Aboutus';
import { ContactUs } from './components/ContactUs';
import { Blog } from './components/Blog';
import { ContactDetail } from './components/ContactDetail';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';

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
      <Navbar/>
      <Routes>
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path = '/blog' element={<Blog/>}/>
          <Route path ="/contactdetail/:id/:name" element = {<ContactDetail/>}/>
          <Route path = "/products" element={<Products/>}></Route>
          <Route path = "/product/:id" element = {<ProductDetail/>}></Route>
      </Routes>

      {/* <Header uName = {userName} email = {email}/>
      
      
      <StudentRegistration/>
      <Footer/> */}
    </div>
  );
}

export default App;
