
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Auth() {
  const navigate = useNavigate();
  useEffect(()=>{
    const path = window.location.pathname;
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    //  
    // console.log(path);
    if(path == "/admin" || path == "/addcategory" || path == "/addsubcategory" || path == "/manageuser")
    {
      if(!token ||role!=="admin" ){
        alert('this is restricted');
         navigate("/logout")
      }
    }
    else if (path == "/user" )
    {
      
      if(!token || role!=="user" ){
        navigate("/logout")
     }
    }
    else 
    {
      if(role=="admin"){
      navigate("/admin");}
      else if (role=="user"){
        navigate("/user");
      }
      else{
        navigate(path);
      }

    }
    

  },[])


  return (
    <>
    
    </>
   
  );
}

export default Auth;
