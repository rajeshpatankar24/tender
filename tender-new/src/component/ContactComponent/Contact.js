import { useState } from 'react';
import './Contact.css';

function Contact() {

  const[users,setUser]=useState([{"uid":1001,"unm":"matt","password":1234},{"uid":1002,"unm":"rebbaca","password":3463},{"uid":1003,"unm":"jack","password":857}])
  const [count,setCount]= useState(5)

  const decrement=()=>{
    setCount(count-1);
    console.log("hey");
  }
  const increment = ()=>{
    setCount(count+1);
  }
  return (
    <>
   <div id ="content">
    <h1>Contact Component</h1>
    <br/><hr/><hr/><br/>
    <h2>User details</h2>
    <table border="2">
    <tr>
      <th>uid</th>
      <th>uname</th>
      <th>upassword</th>
    </tr>
    {
      
      users.map((row)=>(
        
          <tr>
          
          <td> {row.uid}</td>
          <td> {row.unm}</td>
          <td> {row.password}</td>

          </tr>
        
      ))
    }
    </table>
    <h1>{count}</h1>
    <button onClick={decrement}>dec </button>
    <button onClick={increment}>inc </button>
   </div>
    </>
   
  );
}

export default Contact;
