import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import Header from './component/HeaderComponent/Header';
import Nav from './component/NavComponent/Nav';
import Content from './component/ContentComponent/Content';
import Footer from './component/FooterComponent/Footer';
import About from './component/AboutComponent/About';
import Contact from './component/ContactComponent/Contact';
 import Services from './component/ServicesComponent/Services';
import Register from './component/RegisterComponent/Register';
import Login from './component/LoginComponent/Login';
import Carousel from './component/CarouselComponent/Carousel';
import Admin from './component/AdminComponent/Admin';
import User from './component/UserComponent/User';
import Logout from './component/LogoutComponent/Logout';
import Category from './component/AddCategoryComponent/category';
import Addsubcategory from './component/AddSubCategoryComponent/subcategory';
import ManageUser from './component/ManageUserComponent/ManageUser';
import CPAdmin from './component/CPAdminComponent/CPAdmin';
import EPAdmin from './component/EPAdminComponent/EPAdmin';
import CPUser from './component/CPUserComponent/CPUser';
import EPUser from './component/EPUserComponent/EPUser';
import ViewCategory from './component/ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './component/ViewSubCategoryComponent/ViewSubCategory';
import AddTender from './component/AddTenderComponent/AddTender';
import ViewProduct from './component/ViewProductComponent/ViewProduct';
import AddBid from './component/BidProductComponent/AddBid';
import ViewBidProduct from './component/ViewBidProductComponent/ViewBidProduct';
import ViewBid from './component/ViewBidComponent/ViewBid';
import Verify from './component/VerifyComponent/verify';



function App() {
  return (
    <>
    <Header />
    <Nav />
    <Carousel />
    
     <Routes>
     <Route path="/" element={<Content />}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/services" element={<Services/>}></Route> 
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/login"  element={<Login/>}></Route>
     <Route path="/logout" element={<Logout/>}></Route>
     <Route path="/admin" element={<Admin/>}></Route>
     <Route path="/addcategory" element={<Category/>}></Route>
     <Route path="/addsubcategory" element={<Addsubcategory />}></Route>
     <Route path="/manageuser" element={<ManageUser/>}></Route>
     <Route path="/cpadmin" element={<CPAdmin/>}></Route>
     <Route path="/epadmin" element={<EPAdmin/>}></Route>
     <Route path="/user" element={<User/>}></Route>
     <Route path = "/viewcategory" element ={ <ViewCategory />}></Route>
     <Route path = "/viewscategory/:Cname" element ={ <ViewSubCategory />}></Route>
     <Route path = "/viewp" element ={ < AddTender/>}></Route>
     <Route path = "/viewproduct/:subcatnm" element ={ <ViewProduct/>}></Route>
     <Route path = "/bidproduct/:_id" element ={ <AddBid/>}></Route>
     <Route path = "/viewbidp" element ={ <ViewBidProduct/>}></Route>
     <Route path = "/viewbid/:_id" element ={ <ViewBid/>}></Route>
     <Route path="/cpuser" element={<CPUser/>}></Route>
     <Route path="/epuser" element={<EPUser/>}></Route>
     <Route path="/verify/:email" element={<Verify/>}></Route>

    </Routes>

    <Footer /> 
    </>  
   
  );
}

export default App;
