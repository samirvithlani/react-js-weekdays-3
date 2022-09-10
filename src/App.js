import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Content } from "./components/Content";
import { Employees } from "./crud/Employees";
import { FormDemo } from "./crud/FormDemo";
import { EmployeeRegistration } from "./crud/EmployeeRegistration";
import { StudentRegistration } from "./forms/StudentRegistration";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Aboutus } from "./components/Aboutus";
import { ContactUs } from "./components/ContactUs";
import { Blog } from "./components/Blog";
import { ContactDetail } from "./components/ContactDetail";
import { Products } from "./components/Products";
import { ProductDetail } from "./components/ProductDetail";
import { UserApi } from "./api/UserApi";
import { RapiApi } from "./api/RapiApi";
import { RegisterDoctor } from "./doctorapp/RegisterDoctor";
import { ViewDoctors } from "./doctorapp/ViewDoctors";
import { UpdateDoctor } from "./doctorapp/UpdateDoctor";
import { Storage } from "./components/Storage";
import { ReadStore } from "./components/ReadStore";
import { LoginDoctor } from "./components/LoginDoctor";
import { useNavigate } from "react-router-dom";
import { Data } from "./contextdemo/Data";
import { Json } from "./contextDemo2/Json";
function App() {
  var doctorId = localStorage.getItem("doctorid");
  var navigate = useNavigate();
  var userName = "Harsh";
  var email = "harsh@gmail.com";

  var student = {
    name: "raj",
    age: "20",
    email: "raj@gmail.com",
    class: "java",
  };
  return (
    <div className="App">
      
      {/* <Storage/>
      <ReadStore/> */}
    

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactdetail/:id/:name" element={<ContactDetail />} />
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/adddoctor" element={<RegisterDoctor />}></Route>
        <Route path="/viewdoctor" element={<ViewDoctors />}></Route>
        <Route path="/updatedoctor/:id" element={<UpdateDoctor />}></Route>
        <Route path="/login" element={<LoginDoctor />}></Route>
        <Route path="*" element = {<h1>404 Not Found</h1>}></Route>
        {/* //<Route path="*" element = {<h1>404 Not Found</h1>}></Route> */}
      </Routes>
      <Json/>

      {/* <Header uName = {userName} email = {email}/>
      
      
      <StudentRegistration/>
      <Footer/> */}
    </div>
  );
}

export default App;
