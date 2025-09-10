import './Logout.css';
import { useEffect, useState } from 'react';
import { __urlapi } from '../../API_URL';
import {Navigate} from 'react-router-dom';


function Logout() {

   
   useEffect(()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("address");
    localStorage.removeItem("mobile");
    localStorage.removeItem("gender");
    localStorage.removeItem("city");
    localStorage.removeItem("info");
   },[])
  

  return (
    <>
   <Navigate to ="/login"></Navigate>
    </>
   
  );
}

export default Logout;
